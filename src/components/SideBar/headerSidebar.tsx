"use client";

import { useRouter } from "next/navigation";
import { z } from "zod";
import { useState } from "react";
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTheme } from "next-themes";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const formSchema = z.object({
  eventdata: z.string(),
  local: z.string(),
  nameevent: z.string(),
  timeevent: z.string(),
  durantionevent: z.string(),
  price: z.string(),
  description: z.string(),
  statuspayment: z.boolean(),
});

const products = [
  {
    name: "Steam",
    description: "Loja de plataforma para download",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Meta Quest Store",
    description: "Loja para o óculos quest",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
];
const callsToAction = [
  { name: "Assita o trailer", href: "#", icon: PlayCircleIcon },
  { name: "Fale conosco", href: "#", icon: PhoneIcon },
];

export function HeaderSideBar() {
  const router = useRouter();

  const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;
  const apiMasterKey = process.env.NEXT_PUBLIC_API_MASTER_KEY;

  const { setTheme } = useTheme();

  const { toast } = useToast();

  const [dateEvent, setDateEvent] = React.useState<Date>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventdata: "",
      local: "",
      nameevent: "",
      timeevent: "",
      durantionevent: "",
      price: "",
      description: "",
      statuspayment: false,
    },
  });

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "X-Tenant-ID": tenantId,
      "X-API-Master-Key": apiMasterKey,
    },
  };

  const handleCreateEvent: SubmitHandler<z.infer<typeof formSchema>> = async ({
    local,
    nameevent,
    timeevent,
    durantionevent,
    price,
    description,
    statuspayment,
  }) => {

    console.log('ENTROUUUUU');
    
    try {
      await axios.post(
        "https://api.ycodify.com/v2/persistence/c/s/no-ac",
        {
          action: "CREATE",
          data: [
            {
              evento: {
                eventdata: dateEvent,
                local,
                nameevent,
                timeevent,
                durantionevent,
                price,
                description,
                statuspayment,
              },
            },
          ],
        },
        axiosConfig
      );

      toast({
        title: "Uhuu! Deu certo o cadastro.",
        description: "Cadastro do evento criado com sucesso.",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Ops! Algo deu errado.",
        description: "O cadastro não foi criado, fale com a central.",
      });
    }
  };

  function handleNavigateToLoginPage() {
    router.push(`/app/login-page`);
  }

  function handleNavigateToHomePage() {
    router.push(`/`);
  }

  return (
    <header className="bg-background fixed w-full flex items-center justify-between pl-12 z-30">
      {/* Logo side */}
      <div className="flex items-center justify-start">
        {/* Button Mobile Menu */}
        <button
          id="toggleSidebarMobile"
          aria-expanded="true"
          aria-controls="sidebar"
          className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
        >
          <svg
            id="toggleSidebarMobileHamburger"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            id="toggleSidebarMobileClose"
            className="w-6 h-6 hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Logo */}
        <div className="h-auto w-32 hover:cursor-pointer ">
          <img
            src="/LogoRetangular.png"
            alt="Logo Potyguara"
            onClick={() => handleNavigateToHomePage()}
          />
        </div>
        <form action="#" method="GET" className="hidden lg:block lg:pl-20">
          <label
            // for="topbar-search"
            className="sr-only"
          >
            Procurar
          </label>
          <div className="mt-1 relative lg:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              name="email"
              id="topbar-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
              placeholder="Procurar"
            />
          </div>
        </form>
      </div>

      {/* Coins side */}
      <div className="flex items-center">
        <button
          id="toggleSidebarMobileSearch"
          type="button"
          className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
        >
          <span className="sr-only">Procurar</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div className="flex justify-between w-20 items-center px-2">
          <img
            src="/brasao_preto.png"
            alt="Iamgem da moeda"
            className="w-auto h-10"
          />
          <h3>1650</h3>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="hidden sm:inline-flex ml-5 text-white text-sm px-5 py-2.5 text-center items-center mr-3">
              Criar evento
            </Button>
          </DialogTrigger>
          <DialogOverlay className="bg-background opacity-90" />
          <DialogContent className="h-5/6 border-2 border-blue-500">
            <DialogHeader>
              <DialogTitle>Criar evento</DialogTitle>
              <DialogDescription>
                Crie seu evento aqui, quanto mais detalhes melhor a exoeriência
                do seu fã.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleCreateEvent)}
                className="overflow-y-scroll "
              >
                {/* Image of event */}
                <div>
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Imagem do evento artístico.
                  </label>
                  <div className="mt-2 flex items-center">
                    <Button
                      type="button"
                      className="text-white flex gap-2 hover:text-orange-logo hover:bg-transparent"
                      variant="ghost"
                    >
                      <MdOutlineAddPhotoAlternate
                        className="size-6 text-gray-300 hover:text-orange-logo hover:bg-transparent"
                        aria-hidden="true"
                      />
                      Adicionar imagem
                    </Button>
                  </div>
                </div>
                {/* Forms */}
                <div>
                  <FormField
                    control={form.control}
                    name="nameevent"
                    render={({ field }) => (
                      <FormItem className="mt-6">
                        <FormLabel>Nome do evento</FormLabel>
                        <FormControl>
                          <Input
                            id="nameevent"
                            placeholder="Informe o nome do evento"
                            className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="my-6">
                        <FormLabel>Descrição do evento</FormLabel>
                        <FormControl>
                          <Textarea
                            id="description"
                            placeholder="Informe um pouco sobre o evento"
                            className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormLabel>Data do evento</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "flex w-full justify-start text-left font-normal text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground",
                          !dateEvent && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateEvent ? (
                          format(dateEvent, "PPP")
                        ) : (
                          <span>Escolha uma data</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={dateEvent}
                        onSelect={setDateEvent}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormField
                    control={form.control}
                    name="timeevent"
                    render={({ field }) => (
                      <FormItem className="mt-6">
                        <FormLabel>Horário do evento</FormLabel>
                        <FormControl>
                          <Input
                            id="timeevent"
                            placeholder="Informe o horário do evento"
                            className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="durantionevent"
                    render={({ field }) => (
                      <FormItem className="mt-6">
                        <FormLabel>Duração do evento</FormLabel>
                        <FormControl>
                          <Input
                            id="durantionevent"
                            placeholder="Informe a duração do evento"
                            className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="local"
                    render={({ field }) => (
                      <FormItem className="mt-6">
                        <FormLabel>Local do evento</FormLabel>
                        <FormControl>
                          <Input
                            id="local"
                            placeholder="Informe a localização do evento"
                            className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem className="mt-6">
                        <FormLabel>Valor do evento</FormLabel>
                        <FormControl>
                          <Input
                            id="price"
                            placeholder="Informe valor do evento"
                            className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Lembre que esse valor é retirado a taxa da plataforma
                          e impostos. Taxa de transmissão a parte. Ler{" "}
                          <span className="text-blue-500">
                            Termo do usuário
                          </span>
                          .
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
            <DialogFooter>
              {/* <DialogClose>Fechar</DialogClose> */}
              <Button type="submit" className="text-foreground">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
