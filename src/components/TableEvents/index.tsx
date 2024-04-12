"use client";

import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
} from "lucide-react";
import Image from "next/image";
import QualquerCoisa from "../../../public/BgSite.png";
import Link from "next/link";

export function TableEvents() {
  const eventsShows = [
    {
      nameevent: "Luau MPB",
      paymentStatus: "Pago",
      price: 25.00,
      eventdata: "28/02",
      numberViewers: 29,
      timeevent: "23:00",
      duration: "18 min",
      description: "",
      statusEvent: "Ativo",
      ecad: "",
      eventImage: "",
    },
    {
      nameevent: "Samba Rock",
      paymentStatus: "Pendente",
      price: 15.00,
      eventdata: "24/02",
      numberViewers: 32,
      timeevent: "20:30",
      duration: "15 min",
      description: "",
      statusEvent: "Cancelado",
      ecad: "",
      eventImage: "",
    },
    {
      nameevent: "MPB na praia",
      paymentStatus: "Não pago",
      price: 35.00,
      eventdata: "18/02",
      numberViewers: 24,
      timeevent: "18:20",
      duration: "25 min",
      description: "",
      statusEvent: "Finalizado",
      ecad: "",
      eventImage: "",
    },
    {
      nameevent: "Sabadásso",
      paymentStatus: "Pago",
      price: 45.00,
      eventdata: "15/02",
      numberViewers: 18,
      timeevent: "19:00",
      duration: "30 min",
      description: "",
      statusEvent: "Ativo",
      ecad: "",
      eventImage: "",
    },
    {
      nameevent: "Rock Geral",
      paymentStatus: "Pago",
      price: 55.00,
      eventdata: "10/02",
      numberViewers: 21,
      timeevent: "23:20",
      duration: "15 min",
      description: "",
      statusEvent: "Cancelado",
      ecad: "",
      eventImage: "",
    },
    {
      nameevent: "Domingo Legal",
      paymentStatus: "Pendente",
      price: 20.00,
      eventdata: "03/02",
      numberViewers: 14,
      timeevent: "20:00",
      duration: "15 min",
      description: "",
      statusEvent: "Finalizado",
      ecad: "",
      eventImage: "",
    },
    {
      nameevent: "Trip Rock",
      paymentStatus: "Não pago",
      price: 30.00,
      eventdata: "01/02",
      numberViewers: 10,
      timeevent: "21:00",
      duration: "20 min",
      description: "Rock clássico",
      statusEvent: "Finalizado",
      ecad: "",
      eventImage: "",
    },
  ];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] lg:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Valor ingresso</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Hora</TableHead>
          <TableHead className="hidden lg:table-cell">Duração</TableHead>
          <TableHead className="hidden lg:table-cell">Ecad</TableHead>
          <TableHead >Nº Espectadores</TableHead>
          <TableHead >Total Vendas</TableHead>
          <TableHead className="hidden lg:table-cell">Criado em</TableHead>
          <TableHead>
            <span className="sr-only">Ações</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {eventsShows.map((event) => {
          return (
            <TableRow key={event.nameevent}>
              <TableCell className="hidden lg:table-cell">
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src={QualquerCoisa}
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">
                {event.nameevent}
              </TableCell>
              <TableCell>
                <Badge variant="outline">{event.statusEvent}</Badge>
              </TableCell>
              <TableCell>R${event.price}</TableCell>
              <TableCell>{event.eventdata}</TableCell>
              <TableCell>{event.timeevent}</TableCell>
              <TableCell className="hidden lg:table-cell">{event.duration}</TableCell>
              <TableCell className="hidden lg:table-cell">{event.ecad}</TableCell>
              <TableCell>{event.numberViewers}</TableCell>
              <TableCell>R${event.price * event.numberViewers}</TableCell>
              <TableCell className="hidden lg:table-cell">
                2023-07-12 10:42 AM
              </TableCell>
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
          );
        })}
      </TableBody>
    </Table>
  );
}
