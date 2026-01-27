export interface LineItem {
  description: string
  quantity: number
  unitPrice: number
}

// currency options
export interface CurrencyOption {
  code: string
  symbol: string
  name: string
}


import * as Yup from "yup";

export const CURRENCIES: CurrencyOption[] = [
  { code: "NGN", symbol: "₦", name: "Nigerian Naira" },
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
]



// form schema
export const InvoiceSchema = Yup.object().shape({
  invoiceNumber: Yup.string()
    .required("Invoice number is required")
    .min(2, "Invoice number must be at least 2 characters"),
  invoiceDate: Yup.string()
    .required("Invoice date is required"),
  dueDate: Yup.string()
    .required("Due date is required"),
  customerName: Yup.string()
    .required("Customer name is required")
    .min(2, "Customer name must be at least 2 characters"),
  customerEmail: Yup.string()
    .required("Customer email is required")
    .email("Invalid email address"),
  customerPhone: Yup.string()
    .optional(),
  billingAddress: Yup.string()
    .required("Billing address is required")
    .min(5, "Billing address must be at least 5 characters"),
  vatRate: Yup.number()
    .required("VAT rate is required")
    .min(0, "VAT rate cannot be negative")
    .max(100, "VAT rate cannot exceed 100"),
  whtRate: Yup.number()
    .required("WHT rate is required")
    .min(0, "WHT rate cannot be negative")
    .max(100, "WHT rate cannot exceed 100"),
    
})
