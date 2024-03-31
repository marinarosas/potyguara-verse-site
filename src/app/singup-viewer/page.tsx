'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import BrasaoColor from '../../../public/brasao_color.png'
import Image from 'next/image'

export default function SingupViewer() {
  const router = useRouter()

  function handleNavigateToHomePage() {
    router.push(`/`)
  }

  return (
    <main className="text-foreground bg-background ">
      <Header />
      <form className="px-28 py-8">
        <div className="space-y-12">
          {/* Cabeçalho */}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-green-neon text-xl font-semibold leading-7 text-gray-900 pb-4">
              Perfil do Espectador
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Olá. <br /> Antes que você possa explorar nossos ambientes,
              precisamos que crie sua conta. Vamos lá?
            </p>
          </div>

          {/* Foto Perfil */}
          <div className="col-span-full">
            <label
              htmlFor="photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Foto do perfil
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              {/* <UserCircleIcon
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                ></UserCircleIcon> */}
              <Image
                src={BrasaoColor}
                alt="Imagem Perfil"
                className="h-20 w-20 text-gray-300"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="text-white">Mudar</Button>
                </DialogTrigger>
                <DialogOverlay className="bg-background opacity-90" />
                <DialogContent className="sm:max-w-[425px] md:h-62">
                  <DialogHeader>
                    <DialogTitle className="text-md text-foreground">
                      Gostaria de mudar para qual?
                    </DialogTitle>
                    <DialogDescription className="text-justify flex justify-around">
                      <Image
                        src={BrasaoColor}
                        alt="Imagem Perfil"
                        className="h-28 w-28 text-gray-300"
                      />
                      <Image
                        src={BrasaoColor}
                        alt="Imagem Perfil"
                        className="h-28 w-28 text-gray-300"
                      />
                      <Image
                        src={BrasaoColor}
                        alt="Imagem Perfil"
                        className="h-28 w-28 text-gray-300"
                      />
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="flex justify-around sm:justify-around">
                    <Button
                      className="w-32 text-white"
                      // onClick={() => handleNavigateToSingupPageArtist()}
                    >
                      Confirmar
                    </Button>
                    <Button
                      className="w-32 text-white"
                      // onClick={() => handleNavigateToSingupPageViewer()}
                    >
                      Cancelar
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Username */}
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nome do usuário Potyguara
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="janesmith"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Escolha uma senha
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirme a senha
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* E-mail */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                E-mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirme o e-mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                País
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Brasil</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notifications */}
          {/* <div className="border-b border-gray-900/10 pb-12">
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
          </div> */}

          {/* Terms and LGPD */}
          <div className="border-b border-gray-900/10 pb-12">
            {/* <h2 className="text-base font-semibold leading-7 text-gray-900">
              Termos e condições
            </h2> */}
            <div className="space-y-10">
              <fieldset>
                <div className="mt-2 space-y-6">
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
                        Tenho 13 anos ou mais e li e aceito os termos{' '}
                        <a
                          href="https://www.mozilla.org/pt-BR/"
                          className="text-blue-500 underline"
                        >
                          Acordo de membro
                        </a>{' '}
                        e da{' '}
                        <a
                          href="https://www.mozilla.org/pt-BR/"
                          className="text-blue-500 underline"
                        >
                          Política de privacidade
                        </a>{' '}
                        do Potyguara Verse.
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="hover:bg-transparent  hover:text-green-neon"
              >
                Cadastrar
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
                  começar a assistir seus eventos.
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
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-600"
            onClick={() => handleNavigateToHomePage()}
          >
            Cancelar
          </button>
        </div>
      </form>
      <Footer />
    </main>
  )
}
