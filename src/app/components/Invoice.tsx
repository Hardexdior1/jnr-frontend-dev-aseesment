
"use client"

import { useState, useRef,useEffect } from "react"
import { Trash2, Edit2, Check } from "lucide-react"
import { useFormik } from "formik"
import Swal from "sweetalert2"
import { LineItem, CurrencyOption,InvoiceSchema,CURRENCIES } from "./../types/invoice"
import { useInvoiceCalculations } from "../hooks/useInvoiceCalculation"
import { useInvoiceItems } from "../hooks/useInvoiceItems"

const getSavedFormValues = () => {
  return {
    invoiceNumber: localStorage.getItem("invoiceNumber") || "INV-001",
    invoiceDate: localStorage.getItem("invoiceDate") || "",
    dueDate: localStorage.getItem("dueDate") || "",
    customerName: localStorage.getItem("customerName") || "",
    customerEmail: localStorage.getItem("customerEmail") || "",
    customerPhone: localStorage.getItem("customerPhone") || "",
    billingAddress: localStorage.getItem("billingAddress") || "",
    vatRate: Number(localStorage.getItem("vatRate")) || 7.5,
    whtRate: Number(localStorage.getItem("whtRate")) || 5,
  }
}



export default function Invoice() {
  const {
  items,
  addItem,
  deleteItem,
  editingIndex,
  editItem,
  setEditItem,
  startEdit,
  saveEdit,
} = useInvoiceItems()

  const [currentItem, setCurrentItem] = useState<LineItem>({
    description: "",
    quantity: 1,
    unitPrice: 0,
  })
  const [currency, setCurrency] = useState<CurrencyOption>(CURRENCIES[0])
  
  const [isGenerating, setIsGenerating] = useState(false)

  const invoiceRef = useRef<HTMLDivElement>(null)

  // Formik initialization
const formik = useFormik({
  initialValues:getSavedFormValues(),
    enableReinitialize: true, 

  validationSchema: InvoiceSchema,
  validateOnChange: true,  
  validateOnBlur: true,    
  validateOnMount: true,   
  onSubmit: (values) => {
    handleSendInvoice(values)
  },
})

  const handleAddItem = () => {
  if (!currentItem.description.trim()) return

  addItem(currentItem)

  setCurrentItem({
    description: "",
    quantity: 1,
    unitPrice: 0,
  })
}

// date formatting

  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString + "T00:00:00")
    const monthName = date.toLocaleDateString("en-US", { month: "short" }).toLowerCase()
    const dayDate = date.getDate()
    const year = date.getFullYear()
    return `${monthName} ${dayDate}, ${year}`
  }

  // price formatting
  const formatPrice = (value: number) => {
    return value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  // handle invoice generation
  const handleSendInvoice = async (values: typeof formik.values) => {
    localStorage.setItem("invoiceNumber", values.invoiceNumber)
    localStorage.setItem("invoiceDate", values.invoiceDate)
    localStorage.setItem("dueDate", values.dueDate)
    localStorage.setItem("customerName", values.customerName)
    localStorage.setItem("customerEmail", values.customerEmail)
    localStorage.setItem("customerPhone", values.customerPhone)
    localStorage.setItem("billingAddress", values.billingAddress)
    localStorage.setItem("vatRate", values.vatRate.toString())
    localStorage.setItem("whtRate", values.whtRate.toString())
    localStorage.setItem("currency", currency.code)

    setIsGenerating(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))

     

      setIsGenerating(false)

      Swal.fire({
        icon: "success",
        title: "Invoice Generated!",
        text: "Your invoice has been generated and sent successfully.",
        confirmButtonColor: "#3085d6",
      })
    } catch (error) {
      setIsGenerating(false)
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to generate invoice. Please try again.",
      })
    }
  }

  // invoice calculations
  const { subtotal, vat, wht, grandTotal } = useInvoiceCalculations(
  items,
  formik.values.vatRate,
  formik.values.whtRate
)


// company info
  const company = {
    name: "Nexora",
    email: "hello@nexora.com",
    address1: "22 Marina Road",
    address2: "Lagos Island, Lagos",
  }
    const logoLetter = company.name.charAt(0).toUpperCase()


    // save form values to localStorage on change
  useEffect(() => {
  const values = formik.values

  Object.entries(values).forEach(([key, value]) => {
    localStorage.setItem(key, String(value))
  })
}, [formik.values])


