export const unitPriceFormatStr = (
  unitPrice: number,
  unitsNumber: number,
): string => {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
};

export const priceFormatStr = (unitPrice: number): string => {
  return `$${unitPrice.toFixed(2)}`;
};

export const totalPriceFormatStr = (
  unitPrice: number,
  unitsNumber: number,
): string => {
  const total = unitPrice * unitsNumber;
  return `Total: $${total.toFixed(2)}`;
};
