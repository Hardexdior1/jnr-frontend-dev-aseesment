import { useInvoiceCalculations } from "../hooks/useInvoiceCalculation";
import { CURRENCIES } from "../types/invoice";

export const InvoicePreview = ({ values }: { values: any }) => {
  const { subtotal, vat, grandTotal } = useInvoiceCalculations(values.items, values.vatRate, values.whtRate);
  const currency = CURRENCIES.find(c => c.code === values.currencyCode) || CURRENCIES[0];

  const format = (num: number) => num.toLocaleString(undefined, { minimumFractionDigits: 2 });

  return (
    <div id="invoice-capture" className="bg-white shadow-2xl min-h-[800px] p-12 text-slate-800 rounded-xl border border-gray-100">
      <div className="flex justify-between items-start border-b-2 border-slate-100 pb-8 mb-8">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-slate-900">INVOICE</h1>
          <p className="text-slate-500 mt-1 font-mono">#{values.invoiceNumber}</p>
        </div>
        <div className="text-right">
          <h2 className="font-bold text-xl">Nexora Ltd.</h2>
          <p className="text-sm text-slate-500">22 Marina Road, Lagos</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12 mb-12">
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Billed To</h3>
          <p className="font-bold text-lg">{values.customerName || "—"}</p>
          <p className="text-slate-500">{values.customerEmail}</p>
          <p className="text-slate-500 whitespace-pre-line">{values.billingAddress}</p>
        </div>
        <div className="text-right">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Details</h3>
          <p className="text-sm"><strong>Date:</strong> {values.invoiceDate}</p>
          <p className="text-sm"><strong>Due:</strong> {values.dueDate}</p>
        </div>
      </div>

      <table className="w-full mb-12">
        <thead>
          <tr className="bg-slate-50 text-slate-500 text-xs uppercase font-bold text-left">
            <th className="p-4">Description</th>
            <th className="p-4 text-center">Qty</th>
            <th className="p-4 text-right">Price</th>
            <th className="p-4 text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {values.items.map((item: any, i: number) => (
            <tr key={i} className="border-b border-slate-50">
              <td className="p-4 font-medium">{item.description || "Untitled Service"}</td>
              <td className="p-4 text-center">{item.quantity}</td>
              <td className="p-4 text-right">{currency.symbol}{format(item.unitPrice)}</td>
              <td className="p-4 text-right font-bold">{currency.symbol}{format(item.quantity * item.unitPrice)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end">
        <div className="w-64 space-y-3">
          <div className="flex justify-between text-slate-500">
            <span>Subtotal</span>
            <span>{currency.symbol}{format(subtotal)}</span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>VAT ({values.vatRate}%)</span>
            <span>{currency.symbol}{format(vat)}</span>
          </div>
          <div className="flex justify-between text-2xl font-black border-t-2 border-slate-900 pt-3 text-slate-900">
            <span>Total</span>
            <span>{currency.symbol}{format(grandTotal)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};