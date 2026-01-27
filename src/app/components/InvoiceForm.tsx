import { Field, FieldArray, useFormikContext, ErrorMessage } from "formik";
import { Trash2, PlusCircle } from "lucide-react";
import { CURRENCIES } from "../types/invoice";

export const InvoiceForm = () => {
  const { values, handleChange, errors, touched } = useFormikContext<any>();

  const inputClass = (name: string) => `
    w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition
    ${touched[name] && errors[name] ? "border-red-500" : "border-gray-300"}
  `;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col h-full">
      <div className="bg-slate-800 p-4 text-white font-bold">Invoice Settings</div>
      
      <div className="p-6 space-y-6 overflow-y-auto">
        {/* Basic Info */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase">Invoice #</label>
            <Field name="invoiceNumber" className={inputClass("invoiceNumber")} />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase">Currency</label>
            <Field as="select" name="currencyCode" className={inputClass("currencyCode")}>
              {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.symbol} {c.code}</option>)}
            </Field>
          </div>
        </div>

        {/* Client Info */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-gray-500 uppercase block">Client Details</label>
          <Field name="customerName" placeholder="Client Name" className={inputClass("customerName")} />
          <Field name="customerEmail" placeholder="Email Address" className={inputClass("customerEmail")} />
          <Field as="textarea" name="billingAddress" placeholder="Billing Address" rows={2} className={inputClass("billingAddress")} />
        </div>

        {/* Dynamic Items - This is the "Professional" way */}
        <div className="space-y-4">
          <label className="text-xs font-bold text-gray-500 uppercase block border-b pb-2">Line Items</label>
          <FieldArray name="items">
            {({ push, remove }) => (
              <div className="space-y-3">
                {values.items.map((_: any, index: number) => (
                  <div key={index} className="flex gap-2 items-start bg-gray-50 p-2 rounded">
                    <Field name={`items.${index}.description`} placeholder="Service" className="flex-1 px-2 py-1 border rounded" />
                    <Field name={`items.${index}.quantity`} type="number" className="w-16 px-2 py-1 border rounded" />
                    <Field name={`items.${index}.unitPrice`} type="number" className="w-24 px-2 py-1 border rounded" />
                    <button type="button" onClick={() => remove(index)} className="text-red-400 hover:text-red-600 p-1">
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => push({ description: "", quantity: 1, unitPrice: 0 })}
                  className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline"
                >
                  <PlusCircle size={16} /> Add Item
                </button>
              </div>
            )}
          </FieldArray>
          {typeof errors.items === 'string' && <p className="text-red-500 text-xs">{errors.items}</p>}
        </div>
      </div>

      <div className="p-4 border-t mt-auto">
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition">
          Generate & Download PDF
        </button>
      </div>
    </div>
  );
};