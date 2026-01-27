export interface LineItem {
  description: string
  quantity: number
  unitPrice: number
}

export interface CurrencyOption {
  code: string
  symbol: string
  name: string
}


import * as Yup from "yup";

export const CURRENCIES = [
  { code: "NGN", symbol: "₦", name: "Nigerian Naira" },
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
] as const;

export const InvoiceSchema = Yup.object().shape({
  invoiceNumber: Yup.string().required("Invoice # is required"),
  invoiceDate: Yup.date().required("Date is required"),
  dueDate: Yup.date().required("Due date is required"),
  customerName: Yup.string().min(2, "Too short").required("Required"),
  customerEmail: Yup.string().email("Invalid email").required("Required"),
  billingAddress: Yup.string().min(5, "Too short").required("Required"),
  vatRate: Yup.number().min(0).max(100).required(),
  whtRate: Yup.number().min(0).max(100).required(),
  currencyCode: Yup.string().required(),
  items: Yup.array()
    .of(
      Yup.object().shape({
        description: Yup.string().required("Description required"),
        quantity: Yup.number().moreThan(0, "Min 1").required(),
        unitPrice: Yup.number().min(0, "Min 0").required(),
      })
    )
    .min(1, "At least one item is required"),
});