export const formatDate = (dateString: string) => {
  if (!dateString) return ""
  const date = new Date(dateString + "T00:00:00")
  const monthName = date.toLocaleDateString("en-US", { month: "short" }).toLowerCase()
  const dayDate = date.getDate()
  const year = date.getFullYear()
  return `${monthName} ${dayDate}, ${year}`
}

export const formatPrice = (value: number) => {
  return value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
