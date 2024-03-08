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
      title: "Ganhos totais",
      value: "R$53.000,00",
      icon: <FaMoneyBillWave size={20} />,
    },
    {
      title: "Nº de fãs",
      value: "67",
      smallValue: "+3",
      icon: <FaStar size={20} />,
    },
    
    {
      title: "Potycoins",
      value: "1650",
      icon:  <img
      src="/brasao_preto.png"
      alt="Iamgem da moeda"
      className="w-6 h-auto"
    />,
    },
    {
      title: "Eventos feitos",
      value: "31",
      icon: <RiSlideshow3Fill size={20} />,
    },
    {
      title: "Carteira",
      value: "R$649,90",
      icon: <FaWallet size={20} />,
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
    <div className="bg-background text-foreground flex flex-col space-y-8">
        {/* <!--Cards important infos--> */}
        <div className="flex mx-8 gap-4 mt-4">
          {mainInfoDashboard.map((info) => {
            return (
              <div
                className="w-full mb-6"
                key={info.title}
              >
                <Card className="relative h-24 flex flex-col min-w-0 break-words bg-transparent drop-shadow-md rounded-2xl bg-clip-border border-2">
                  <CardContent className="flex-auto p-4">
                    <div className="flex flex-row -mx-3">
                      <div className="flex-none w-2/3 max-w-full px-3">
                        <p className="mb-0 font-sans leading-normal text-sm">
                          {info.title}
                        </p>
                        <h5 className="mb-0 text-xl font-bold">{info.value}</h5>
                      </div>
                      <div className="px-3 text-right basis-1/3">
                        {/* <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-orange-logo to-green-neon"> */}
                          <div className="h-full flex justify-end items-start text-foreground opacity-85">
                            {info.icon}
                          </div>
                        {/* </div> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* <!--Cards Tips, Avatar and Stage--> */}
        <div className="flex mx-8 gap-4">
          {/* Card 1 */}
          <Card className="flex w-1/2 h-1/2 break-words bg-transparent shadow-md rounded-2xl bg-clip-border border-2 relative">
            <CardContent className="flex items-center ">
              {/* Left Side */}
              <div className="w-1/2 h-full p-6">
                <CardTitle>Dicas para o seu evento</CardTitle>
                <h5 className="font-bold text-sm py-2">O que você precisa?</h5>
                <CardDescription className="text-gray">
                  Aqui você encontra dicas, novidades e outras perguntas sobre
                  criar um evento.
                </CardDescription>
                <a
                  className="absolute font-semibold leading-normal text-sm group text-slate-500 flex flex-1 h-fit bottom-8"
                  // href="javascript:;"
                >
                  Veja mais
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

          <div className="flex w-1/2 gap-4">
            {/* Card 2 */}
            <Card className="flex flex-col w-1/2 h-full break-words bg-transparent shadow-md rounded-2xl bg-clip-border border-2">
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
            <Card className="flex flex-col w-1/2 h-full break-words bg-transparent shadow-md rounded-2xl bg-clip-border border-2">
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

        
      </div>
  );
}
