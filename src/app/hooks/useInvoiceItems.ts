import { useState, useEffect } from "react"
import { LineItem } from "../types/invoice"

export const useInvoiceItems = () => {
  const [items, setItems] = useState<LineItem[]>([])
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editItem, setEditItem] = useState<LineItem | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem("invoiceItems")
    if (saved) setItems(JSON.parse(saved))
  }, [])

  const persist = (newItems: LineItem[]) => {
    setItems(newItems)
    localStorage.setItem("invoiceItems", JSON.stringify(newItems))
  }

  const addItem = (item: LineItem) => {
    persist([...items, item])
  }

  const deleteItem = (index: number) => {
    persist(items.filter((_, i) => i !== index))
  }

  const startEdit = (index: number) => {
    setEditingIndex(index)
    setEditItem({ ...items[index] })
  }

  const saveEdit = (index: number) => {
    if (!editItem) return
    const updated = [...items]
    updated[index] = editItem
    persist(updated)
    setEditingIndex(null)
    setEditItem(null)
  }
  const clearItems = () => {
  persist([])
}


  return {
    items,
    addItem,
    deleteItem,
    editingIndex,
    editItem,
    setEditItem,
    startEdit,
    saveEdit,
    clearItems
  }
}
