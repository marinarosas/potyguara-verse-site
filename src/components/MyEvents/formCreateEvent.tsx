"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "../ui/input";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { format } from "date-fns";
import axios from "axios";
import { z } from "zod";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { useToast } from "../ui/use-toast";

const eventFormSchema = z.object({
  // artist: z.string(),
  // eventdata: z.string(),
  nameevent: z.string(),
  timeevent: z.string(),
  durantionevent: z.string(),
  price: z.string(),
  description: z.string(),
  statuspayment: z.boolean(),
  // ecad: z.string(),
});

interface Props {
  setOpenDialogCreateEvent: any;
}

export function FormCreateEvent({ setOpenDialogCreateEvent }: Props) {
  const { toast } = useToast();

  const [dateEvent, setDateEvent] = useState<Date>();

  const formEvent = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      //   artist: "",
      //   eventdata: "",
      nameevent: "",
      timeevent: "",
      durantionevent: "",
      price: "",
      description: "",
      statuspayment: false,
      //   ecad: ""
    },
  });

  const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;
  const apiMasterKey = process.env.NEXT_PUBLIC_API_MASTER_KEY;

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "X-Tenant-ID": tenantId,
      "X-API-Master-Key": apiMasterKey,
    },
  };

  const handleCreateEvent: SubmitHandler<
    z.infer<typeof eventFormSchema>
  > = async ({
    nameevent,
    timeevent,
    durantionevent,
    price,
    description,
    statuspayment,
  }) => {
    try {
      await axios.post(
        "https://api.ycodify.com/v2/persistence/c/s/no-ac",
        {
          action: "CREATE",
          data: [
            {
              evento: {
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
      setOpenDialogCreateEvent(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "Ops! Algo deu errado.",
        description: "O cadastro não foi criado, fale com a central.",
      });
      setOpenDialogCreateEvent(false);
    }
  };

  return (
    <Form {...formEvent}>
      <form
        // onSubmit={formEvent.handleSubmit(handleCreateEvent)}
        className="overflow-y-scroll pr-4"
      >
        <Button
          type="button"
          className="w-fit h-12 text-foreground flex gap-2 hover:text-primary hover:bg-transparent border-2 border-primary border-dashed"
          variant="ghost"
        >
          <MdOutlineAddPhotoAlternate
            className="size-6 text-gray-300 hover:text-primary hover:bg-transparent"
            aria-hidden="true"
          />
          Adicionar imagem do evento
        </Button>
        {/* Row1 */}
        <div className="flex items-center py-6 gap-4">
          <FormField
            control={formEvent.control}
            name="nameevent"
            render={({ field }) => (
              <FormItem className="w-1/2">
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
          <div className="w-1/2 space-y-2">
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
          </div>
        </div>
        {/* Row 2 */}
        <FormField
          control={formEvent.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Descrição do evento</FormLabel>
              <FormControl>
                <Textarea
                  id="description"
                  placeholder="Informe um pouco sobre o seu evento"
                  className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground h-32"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Row 3 */}
        <div className="flex py-6 gap-4">
          <FormField
            control={formEvent.control}
            name="timeevent"
            render={({ field }) => (
              <FormItem className="w-1/2">
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
            control={formEvent.control}
            name="durantionevent"
            render={({ field }) => (
              <FormItem className="w-1/2">
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
        </div>
        <FormField
          control={formEvent.control}
          name="price"
          render={({ field }) => (
            <FormItem className="">
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
                Lembre que esse valor é retirado a taxa da plataforma e
                impostos. Taxa de transmissão a parte. Ler{" "}
                <span className="text-blue-500">Termo do usuário</span>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
      <DialogFooter className="gap-2">
        <DialogClose>
          <Button variant="outline" className="text-foreground">
            Fechar
          </Button>
        </DialogClose>
        <Button
          type="submit"
          className="text-foreground"
          onClick={formEvent.handleSubmit(handleCreateEvent)}
        >
          Criar evento
        </Button>
      </DialogFooter>
    </Form>
  );
}
