"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import * as yup from 'yup'
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IArtist } from "@/types/artist";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'

const createTipoItemFormSchema = yup.object().shape({
  username: yup.string().nullable(),
  address: yup.string().nullable(),
  number: yup.number().nullable(),
  complement: yup.string().nullable(),
  country: yup.string().nullable(),
  state: yup.string().nullable(),
  city: yup.string().nullable(),
  email: yup.string().nullable(),
  aboutartist: yup.string().nullable(),
  documentnumber: yup.string().nullable(),
  allownotifications: yup.boolean().nullable(),
})

type ICreateArtistFormData = yup.InferType<
  typeof createTipoItemFormSchema
>

export default function SingupArtist() {
  const router = useRouter();

  function handleNavigateToHomePage() {
    router.push(`/`);
  }

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit: SubmitHandler<ICreateArtistFormData> = async (data) => {
    try {
      const response = await axios.post(
        "https://api.ycodify.com/v2/persistence/c/s/no-ac",
        {
          action: "CREATE",
          data: [data],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Tenant-Id": "19379587-75b0-3aec-9717-46c6e26757e3",
            "X-API-Master-Key": "ed950147-a6fc-3d45-a69c-bfc55f414ae6",
          },
        }
      );

      if (response.status === 201) {
        alert("Artista cadastrado com sucesso!");
        console.log(response.data);
      } else {
        throw new Error("Error: " + JSON.stringify(response.data));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="text-foreground bg-background ">
      <Header />
      <form className="px-28 py-8">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-green-neon text-xl font-semibold leading-7 text-gray-900 pb-4">
              Perfil do Artista
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Olá. <br /> É aqui que sua jornada artística começa! <br />{" "}
              Primeiro, precisamos saber um pouco mais sobre você e o seu
              trabalho. Preencha os dados a seguir, para poder avançar para a
              próxima etapa.
            </p>

            <div className="col-span-full pt-8">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
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

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nome artístico (username)
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <Input
                      className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                      {...register("username")}
                      placeholder="Nome artístico"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sobre
                </label>
                <div className="mt-2">
                  <Input
                    {...register("aboutartist")}
                    className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 h-32 bg-foreground"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Escreva um pouco sobre seu trabalho.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Informação pessoal (Criador da conta)
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use um endereço permanente a onde você consiga receber o correio.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nome
                </label>
                <div className="mt-2">
                  <Input
                    type="text"
                    {...register("name")}
                    autoComplete="given-name"
                    className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  CPF
                </label>
                <div className="mt-2">
                  <Input
                    {...register("documentnumber")}
                    name="cpf"
                    className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  E-mail
                </label>
                <div className="mt-2">
                  <Input
                    {...register("email")}
                    type="email"
                    autoComplete="email"
                    className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirmar E-mail
                </label>
                <div className="mt-2">
                  <Input
                    {...register("email")}
                    type="email"
                    autoComplete="email"
                    className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Endereço
                </label>
                <div className="mt-2">
                  <Input
                    {...register("address")}
                    type="text"
                    autoComplete="street-address"
                    className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Número
                </label>
                <div className="mt-2">
                  <Input
                    {...register("number")}
                    type="text"
                    autoComplete="street-address"
                    className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Complemento
                </label>
                <div className="mt-2">
                  <Input
                    {...register("complement")}
                    autoComplete="address-level1"
                    className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  País
                </label>
                <div className="mt-2">
                  <Select>
                    <SelectTrigger className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground">
                      <SelectValue
                        placeholder="País"
                        {...register("country")}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Brasil">Brasil</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Estado
                </label>
                <div className="mt-2">
                  <Select>
                    <SelectTrigger className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground">
                      <SelectValue
                        placeholder="Cidade"
                        {...register("state")}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Brasil">Natal</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cidade
                </label>
                <div className="mt-2">
                  <Select>
                    <SelectTrigger className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground">
                      <SelectValue placeholder="Cidade" {...register("city")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Brasil">Natal</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  CEP
                </label>
                <div className="mt-2">
                  <Input
                    {...register("zipcode")}
                    autoComplete="address-level1"
                    className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Notifications
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Receba informações e novidades sobre o Potyguara Verse.
            </p>

            <div className="mt-4 space-y-10">
              <fieldset>
                <div className="mt-6 space-y-6">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-900"
                      >
                        Eventos
                      </label>
                      <p className="text-gray-500">
                        Seja notificado quando chegar um evento novo na
                        plataforma.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-gray-900"
                      >
                        Promoções
                      </label>
                      <p className="text-gray-500">
                        Seja norificado quando tivermos alguma promoção
                        especial.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            {/* <h2 className="text-base font-semibold leading-7 text-gray-900">
              Termos e condições
            </h2> */}
            <div className="mt-4 space-y-10">
              <fieldset>
                <div className="mt-6 space-y-6">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-900"
                      >
                        Li e aceito a{" "}
                        <a
                          href="https://www.mozilla.org/pt-BR/"
                          className="text-blue-500 underline"
                        >
                          Política de privacidade
                        </a>{" "}
                        do Potyguara Verse
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-600"
            onClick={() => handleNavigateToHomePage()}
          >
            Cancel
          </button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                type="submit"
                variant="ghost"
                className="hover:bg-transparent  hover:text-green-neon"
                onSubmit={handleSubmit(onSubmit)}
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
        </div>
      </form>
      <Footer />
    </main>
  );
}
