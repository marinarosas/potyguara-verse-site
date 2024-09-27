import { MessageCircleMore, Search, MoreHorizontal } from 'lucide-react'

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

interface Props {
  key: string
  event: IEventShow
}

export function EventTableRow({ key, event }: Props) {
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
      <TableCell>{event.eventDate}</TableCell>
      <TableCell>{event.eventTime}</TableCell>
      <TableCell>{event.price}</TableCell>
      <TableCell>{event.statuspayment}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem>Edição</DropdownMenuItem>
            <DropdownMenuItem>Cancelar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}
