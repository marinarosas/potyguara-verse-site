"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
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
import { Textarea } from "@/components/ui/textarea";
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

const formSchema = z.object({
  username: z.string().min(10, {
    message: "Informe o nome artístico",
  }),
  name: z.string().min(10, {
    message: "Informe o nome completo",
  }),
  streetnumber: z.string().min(1, {
    message: "Informe o número da rua",
  }),
  streetname: z.string().min(10, {
    message: "Informe o endereço completo",
  }),
  streetcomplement: z.string(),
  country: z.string().min(2, {
    message: "Informe o país",
  }),
  state: z.string().min(2, {
    message: "Informe o estado",
  }),
  city: z.string().min(2, {
    message: "Informe a cidade",
  }),
  email: z.string().min(10, {
    message: "Informe o e-mail",
  }),
  aboutartist: z.string(),
  zipcode: z.string().min(2, {
    message: "Informe o cep",
  }),
  documentnumber: z.string().min(8, {
    message: "Informe o CPF",
  }),
  password: z.string().min(8, {
    message: "Informe a senha",
  }),
  allownotifications: z.boolean(),
  acceptplataformterms: z.boolean(),
});

export default function SingupArtist() {
  const router = useRouter();

  const { toast } = useToast();

  const { estados } = useListEstadosIBGE();

  const [estadoIbge, setEstadoIbge] = useState<string>("");

  const [zipcodeStreet, setZipcodeStreet] = useState<string>("");

  const [userDocumentNumber, setUserDocumentNumber] = useState<string>("");

  const { municipios } = useFindMunicipioByEstadosIbge(estadoIbge);

  const [allowNotification, setAllowNotification] = useState<boolean>(false);

  const [acceptTermsAndPolicy, setAcceptTermsAndPolicy] =
    useState<boolean>(false);

  const searchParams = useSearchParams();

  const userRole = searchParams.get("role");

  const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;
  const apiMasterKey = process.env.NEXT_PUBLIC_API_MASTER_KEY;

  function handleNavigateToLoginPage() {
    router.push(`/login-page`);
  }

  function handleNavigateToHomePage() {
    router.push(`/`);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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
      allownotifications: false,
      acceptplataformterms: false,
    },
  });

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "X-Tenant-ID": tenantId,
      "X-API-Master-Key": apiMasterKey,
    },
  };

  const handleCreateArtist: SubmitHandler<z.infer<typeof formSchema>> = async ({
    username,
    name,
    password,
    streetnumber,
    streetname,
    streetcomplement,
    country,
    city,
    email,
    aboutartist,
  }) => {
    console.log("entrou");

    try {
      await axios.post(
        "https://api.ycodify.com/v2/id/open/account",
        {
          username,
          password,
          email,
        },
        axiosConfig
      );

      await axios.post(
        "https://api.ycodify.com/v2/id/role",
        {
          account: {
            username,
          },
          role: {
            name: userRole,
            owner: "481d4c8c-2cac-3138-a825-e29bce349355",
          },
        },
        axiosConfig
      );

      await axios.post(
        "https://api.ycodify.com/v2/persistence/c/s/no-ac",
        {
          action: "CREATE",
          data: [
            {
              user: {
                username,
                name,
                streetnumber,
                streetname,
                streetcomplement,
                country,
                state: estadoIbge,
                city,
                email,
                aboutartist,
                zipcode: zipcodeStreet,
                documentnumber: userDocumentNumber,
                allownotifications: allowNotification,
                acceptplataformterms: acceptTermsAndPolicy,
              },
            },
          ],
        },
        axiosConfig
      );

      toast({
        title: "Uhuu! Cadastro realizado com sucesso.",
        description: "Cadastro do usuário criado com sucesso.",
      });

      handleNavigateToLoginPage();
    } catch (error) {
      console.log(error);
      toast({
        title: "Ops! Algo deu errado.",
        description: "O cadastro não foi criado, fale com a central.",
      });
    }
  };

  return (
    <main className="bg-muted-foreground text-foreground">
      <Header />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleCreateArtist)}
          className="px-28 py-8"
        >
          {/* Formulário */}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-secondary text-xl font-semibold leading-7 pb-4">
              Perfil do Artista
            </h2>
            <p className="mt-1 text-sm leading-6">
              Olá. <br /> É aqui que sua jornada artística começa! <br />{" "}
              Primeiro, precisamos saber um pouco mais sobre você e o seu
              trabalho. Preencha os dados a seguir, para poder avançar para a
              próxima etapa.
            </p>

            <div className="col-span-full pt-8">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6"
              >
                Foto da pessoa ou grupo artístico
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <Button type="button" className="text-white">
                  Mudar
                </Button>
              </div>
            </div>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-1/2 mt-8">
                  <FormLabel>Nome artítico (Username)</FormLabel>
                  <FormControl>
                    <Input
                      id="username"
                      placeholder="Informe o nome artístico"
                      className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Esse será seu nome de usuário e login.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="aboutartist"
              render={({ field }) => (
                <FormItem className="mt-8">
                  <FormLabel>Sobre</FormLabel>
                  <FormControl>
                    <Textarea
                      id="aboutartist"
                      placeholder="Informe o nome artístico"
                      className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Escreva um pouco sobre seu trabalho.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-8">
            <h2 className="text-base font-semibold leading-7">
              Informação pessoal
            </h2>
            <p className="mt-1 text-sm leading-6">
              Aqui, precismos que você preencha os dados pessoais de quem será o
              admnistrador do artista ou grupo artístico dentro do Potyguara
              Verse.
            </p>
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-1/2 mt-8">
                    <FormLabel>Nome completo</FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        placeholder="Informe o nome completo"
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
                name="documentnumber"
                render={({ field }) => (
                  <FormItem className="w-1/2 mt-8">
                    <FormLabel>CPF</FormLabel>
                    <FormControl>
                      {/* <Input
                          id="documentnumber"
                          placeholder="Informe o cpf"
                          className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                          // onChange={(e) => setDocumentNumber(e.target.value)}
                          {...field}
                        /> */}
                      <InputMasked
                        mask="999.999.999-99"
                        id="documentnumber"
                        placeholder="Informe o cpf"
                        onChange={(e) => {
                          field.onChange(e.target.value);
                          setUserDocumentNumber(e.target.value);
                        }}
                        // {...field}
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

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-1/2 mt-8">
                  <FormLabel>Confirme o e-mail</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="Informe o e-mail novamente"
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

            <h2 className="text-base font-semibold leading-7 mt-8">Endereço</h2>

            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="streetname"
                render={({ field }) => (
                  <FormItem className="w-1/2 mt-4">
                    <FormLabel>Rua</FormLabel>
                    <FormControl>
                      <Input
                        id="streetname"
                        placeholder="Informe a rua"
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
                name="streetnumber"
                render={({ field }) => (
                  <FormItem className="w-1/2 mt-4">
                    <FormLabel>Número</FormLabel>
                    <FormControl>
                      <Input
                        id="streetnumber"
                        placeholder="Informe o número"
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

            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="streetcomplement"
                render={({ field }) => (
                  <FormItem className="w-1/2 mt-4">
                    <FormLabel>Complemento</FormLabel>
                    <FormControl>
                      <Input
                        id="complement"
                        placeholder="Informe o complemento, se houver."
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
                name="country"
                render={({ field }) => (
                  <FormItem className="w-1/2 mt-4">
                    <FormLabel>País</FormLabel>
                    <FormControl>
                      <Input
                        id="country"
                        placeholder="Informe o país"
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

            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="w-1/2 mt-4">
                    <FormLabel>Estados</FormLabel>
                    <FormControl>
                      <Select
                        // onValueChange={field.onChange}

                        onValueChange={(value) => {
                          field.onChange(value);
                          setEstadoIbge(value);
                        }}
                      >
                        <SelectTrigger className="bg-foreground text-background placeholder:text-gray-400">
                          <SelectValue placeholder="Selecione seu estado" />
                        </SelectTrigger>
                        <SelectContent className="text-foreground focus:ring-0 sm:text-sm sm:leading-6 bg-muted-foreground">
                          <SelectGroup>
                            {estados?.map((estado) => {
                              return (
                                <SelectItem
                                  key={estado.id}
                                  value={estado.sigla}
                                >
                                  {estado.sigla}
                                </SelectItem>
                              );
                            })}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="w-1/2 mt-4">
                    <FormLabel>Cidade</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                        }}
                      >
                        <SelectTrigger className="bg-foreground text-background placeholder:text-gray-400">
                          <SelectValue placeholder="Selecione seu estado" />
                        </SelectTrigger>
                        <SelectContent className="text-foreground focus:ring-0 sm:text-sm sm:leading-6 bg-muted-foreground">
                          <SelectGroup>
                            {municipios?.map((municipio) => {
                              return (
                                municipio.microrregiao.mesorregiao.UF.sigla ===
                                  estadoIbge && (
                                  <SelectItem
                                    key={municipio.id}
                                    value={municipio.nome}
                                  >
                                    {municipio.nome}
                                  </SelectItem>
                                )
                              );
                            })}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      {/* <Input
                          id="city"
                          placeholder="Informe a cidade"
                          className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                          {...field}
                        /> */}
                    </FormControl>
                    {/* <FormDescription>
                    Esse será seu nome de usuário e login.
                  </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="zipcode"
              render={({ field }) => (
                <FormItem className="w-1/2 mt-4">
                  <FormLabel>CEP</FormLabel>
                  <FormControl>
                    <InputMasked
                      mask="99.999-999"
                      id="zipcode"
                      placeholder="Informe o CEP"
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        setZipcodeStreet(e.target.value);
                      }}
                      // {...field}
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

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 hover:text-red-600"
              onClick={() => handleNavigateToHomePage()}
            >
              Cancel
            </button>
            <Button
              type="submit"
              variant="ghost"
              className="hover:bg-transparent hover:text-secondary"
            >
              Save
            </Button>
          </div>

          {/* <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 hover:text-red-600"
              onClick={() => handleNavigateToHomePage()}
            >
              Cancel
            </button>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  type="submit"
                  variant="ghost"
                  className="hover:bg-transparent hover:text-secondary"
                >
                  Save
                </Button>
              </DialogTrigger>
              <DialogOverlay className="bg-background opacity-90" />
              <DialogContent className="sm:max-w-[425px] md:h-52">
                <DialogHeader>
                  <DialogTitle className="text-md text-foreground">
                    Cadastro realizado com sucesso!
                  </DialogTitle>
                  <DialogDescription className="text-justify">
                    Cheque seu e-mail para confirmar o cadastro na plataforma e
                    começar a criar seus eventos.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex justify-start">
                  <Button
                    className="w-32 text-white"
                    onClick={() => handleNavigateToHomePage()}
                  >
                    Voltar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div> */}
        </form>
      </Form>
      <Footer />
    </main>
  );
}
