import {
  MessageCircleMore,
  Search,
  MoreHorizontal,
  Plus,
  Trash2,
  Pencil,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import QualquerCoisa from '../../../public/BgSite.png'
import Link from 'next/link'
import { IEventShow } from '@/types/eventShow'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { z } from 'zod'
import { useEffect, useState } from 'react'
import { Dialog, DialogTrigger } from '../ui/dialog'
import {
  EventUpdateDialog,
  eventUpdateFormSchema,
  EventUpdateFormSchema,
} from './event-update-dialog'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface Props {
  key: string
  event: IEventShow
}

export function EventTableRow({ event }: Props) {
  const [isUpdateEventOpen, setIsUpdateEventOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EventUpdateFormSchema>({
    resolver: zodResolver(eventUpdateFormSchema),
  })

  const deleteEvent = async (id: string) => {
    const eventDoc = doc(db, 'events', id)
    await deleteDoc(eventDoc)
  }

  const handleOpenUpdateDialog = (event: IEventShow) => {
    setValue('title', event.title)
    setValue('content', event.content)
    setValue('eventDate', event.eventDate)
    setValue('price', event.price)
  }

  useEffect(() => {
    console.log('open dialog', isUpdateEventOpen)
  }, [isUpdateEventOpen])

  return (
    <TableRow key={event.id}>
      <TableCell className="hidden lg:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={QualquerCoisa}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{event.title}</TableCell>
      <TableCell>
        <Badge variant="outline">{event.content}</Badge>
      </TableCell>
      <TableCell>
        {event.eventDate
          ? new Date(event.eventDate).toLocaleDateString('pt-BR')
          : 'Sem data'}
      </TableCell>
      <TableCell>{event.price}</TableCell>
      <TableCell>{event.statuspayment}</TableCell>
      <TableCell>
        <Dialog open={isUpdateEventOpen} onOpenChange={setIsUpdateEventOpen}>
          <DialogTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              className="px-0 py-0 h-fit pr-2"
              onClick={() => handleOpenUpdateDialog(event)}
            >
              <Pencil size={20} strokeWidth={1.25} />
            </Button>
          </DialogTrigger>

          <EventUpdateDialog
            register={register}
            handleSubmit={handleSubmit}
            eventId={event.id}
            errors={errors}
            setIsUpdateEventOpen={setIsUpdateEventOpen}
          />
        </Dialog>
        <Button
          type="button"
          variant="ghost"
          className="px-0 py-0 h-fit"
          onClick={() => deleteEvent(event.id)}
        >
          <Trash2 size={20} strokeWidth={1.25} />
        </Button>
      </TableCell>
    </TableRow>
  )
}
