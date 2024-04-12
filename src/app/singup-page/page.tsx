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
import { createExternalAccount } from "@/services/hooks/createExternalAccount";
import { v4 as uuidv4 } from "uuid";
import { createUserPlayer } from "@/services/hooks/createUserPlayer";
import { Checkbox } from "@/components/ui/checkbox";

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
  name: z.string(),
  streetnumber: z.string(),
  streetname: z.string(),
  streetcomplement: z.string(),
  country: z.string(),
  state: z.string(),
  city: z.string(),
  aboutartist: z.string(),
  zipcode: z.string(),
  documentnumber: z.string(),
  allownotifications: z.boolean(),
  acceptplataformterms: z.boolean(),
  avatar: z.string(),
  skins: z.string(),
  artisticname: z.string(),
});

export default function SingupPage() {
  const router = useRouter();

  const { toast } = useToast();

  const uuid = uuidv4();

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
  > = async ({
    username,
    email,
    password,
    name,
    city,
    streetname,
    streetnumber,
    streetcomplement,
    aboutartist,
    documentnumber,
    allownotifications,
    avatar,
    skins,
    acceptplataformterms,
    artisticname,
    country,
  }) => {
    const createAccountResponse = await createExternalAccount({
      username,
      email,
      password,
      role: userRole as string,
      organizationUuid: uuid,
    });

    console.log("createAccountResponse", createAccountResponse);

    const createUserPlayerResponse = await createUserPlayer({
      name,
      username,
      streetname,
      streetnumber,
      streetcomplement,
      country,
      state: estadoIbge,
      city,
      zipcode: zipcodeStreet,
      email,
      aboutartist,
      documentnumber: documentnumber,
      allownotifications,
      avatar,
      skins,
      role: userRole as string,
      acceptplataformterms,
      artisticname,
    });

    console.log("createUserPlayerResponse", createUserPlayerResponse);

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

            {userRole === "ARTIST" && (
              <div className="mt-16">
                <h2 className="text-base font-semibold leading-7 text-secondary">
                  Informação do artísta
                </h2>
                <p className="mt-1 text-sm leading-6">
                  Aqui, precismos que você preencha os dados pessoais de quem
                  será o admnistrador do artista ou grupo artístico dentro do
                  Potyguara Verse.
                </p>
                <FormField
                  control={form.control}
                  name="artisticname"
                  render={({ field }) => (
                    <FormItem className="w-1/2 mt-8">
                      <FormLabel>Nome do artista ou grupos artístico</FormLabel>
                      <FormControl>
                        <Input
                          id="artisticname"
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
                <div className="gap-4">
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

                <h2 className="text-base font-semibold leading-7 mt-8 text-secondary">
                  Endereço
                </h2>

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
                            // {...field}
                            value="Brasil"
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
                                    municipio.microrregiao.mesorregiao.UF
                                      .sigla === estadoIbge && (
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
            )}
            <div className="flex gap-4 justify-end mt-16">
              <div className="flex items-center space-x-2">
                <Checkbox id="allownotifications" />
                <label
                  htmlFor="allownotifications"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Quer receber novidades da plataforma?
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="acceptplataformterms" />
                <label
                  htmlFor="acceptplataformterms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Aceite os termos e políticas da plataforma.
                </label>
              </div>
            </div>
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
        </form>
      </Form>
      <Footer />
    </main>
  );
}
