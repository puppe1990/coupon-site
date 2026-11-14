import { displayName } from './couponPresentation';

test('remove o prefixo Cupom do nome exibido', () => {
  expect(displayName('Cupom Yuool')).toBe('Yuool');
  expect(displayName('Cupom Zee Dog')).toBe('Zee Dog');
  expect(displayName('Diária Woba')).toBe('Diária Woba');
  expect(displayName('Convite 99 motorista')).toBe('Convite 99 motorista');
});
