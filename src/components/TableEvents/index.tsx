'use client'

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { EventTableRow } from './event-table-row'
import { useListEventsByAuthorId } from '@/services/hooks/events/useListEventsByAuthorId'

export function TableEvents() {
  const { events, error, isLoading, mutateEvents } = useListEventsByAuthorId()

  // const [searchParams, setSearchParams] = useSearchParams()

  // const pageIndex = z.coerce
  //   .number()
  //   .transform((page) => page - 1)
  //   .parse(searchParams.get('page') ?? '1')

  // function handlePaginate(pageIndex: number) {
  //   setSearchParams((prev) => {
  //     prev.set('page', String(pageIndex + 1))

  //     return prev
  //   })
  // }

  return (
    <div>
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
      {/* {loading ? (
        <></>
      ) : error ? (
        <></>
      ) : services?.findManyService.meta ? (
        <Pagination
          pageIndex={services?.findManyService.meta.pageIndex}
          totalCount={services?.findManyService.meta.totalCount}
          perPage={services?.findManyService.meta.perPage}
          onPageChange={handlePaginate}
        />
      ) : null} */}
    </div>
  )
}
