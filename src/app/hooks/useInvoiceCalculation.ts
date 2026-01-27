import { useMemo } from "react";

interface LineItem {
  quantity: number;
  unitPrice: number;
}

export const useInvoiceCalculations = (items: LineItem[], vatRate: number, whtRate: number) => {
  return useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
    const vat = subtotal * (vatRate / 100);
    const wht = subtotal * (whtRate / 100);
    const grandTotal = subtotal + vat - wht;

    return { subtotal, vat, wht, grandTotal };
  }, [items, vatRate, whtRate]);
};