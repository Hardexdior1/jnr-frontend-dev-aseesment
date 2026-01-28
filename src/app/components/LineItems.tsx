"use client"
import { LineItem, CurrencyOption } from "../types/invoice"
import { Trash2, Edit2, Check } from "lucide-react"

interface LineItemsProps {
  items: LineItem[]
  editingIndex: number | null
  editItem: LineItem | null
  currency: CurrencyOption
  startEdit: (index: number) => void
  setEditItem: (item: LineItem) => void
  saveEdit: (index: number) => void
  deleteItem: (index: number) => void
  isExporting?: boolean
}

export default function LineItems({
  items,
  editingIndex,
  editItem,
  currency,
  startEdit,
  setEditItem,
  saveEdit,
  deleteItem,
  isExporting = false
}: LineItemsProps) {
  return (
    <table className=" border text-sm my-6 overflow-x-auto w-full">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2 text-left">Description</th>
          <th className="border p-2">Qty</th>
          <th className="border p-2">Unit Price</th>
          <th className="border p-2">Total</th>
          {!isExporting && <th className="border p-2">Actions</th>}
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
                      setEditItem({ ...editItem!, quantity: Number(e.target.value) })
                    }
                  />
                </td>
                <td className="border p-2 text-right">
                  <input
                    type="number"
                    className="w-full border p-1 rounded text-right"
                    value={editItem?.unitPrice || ""}
                    onChange={(e) =>
                      setEditItem({ ...editItem!, unitPrice: Number(e.target.value) })
                    }
                  />
                </td>
                <td className="border p-2 text-right">
                    {currency.symbol}{((editItem?.quantity || 0) * (editItem?.unitPrice || 0)).toFixed(2)}

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
                <td className="border p-2 text-right">{currency.symbol}{item.unitPrice.toFixed(2)}</td>
                <td className="border p-2 text-right">{currency.symbol}{(item.quantity * item.unitPrice).toFixed(2)}</td>
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
  )
}