// global style for some text in this file
    const sharedStyleForKeys = "text-bold text-base"
  const sharedStyleForValues = "text-semibold text-sm text-gray-500"

  // validation for generate button
  const isGenerateDisabled =
  isGenerating ||
  !formik.values.customerName ||
  !formik.values.customerEmail ||
  !formik.values.billingAddress ||
  !formik.values.invoiceDate ||
  !formik.values.dueDate ||
  items.length === 0

  const [isExporting, setIsExporting] = useState(false)

  // print
const handlePrint = () => {
  setIsExporting(true)

  setTimeout(() => {
    window.print()
    setIsExporting(false)
  }, 300)
}

  const renderError = (fieldName: string) => {
    return (formik.touched as any)[fieldName] && (formik.errors as any)[fieldName] ? (
      <p className="text-red-500 text-xs mt-1">{(formik.errors as any)[fieldName]}</p>
    ) : null
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* LEFT SIDEBAR - FORM */}
          <div className="lg:col-span-2">
            <div className="sticky top-6 bg-white rounded-xl shadow-md border border-blue-200 overflow-hidden max-h-[calc(100vh-80px)] flex flex-col">
              
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 flex-shrink-0">
                <h2 className="text-lg font-bold text-white">Invoice Form</h2>
              </div>

              {/* Form Content */}
              <form onSubmit={formik.handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {/* Currency Selection */}
                <div>
                  <label htmlFor="currency" className="block text-sm font-semibold text-gray-700 mb-2">
                    Currency
                  </label>
                  <select
                    id="currency"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    value={currency.code}
                    onChange={(e) => {
                      const selected = CURRENCIES.find(c => c.code === e.target.value)
                      if (selected) {
                        setCurrency(selected)
                        localStorage.setItem("currency", selected.code)
                      }
                    }}
                  >
                    {CURRENCIES.map(curr => (
                      <option key={curr.code} value={curr.code}>
                        {curr.symbol} {curr.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Invoice Details Section */}
                <div>
                  <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                    Invoice Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="invoiceNumber" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Invoice Number
                      </label>
                      <input
                        id="invoiceNumber"
                        className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                          formik.touched.invoiceNumber && formik.errors.invoiceNumber ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="e.g., INV-001"
                        {...formik.getFieldProps("invoiceNumber")}
                      />
                      {renderError("invoiceNumber")}
                    </div>
                    <div>
                      <label htmlFor="invoiceDate" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Invoice Date
                      </label>
                      <input
                        id="invoiceDate"
                        type="date"
                        className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                          formik.touched.invoiceDate && formik.errors.invoiceDate ? "border-red-500" : "border-gray-300"
                        }`}
                        {...formik.getFieldProps("invoiceDate")}
                      />
                      {renderError("invoiceDate")}
                    </div>
                    <div>
                      <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Due Date
                      </label>
                      <input
                        id="dueDate"
                        type="date"
                        className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                          formik.touched.dueDate && formik.errors.dueDate ? "border-red-500" : "border-gray-300"
                        }`}
                        {...formik.getFieldProps("dueDate")}
                      />
                      {renderError("dueDate")}
                    </div>
                  </div>
                </div>

                {/* Customer Details Section */}
                <div>
                  <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                    Customer Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Customer Name
                      </label>
                      <input
                        id="customerName"
                        className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                          formik.touched.customerName && formik.errors.customerName ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="e.g., John Doe"
                        {...formik.getFieldProps("customerName")}
                      />
                      {renderError("customerName")}
                    </div>
                    <div>
                      <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Customer Email
                      </label>
                      <input
                        id="customerEmail"
                        type="email"
                        className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                          formik.touched.customerEmail && formik.errors.customerEmail ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="customer@example.com"
                        {...formik.getFieldProps("customerEmail")}
                      />
                      {renderError("customerEmail")}
                    </div>
                    <div>
                      <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number <span className="text-xs text-gray-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="customerPhone"
                        type="tel"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="+234 123 456 7890"
                        {...formik.getFieldProps("customerPhone")}
                      />
                    </div>
                    <div>
                      <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Billing Address
                      </label>
                      <textarea
                        id="billingAddress"
                        className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none ${
                          formik.touched.billingAddress && formik.errors.billingAddress ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="123 Main Street, City, State, ZIP"
                        rows={3}
                        {...formik.getFieldProps("billingAddress")}
                      />
                      {renderError("billingAddress")}
                    </div>
                  </div>
                </div>

                {/* Tax Configuration Section */}
                <div>
                  <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                    Tax Configuration
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="vatRate" className="block text-sm font-medium text-gray-700 mb-1.5">
                        VAT (%)
                      </label>
                      <input
                        id="vatRate"
                        type="number"
                        step="0.01"
                        className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                          formik.touched.vatRate && formik.errors.vatRate ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="7.5"
                        {...formik.getFieldProps("vatRate")}
                      />
                      {renderError("vatRate")}
                    </div>
                    <div>
                      <label htmlFor="whtRate" className="block text-sm font-medium text-gray-700 mb-1.5">
                        WHT (%)
                      </label>
                      <input
                        id="whtRate"
                        type="number"
                        step="0.01"
                        className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                          formik.touched.whtRate && formik.errors.whtRate ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="5"
                        {...formik.getFieldProps("whtRate")}
                      />
                      {renderError("whtRate")}
                    </div>
                  </div>
                </div>

                {/* Line Item Section */}
                <div>
                  <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                    Add Line Item
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="itemDescription" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Description
                      </label>
                      <input
                        id="itemDescription"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="Web Development Services"
                        value={currentItem.description}
                        onChange={(e) =>
                          setCurrentItem({ ...currentItem, description: e.target.value })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Quantity
                        </label>
                        <input
                          id="quantity"
                          type="number"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          placeholder="1"
                          value={currentItem.quantity}
                          onChange={(e) =>
                            setCurrentItem({
                              ...currentItem,
                              quantity: Number(e.target.value),
                            })
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="unitPrice" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Price ({currency.symbol})
                        </label>
                        <input
                          id="unitPrice"
                          type="number"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          placeholder="0.00"
                          value={currentItem.unitPrice}
                          onChange={(e) =>
                            setCurrentItem({
                              ...currentItem,
                              unitPrice: Number(e.target.value),
                            })
                          }
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddItem}
                      
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition duration-200"
                    >
                      + Add Item
                    </button>
                  </div>
                </div>

               
                <button
  type="submit"
  disabled={isGenerateDisabled}
  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition duration-200 flex items-center justify-center gap-2"
>
  {isGenerating ? "Generating..." : "Generate Invoice"}
</button>

              </form>
            </div>
          </div>

          {/* RIGHT SIDE - INVOICE PREVIEW */}
        <section className="print-area shadow tracking-wider bg-white lg:col-span-3 max-h-[calc(100vh-80px)] rounded-xl md:overflow-auto" ref={invoiceRef}>
<div className="w-full flex-wrap gap-5 rounded-tr-md rounded-tl-md bg-gradient-to-r from-slate-900 to-slate-800 p-6 flex items-center justify-between text-white lg:gap-3">

<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
<span className="text-slate-900 text-xl font-bold">
{logoLetter}
</span>
</div>
<div>
<h1 className="text-lg font-semibold">{company.name}</h1>
<p className="text-sm text-slate-300">{company.email}</p>
</div>
</div>



<div className="text-left text-sm text-slate-300 md:text-right">
<p>{company.address1}</p>
<p>{company.address2}</p>
</div>
</div>
            <div className="bg-white p-6 ">
          <section className="flex flex-col gap-4 lg:items-start justify-between lg:flex-row">

            <div>
              <h2 className="text-xl font-bold mb-2 overflow-x-auto max-w-full">INVOICE</h2>
              <div className="flex flex-col gap-1">
                <p className={sharedStyleForKeys}>
  Invoice No:{" "}
  <span className={sharedStyleForValues}>
    {formik.values.invoiceNumber}
  </span>
</p>

<p className={sharedStyleForKeys}>
  Invoice Date:{" "}
  <span className={sharedStyleForValues}>
    {formatDate(formik.values.invoiceDate)}
  </span>
</p>

<p className={sharedStyleForKeys}>
  Due Date:{" "}
  <span className={sharedStyleForValues}>
    {formatDate(formik.values.dueDate)}
  </span>
</p>

              </div>
            </div>

            <div className="overflow-x-auto max-w-full">
              <h2 className="text-xl font-bold mb-2">Bill to</h2>
              <div className="flex flex-col gap-1">
                <p><span className={sharedStyleForValues}>{formik.values.customerName}</span></p>
                <p><span className={sharedStyleForValues}>{formik.values.customerEmail || "Not provided"}</span></p>
                {formik.values.customerPhone && <p><span className={sharedStyleForValues}>{formik.values.customerPhone}</span></p>}
                <p><span className={sharedStyleForValues}>{formik.values.billingAddress || "Not provided"}</span></p>
              </div>
            </div>
          </section>

          {/* Table */}
         <div className=" overflow-x-auto my-6">
           <table className=" border text-sm my-6 overflow-x-auto w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 text-left">Description</th>
                <th className="border p-2">Qty</th>
                <th className="border p-2">Unit Price</th>
                <th className="border p-2">Total</th>
              {!isExporting && (
  <th className="border p-2">Actions</th>
)}

              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className={editingIndex === index ? "bg-blue-50" : ""}>
                  {editingIndex === index ? (
                    <>
                      <td className="border p-2">
                        <input
                          type="text"
                          className="w-full border p-1 rounded"
                          value={editItem?.description || ""}
                          onChange={(e) =>
                            setEditItem({ ...editItem!, description: e.target.value })
                          }
                        />
                      </td>
                      <td className="border p-2 text-center">
                        <input
                          type="number"
                          className="w-full border p-1 rounded text-center"
                          value={editItem?.quantity || ""}
                          onChange={(e) =>
                            setEditItem({
                              ...editItem!,
                              quantity: Number(e.target.value),
                            })
                          }
                        />
                      </td>
                      <td className="border p-2 text-right">
                        <input
                          type="number"
                          className="w-full border p-1 rounded text-right"
                          value={editItem?.unitPrice || ""}
                          onChange={(e) =>
                            setEditItem({
                              ...editItem!,
                              unitPrice: Number(e.target.value),
                            })
                          }
                        />
                      </td>
                      <td className="border p-2 text-right">
                        {currency.symbol}{formatPrice((editItem?.quantity || 0) * (editItem?.unitPrice || 0))}
                      </td>
                      <td className="border p-2 text-center">
                        <button
                          onClick={() => saveEdit(index)}
                          className="text-green-600 hover:text-green-800 inline-flex items-center gap-1"
                          title="Save"
                        >
                          <Check size={18} />
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="border p-2">{item.description}</td>
                      <td className="border p-2 text-center">{item.quantity}</td>
                      <td className="border p-2 text-right">{currency.symbol}{formatPrice(item.unitPrice)}</td>
                      <td className="border p-2 text-right">
                        {currency.symbol}{formatPrice(item.quantity * item.unitPrice)}
                      </td>
                     {!isExporting && (
  <td className="border p-2 text-center space-x-2">
    <button onClick={() => startEdit(index)}>
      <Edit2 size={18} />
    </button>
    <button className="text-red-500" onClick={() => deleteItem(index)}>
      <Trash2 size={18} />
    </button>
  </td>
)}

                    </>
                  )}
                </tr>
              ))}

              {items.length === 0 && (
                <tr>
                  <td colSpan={5} className="border p-4 text-center text-gray-500">
                    No items added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
         </div>

          {/* Totals */}
          <div className="text-sm">
            <p><span className={sharedStyleForKeys}>Subtotal:</span> <span className={sharedStyleForValues}>{currency.symbol}{formatPrice(subtotal)}</span></p>
            <p><span className={sharedStyleForKeys}>VAT ({formik.values.vatRate}%):</span> <span className={sharedStyleForValues}>{currency.symbol}{formatPrice(vat)}</span></p>
            <p><span className={sharedStyleForKeys}>WHT ({formik.values.whtRate}%):</span> <span className={sharedStyleForValues}>{currency.symbol}{formatPrice(wht)}</span></p>
            <p className="font-bold text-lg mt-8">
              Grand Total: <span className={sharedStyleForValues}>{currency.symbol}{formatPrice(grandTotal)}</span>
            </p>
          </div>


          {!isExporting && (
  <div className="mt-6 flex gap-3">
    <button
      onClick={handlePrint}
      className="px-4 py-2 bg-slate-800 text-white rounded"
    >
      Print Invoice
    </button>

  
  </div>
)}


         
        </div>
        </section>
        </div>
      </div>
    </div>
  )
}