export const PriceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatPrice(price : number) {
  const roundedPrice = Number(price.toFixed(2));
  return PriceFormatter.format(roundedPrice);
}