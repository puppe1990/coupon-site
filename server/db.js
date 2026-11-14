const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

const SCHEMA = `
  create table if not exists coupons (
    id text primary key,
    name text not null,
    logo text not null,
    discount text not null,
    coupon_code text not null default '',
    link text not null,
    description text not null default '',
    category text not null,
    valid_until text not null default '',
    terms text not null default '',
    website text not null default '',
    company_description text not null default '',
    position integer not null default 0,
    created_at text not null default current_timestamp,
    updated_at text not null default current_timestamp
  );

  create table if not exists coupon_clicks (
    id integer primary key autoincrement,
    coupon_id text not null references coupons(id) on delete cascade,
    clicked_at text not null default current_timestamp
  );

  create index if not exists coupons_position_index on coupons (position);
  create index if not exists coupon_clicks_coupon_index on coupon_clicks (coupon_id);
`;

const openDatabase = (databasePath) => {
  if (typeof databasePath !== 'string' || databasePath.length === 0) {
    throw new Error(
      `caminho de banco inválido: recebido ${databasePath}, esperado string não vazia`
    );
  }

  if (databasePath !== ':memory:') {
    fs.mkdirSync(path.dirname(databasePath), { recursive: true });
  }

  const db = new Database(databasePath);
  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');
  db.exec(SCHEMA);

  return db;
};

module.exports = { openDatabase };
