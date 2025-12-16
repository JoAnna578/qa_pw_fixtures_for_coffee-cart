// src/common/helpers/getPriceForQuantity.ts

export const unitPriceFormatStr = (
  unitPrice: number,
  unitsNumber: number,
): string => {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
};

export const priceFormatStr = (unitPrice: number): string => {
  return `$${unitPrice.toFixed(2)}`;
};

// Funkcja do wyświetlania całkowitej wartości w koszyku
export const totalPriceFormatStr = (unitsNumber: number): string => {
  return `Total: $${unitsNumber.toFixed(2)}`;
};
