"use client";

import { useRouter } from "next/navigation";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { RiSlideshow3Fill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useListArtistAll } from "@/services/hooks/useListArtistAll";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { object } from "zod";

export default function Dashboard() {
  const router = useRouter();

  const { artists } = useListArtistAll();

  // useEffect(() => {
  //   console.log("list do useHook", artists);
  // });

  function handleNavigateToHomePage() {
    router.push(`/`);
  }

  function handleNavigateToSingupPageArtist() {
    router.push(`/singup-artist`);
  }

  function handleNavigateToSingupPageViewer() {
    router.push(`/singup-viewer`);
  }

  const mainInfoDashboard = [
    {
      title: "Total de ganhos",
      value: "R$53.000,00",
      icon: <FaMoneyBillWave size={24} />,
    },
    {
      title: "Nº de fãns",
      value: "67",
      smallValue: "+3",
      icon: <FaStar size={24} />,
    },
    {
      title: "Eventos criados",
      value: "31",
      icon: <RiSlideshow3Fill size={24} />,
    },
    {
      title: "Carteira",
      value: "R$649,90",
      icon: <FaWallet size={24} />,
    },
  ];

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
    <div className="ease-soft-in-out rounded-tl-xl transition-all duration-200 bg-foreground text-background">
      <div className="w-full px-6 py-6 mx-auto">
        {/* <!--Cards important infos--> */}
        <div className="flex flex-wrap -mx-3">
          {mainInfoDashboard.map((info) => {
            return (
              <div
                className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"
                key={info.title}
              >
                <Card className="relative flex flex-col min-w-0 break-words bg-gray-light drop-shadow-md rounded-2xl bg-clip-border border-0 text-background">
                  <CardContent className="flex-auto p-4">
                    <div className="flex flex-row -mx-3">
                      <div className="flex-none w-2/3 max-w-full px-3">
                        <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                          {info.title}
                        </p>
                        <h5 className="mb-0">{info.value}</h5>
                      </div>
                      <div className="px-3 text-right basis-1/3">
                        <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-orange-logo to-green-neon">
                          <div className="h-full flex justify-center items-center text-foreground opacity-85">
                            {info.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* <!--Cards Tips, Avatar and Stage--> */}
        <div className="flex items-center mt-12 mb-8 gap-6">
          {/* Card 1 */}
          <Card className="flex w-1/2 h-64 break-words bg-gray-light shadow-md rounded-2xl bg-clip-border border-0 text-background">
            <CardContent className="flex items-center ">
              {/* Left Side */}
              <div className="w-1/2 h-full p-6">
                <CardTitle>Dicas para o seu evento</CardTitle>
                <h5 className="font-bold text-sm py-2">O que você precisa?</h5>
                <CardDescription className="text-gray pb-20">
                  Aqui você encontra dicas, novidades e outras perguntas sobre
                  criar um evento.
                </CardDescription>
                <a
                  className="font-semibold leading-normal text-sm group text-slate-500 flex flex-1 h-fit"
                  // href="javascript:;"
                >
                  Read More
                  {/* <i className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i> */}
                </a>
              </div>

              {/* Image Side */}
              <div className="flex w-1/2 h-full">
                <img
                  className="w-full h-full rounded-r-2xl"
                  src="https://picsum.photos/200"
                  alt="rocket"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex w-1/2 gap-6">
            {/* Card 2 */}
            <Card className="flex flex-col w-1/2 h-64 break-words bg-gray-light shadow-md rounded-2xl bg-clip-border text-background border-0">
              <CardHeader className="flex py-4 px-4 justify-between h-14">
                <CardTitle className="font-semibold flex justify-between">
                  Meu Avatar <MdEdit />
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full">
                <img
                  className="object-cover h-full w-full rounded-b-2xl"
                  src="/avatarTemp.png"
                  alt="rocket"
                />
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="flex flex-col w-1/2 h-64 break-words bg-gray-light shadow-md rounded-2xl bg-clip-border text-background border-0">
              <CardHeader className="flex py-4 px-4 justify-between h-14">
                <CardTitle className="font-semibold flex justify-between">
                  Meu Palco <MdEdit />
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full">
                <img
                  className="object-cover h-full w-full rounded-b-2xl"
                  src="/stageTemp.png"
                  alt="rocket"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* <!-- Tabela Histórico --> */}

        <div className="flex flex-col my-4 mx-1">
          <div className=" my-4">
            <h6>Último eventos</h6>
            <p className="mb-0 leading-normal text-sm">
              <i className="fa fa-check text-cyan-500"></i>
              <span className="font-semibold">7 eventos </span>
              esse mês
            </p>
          </div>

          <Table>
            <TableCaption>
              Para mais detalhes dos eventos, entrar em "Meus eventos".
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-32">Nome</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data do evento</TableHead>
                <TableHead>Nº de espectadores</TableHead>
                <TableHead className="text-right">Montante ganho</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {eventsShows.map((event) => (
                <TableRow key={event.name}>
                  <TableCell className="font-medium">{event.name}</TableCell>
                  <TableCell>{event.paymentStatus}</TableCell>
                  <TableCell>{event.eventDate}</TableCell>
                  <TableCell>{event.numberViewers}</TableCell>
                  <TableCell className="text-right">
                    {event.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                {/* <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell> */}
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
}
