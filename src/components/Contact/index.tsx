"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChooseUserRole } from "../Singup/dialogChooseRole";
import { Suspense, useState } from "react";
import { useToast } from "../ui/use-toast";
import emailjs from '@emailjs/browser'
import ReactPlayer from 'react-player'


export function Contact() {

  const { toast } = useToast();


  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  function sendEmail(e){
    e.preventDefault()

    if(name === '' || email === '' || message === '' ){
      return toast({
        title: "Ops! Algo deu errado.",
        description: "Você precisa preencher todos os campos para enviar uma mensagem.",
      });
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }

    emailjs.send("service_zbxi0nc","template_dgvmqfp", templateParams, "4cE3-qpOkYN-q8Pk6")
    .then((response)=>{
      setName('')
      setEmail('')
      setMessage('')

      return toast({
        title: "Uhuu! E-mail enviado com sucesso!",
      });
      
    }, (err)=>{
      return toast({
        title: "Ops! Algo deu errado ao enviar o e-mail.",
      });
    })
  }

  return (
    <div
      className="h-full bg-muted-foreground flex flex-col lg:flex-row"
      id="contact"
    >
      {/* Contatos */}
      <div className="h-screen lg:w-1/2 flex justify-center items-center -mt-10 md:mt-0 lg:mt-0">
        <div className="w-9/12 lg:w-7/12 md:h-5/6 lg:5/6 rounded-l-3xl bg-gradient-to-b from-secondary to-foreground text-background">
          <form className="p-2 lg:p-4" onSubmit={sendEmail}>
            <div className="space-y-4">
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Deixe o seu contato e falaremos com você!
                </h2>
                <p className="mt-1 text-xs leading-4 md:leading-6 lg:leading-6 text-gray-600">
                  Suas informações não serão compartilhadas. Campos
                  obrigatórios*
                </p>
                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nome
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        placeholder="Digite seu nome"
                        value={name}
                        autoComplete="given-name"
                        onChange={(e)=>setName(e.target.value)}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-gray-light focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      E-mail
                    </label>
                    <div className="mt-2">
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-gray-light focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mensagem
                    </label>
                    <div className="mt-2">
                      <textarea
                        name="about"
                        rows={8}
                        placeholder="Digite sua mensagem..."
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-gray-light focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Button className="text-foreground" type="submit">Enviar</Button>
            </div>
          </form>
        </div>
      </div>

      {/* Final call singup */}
      <div className="h-96 md:h-full lg:h-full w-1/2 justify-center align-middle space-y-8 m-auto">
        <h1 className="text-foreground text-3xl text-center items-center">
          Bora curtir o <br /> primeiro show?
        </h1>
        <div className="flex flex-col gap-8 items-center ">
          <Button className="text-foreground w-full md:w-6/12 lg:w-6/12 text-lg">
            Baixe a plataforma
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="text-background w-full md:w-6/12 lg:w-6/12 text-lg"
                variant="secondary"
              >
                Cadastre-se
              </Button>
            </DialogTrigger>
            <DialogOverlay className="bg-background opacity-90 w-screen" />
            <Suspense>
            <ChooseUserRole />
            </Suspense>
          </Dialog>

          <Button className="text-foreground  w-full md:w-6/12 lg:w-6/12 text-lg">
            Comunidade Steam
          </Button>
        </div>
      </div>
    
    </div>
  );
}
