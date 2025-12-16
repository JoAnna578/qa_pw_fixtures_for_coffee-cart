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

export const totalPriceFormatStr = (totalPrice: number): string => {
  return `Total: $${totalPrice.toFixed(2)}`;
};
