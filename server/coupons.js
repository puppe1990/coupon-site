const COUPON_COLUMNS = `
  id, name, logo, discount, coupon_code, link, description, category,
  valid_until, terms, website, company_description, position
`;

const INSERT_SQL = `
  insert into coupons (
    id, name, logo, discount, coupon_code, link, description, category,
    valid_until, terms, website, company_description, position
  ) values (
    @id, @name, @logo, @discount, @coupon_code, @link, @description, @category,
    @valid_until, @terms, @website, @company_description, @position
  )
`;

const UPSERT_SQL = `
  ${INSERT_SQL}
  on conflict(id) do update set
    name = excluded.name,
    logo = excluded.logo,
    discount = excluded.discount,
    coupon_code = excluded.coupon_code,
    link = excluded.link,
    description = excluded.description,
    category = excluded.category,
    valid_until = excluded.valid_until,
    terms = excluded.terms,
    website = excluded.website,
    company_description = excluded.company_description,
    position = excluded.position,
    updated_at = current_timestamp
`;

const UPDATE_SQL = `
  update coupons set
    name = @name,
    logo = @logo,
    discount = @discount,
    coupon_code = @coupon_code,
    link = @link,
    description = @description,
    category = @category,
    valid_until = @valid_until,
    terms = @terms,
    website = @website,
    company_description = @company_description,
    position = @position,
    updated_at = current_timestamp
  where id = @id
`;

const REQUIRED_FIELDS = ['id', 'name', 'logo', 'discount', 'link', 'category'];
const SLUG_PATTERN = /^[a-z0-9-]+$/;

const validateCoupon = (payload) => {
  const errors = REQUIRED_FIELDS.filter((field) => !payload?.[field]).map(
    (field) => `campo obrigatório ausente: ${field}`
  );

  if (payload?.id && !SLUG_PATTERN.test(payload.id)) {
    errors.push(`id inválido: "${payload.id}" (use apenas a-z, 0-9 e hífen)`);
  }

  return errors;
};

const normalizeLogo = (logo) => {
  if (!logo) return '';
  return logo.startsWith('/') || logo.startsWith('http') ? logo : `/images/${logo}`;
};

const toApiCoupon = (row) =>
  row && {
    id: row.id,
    name: row.name,
    logo: row.logo,
    discount: row.discount,
    couponCode: row.coupon_code || '',
    link: row.link,
    description: row.description || '',
    category: row.category,
    validUntil: row.valid_until || '',
    terms: row.terms || '',
    companyInfo: {
      website: row.website || '',
      description: row.company_description || ''
    }
  };

const toRow = (coupon, position) => ({
  id: coupon.id,
  name: coupon.name,
  logo: normalizeLogo(coupon.logo),
  discount: coupon.discount,
  coupon_code: coupon.couponCode || '',
  link: coupon.link,
  description: coupon.description || '',
  category: coupon.category,
  valid_until: coupon.validUntil || '',
  terms: coupon.terms || '',
  website: coupon.companyInfo?.website || '',
  company_description: coupon.companyInfo?.description || '',
  position
});

const listCoupons = (db, { search = '' } = {}) => {
  const term = search.trim();
  const rows = term
    ? db
        .prepare(
          `select ${COUPON_COLUMNS} from coupons where name like ? or category like ? order by position`
        )
        .all(`%${term}%`, `%${term}%`)
    : db.prepare(`select ${COUPON_COLUMNS} from coupons order by position`).all();

  return rows.map(toApiCoupon);
};

const getCoupon = (db, id) => {
  const row = db.prepare(`select ${COUPON_COLUMNS} from coupons where id = ?`).get(id);
  return row ? toApiCoupon(row) : null;
};

const currentPosition = (db, id) =>
  db.prepare('select position from coupons where id = ?').get(id)?.position ?? 0;

const nextPosition = (db) =>
  db.prepare('select coalesce(max(position), 0) + 1 as position from coupons').get().position;

const createCoupon = (db, coupon) => {
  db.prepare(INSERT_SQL).run(toRow(coupon, coupon.position ?? nextPosition(db)));
  return getCoupon(db, coupon.id);
};

const updateCoupon = (db, id, changes) => {
  const existing = getCoupon(db, id);
  if (!existing) return null;

  const merged = {
    ...existing,
    ...changes,
    id,
    companyInfo: { ...existing.companyInfo, ...changes.companyInfo }
  };

  db.prepare(UPDATE_SQL).run(toRow(merged, changes.position ?? currentPosition(db, id)));
  return getCoupon(db, id);
};

const deleteCoupon = (db, id) => db.prepare('delete from coupons where id = ?').run(id).changes > 0;

const registerClick = (db, id) => {
  if (!getCoupon(db, id)) return false;
  db.prepare('insert into coupon_clicks (coupon_id) values (?)').run(id);
  return true;
};

const countClicks = (db, id) =>
  db.prepare('select count(*) as total from coupon_clicks where coupon_id = ?').get(id).total;

const seedCoupons = (db, coupons) => {
  const statement = db.prepare(UPSERT_SQL);
  const insertAll = db.transaction((items) => {
    items.forEach((coupon, index) => statement.run(toRow(coupon, coupon.position ?? index + 1)));
  });

  insertAll(coupons);
  return coupons.length;
};

const seedIfEmpty = (db, coupons) => {
  const { total } = db.prepare('select count(*) as total from coupons').get();
  return total > 0 ? 0 : seedCoupons(db, coupons);
};

module.exports = {
  validateCoupon,
  listCoupons,
  getCoupon,
  createCoupon,
  updateCoupon,
  deleteCoupon,
  registerClick,
  countClicks,
  seedCoupons,
  seedIfEmpty
};
