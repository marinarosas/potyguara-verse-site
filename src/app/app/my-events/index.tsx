// {/* <!-- Tabela Histórico --> */}

// <div className="flex flex-col my-4 mx-1">
// <div className=" my-4">
//   <h6>Último eventos</h6>
//   <p className="mb-0 leading-normal text-sm">
//     <i className="fa fa-check text-cyan-500"></i>
//     <span className="font-semibold">7 eventos </span>
//     esse mês
//   </p>
// </div>

// <Table>
//   <TableCaption>
//     Para mais detalhes dos eventos, entrar em "Meus eventos".
//   </TableCaption>
//   <TableHeader>
//     <TableRow>
//       <TableHead className="w-32">Nome</TableHead>
//       <TableHead>Status</TableHead>
//       <TableHead>Data do evento</TableHead>
//       <TableHead>Nº de espectadores</TableHead>
//       <TableHead className="text-right">Montante ganho</TableHead>
//     </TableRow>
//   </TableHeader>
//   <TableBody>
//     {eventsShows.map((event) => (
//       <TableRow key={event.name}>
//         <TableCell className="font-medium">{event.name}</TableCell>
//         <TableCell>{event.paymentStatus}</TableCell>
//         <TableCell>{event.eventDate}</TableCell>
//         <TableCell>{event.numberViewers}</TableCell>
//         <TableCell className="text-right">
//           {event.totalAmount}
//         </TableCell>
//       </TableRow>
//     ))}
//   </TableBody>
//   <TableFooter>
//     <TableRow>
//       {/* <TableCell colSpan={3}>Total</TableCell>
//       <TableCell className="text-right">$2,500.00</TableCell> */}
//     </TableRow>
//   </TableFooter>
// </Table>