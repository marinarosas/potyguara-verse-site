"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Suspense, useEffect, useState } from "react";
import { useListEstadosIBGE } from "@/services/hooks/Ibge/useListEstadosIbge";
import { useFindMunicipioByEstadosIbge } from "@/services/hooks/Ibge/useFindMunicipioByEstadosIbge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InputMasked } from "@/components/Form/inputMask";
import { createExternalAccount } from "@/services/hooks/createExternalAccount";
import uuid from 'react-uuid';
import Link from "next/link";

const CreateUserPlayerformSchema = z.object({
  username: z.string().min(10, {
    message: "Informe o nome de usuário",
  }),
  email: z.string().min(10, {
    message: "Informe o e-mail",
  }),
  password: z.string().min(8, {
    message: "Informe a senha",
  }),
});

export default function SingupPage() {
  const router = useRouter();

  const { toast } = useToast();


  // const [allowNotification, setAllowNotification] = useState<boolean>(false);

  const searchParams = useSearchParams();

  const userRole = searchParams.get("role");

  function handleNavigateToLoginPage() {
    router.push(`/login-page`);
  }

  function handleNavigateToHomePage() {
    router.push(`/`);
  }

  const form = useForm<z.infer<typeof CreateUserPlayerformSchema>>({
    resolver: zodResolver(CreateUserPlayerformSchema),
    defaultValues: {
      username: "",
      name: "",
      password: "",
      streetnumber: "",
      streetname: "",
      streetcomplement: "",
      country: "",
      state: "",
      city: "",
      email: "",
      aboutartist: "",
      zipcode: "",
      documentnumber: "",
      avatar: "",
      skins: "",
      artisticname: "",
      allownotifications: false,
      acceptplataformterms: false,
    },
  });

  const handleCreateUserPlayer: SubmitHandler<
    z.infer<typeof CreateUserPlayerformSchema>
  > = async ({ username, email, password }) => {
    await createExternalAccount({
      username,
      email,
      password,
      role: userRole as string,
      organizationUuid: uuid(),
    });

     toast({
      title: "Uhuu! Cadastro realizado com sucesso.",
      description: "Cadastro do usuário criado com sucesso.",
    });

    handleNavigateToLoginPage();
  };

  return (
    <main className="bg-muted-foreground text-foreground">
      <Header />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleCreateUserPlayer)}
          className="px-28 py-8"
        >
          {/* Formulário */}
          <div className="pb-12">
            <h2 className="text-secondary text-xl font-semibold leading-7 pb-4">
              Criar usuário
            </h2>
            <p className="mt-1 text-sm leading-6">
              Olá. <br /> É sua primeira vez aqui? Bora iniciar sua jornada no
              Potyguara Verse? Primeiro é só criar o seu usuário.
            </p>

            <div className="flex gap-10">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-1/2 mt-8">
                    <FormLabel>Nome do usuário</FormLabel>
                    <FormControl>
                      <Input
                        id="username"
                        placeholder="Informe o nome do usuário"
                        className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Esse será seu o nome usado no login.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-1/2 mt-8">
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="Informe o e-mail"
                        className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                    Esse será seu nome de usuário e login.
                  </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-10">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-1/2 mt-8">
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        placeholder="Informe a senha"
                        className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                    Esse será seu nome de usuário e login.
                  </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-1/2 mt-8">
                    <FormLabel>Confirme a senha</FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        placeholder="Informe a senha novamente"
                        className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                    Esse será seu nome de usuário e login.
                  </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-4 justify-end mt-16">
              {/* <div className="flex items-center space-x-2">
                <Checkbox id="allownotifications" />
                <label
                  htmlFor="allownotifications"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Quer receber novidades da plataforma?
                </label>
              </div> */}
              <div className="flex items-center space-x-2">
                <span>Ao cadastrar, você aceita os <Link href="www.google.com" className="text-blue-500 underline">termos</Link> e <Link href="wwww.google.com" className="text-blue-500 underline">políticas</Link> da plataforma Potyguara Verse.  </span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 hover:text-red-600"
              onClick={() => handleNavigateToHomePage()}
            >
              Cancelar
            </button>
            <Button
              type="submit"
              variant="ghost"
              className="hover:bg-transparent hover:text-secondary"
            >
              Cadastrar
            </Button>
          </div>
        </form>
      </Form>
      <Footer />
    </main>
  );
}
