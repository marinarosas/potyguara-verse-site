'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { EventTableRow } from './event-table-row'
import { db } from '../../config/firebase'
import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { IEventShow } from '@/types/eventShow'

export function TableEvents() {
  const [eventList, setEventList] = useState<IEventShow[]>([])

  const eventsCollectionRef = collection(db, 'events')

  useEffect(() => {
    const getEventList = async () => {
      try {
        const data = await getDocs(eventsCollectionRef)
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as IEventShow[]

        setEventList(filteredData)
      } catch (err) {
        console.log(err)
      }
    }

    getEventList()
  }, [eventsCollectionRef, setEventList])

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
            <TableHead>Preço</TableHead>
            <TableHead>Status Pagamento</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {eventList?.length > 0 ? (
            eventList.map((event) => (
              <EventTableRow key={event.id} event={event} />
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={7}
                className="flex justify-center p-8 w-full col-span-7 border-2"
              >
                Nenhum evento encontrado
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
