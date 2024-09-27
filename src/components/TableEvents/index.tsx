'use client'

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { useListEventsAll } from '@/services/hooks/useListEventsAll'
import { EventTableRow } from './event-table-row'

export function TableEvents() {
  const { events, error, isLoading, mutateEvents } = useListEventsAll()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] lg:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead>Título</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Dia</TableHead>
          <TableHead>Hora</TableHead>
          <TableHead>Preço</TableHead>
          <TableHead>Status Pagamento</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events?.events.map((event) => {
          return <EventTableRow key={event.id} event={event} />
        })}
      </TableBody>
    </Table>
  )
}
