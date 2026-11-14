export const displayName = (name) => name.replace(/^Cupom\s+/, '');

const categoryColors = {
  'E-commerce': '#2F5FA8',
  Delivery: '#C2531F',
  Fintech: '#0F766E',
  'Pet Shop': '#A13565',
  Tecnologia: '#5B4BA8',
  Mobilidade: '#4D7C0F',
  Coworking: '#A16207',
  Hospedagem: '#0E7490'
};

export const categoryColor = (category) => categoryColors[category] || '#6B6255';
