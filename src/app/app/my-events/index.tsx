"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function MyEvents() {
  const eventsShows = [
    {
      name: "Luau MPB",
      paymentStatus: "Pago",
      totalAmount: "R$250.00",
      eventDate: "28/02",
      numberViewers: 29,
    },
    {
      name: "Samba Rock",
      paymentStatus: "Pendente",
      totalAmount: "R$150.00",
      eventDate: "24/02",
      numberViewers: 32,
    },
    {
      name: "MPB na praia",
      paymentStatus: "Não pago",
      totalAmount: "R$350.00",
      eventDate: "18/02",
      numberViewers: 24,
    },
    {
      name: "Sabadásso",
      paymentStatus: "Pago",
      totalAmount: "R$450.00",
      eventDate: "15/02",
      numberViewers: 18,
    },
    {
      name: "Rock Geral",
      paymentStatus: "Pago",
      totalAmount: "R$550.00",
      eventDate: "10/02",
      numberViewers: 21,
    },
    {
      name: "Domingo Legal",
      paymentStatus: "Pendente",
      totalAmount: "R$200.00",
      eventDate: "03/02",
      numberViewers: 14,
    },
    {
      name: "Trip Rock",
      paymentStatus: "Não pago",
      totalAmount: "R$300.00",
      eventDate: "01/02",
      numberViewers: 10,
    },
  ];
  return (
    // <>
    //   <div className="flex flex-col my-4 mx-1">
    //     <div className=" my-4">
    //       <h6>Último eventos</h6>
    //       <p className="mb-0 leading-normal text-sm">
    //         <i className="fa fa-check text-cyan-500"></i>
    //         <span className="font-semibold">7 eventos </span>
    //         esse mês
    //       </p>
    //     </div>
    //   </div>

    //   <Table>
    //     <TableCaption>
    //       Para mais detalhes dos eventos, entrar em "Meus eventos".
    //     </TableCaption>
    //     <TableHeader>
    //       <TableRow>
    //         <TableHead className="w-32">Nome</TableHead>
    //         <TableHead>Status</TableHead>
    //         <TableHead>Data do evento</TableHead>
    //         <TableHead>Nº de espectadores</TableHead>
    //         <TableHead className="text-right">Montante ganho</TableHead>
    //       </TableRow>
    //     </TableHeader>
    //     <TableBody>
    //       {eventsShows.map((event) => (
    //         <TableRow key={event.name}>
    //           <TableCell className="font-medium">{event.name}</TableCell>
    //           <TableCell>{event.paymentStatus}</TableCell>
    //           <TableCell>{event.eventDate}</TableCell>
    //           <TableCell>{event.numberViewers}</TableCell>
    //           <TableCell className="text-right">{event.totalAmount}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //     <TableFooter>
    //       <TableRow>
    //         {/* <TableCell colSpan={3}>Total</TableCell>
    //   <TableCell className="text-right">$2,500.00</TableCell> */}
    //       </TableRow>
    //     </TableFooter>
    //   </Table>
    // </>
    <>
    <h1>hello</h1></>
  );
}
