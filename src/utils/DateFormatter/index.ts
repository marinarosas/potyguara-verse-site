export function formatDate(dateISO: string | undefined) {
  return dateISO
    ? new Date(dateISO).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
    : dateISO
}
