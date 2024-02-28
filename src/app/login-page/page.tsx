"use client";

import { Button } from "@/components/ui/button";
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

export default function Login() {
  const router = useRouter();

  function handleNavigateToHomePage() {
    router.push(`/`);
  }

  function handleNavigateToSingupPageArtist() {
    router.push(`/singup-artist`);
  }

  function handleNavigateToSingupPageViewer() {
    router.push(`/singup-viewer`);
  }

  function handleNavigateToDashboard() {
    router.push(`/app/dashboard`);
  }

  return (
    <main className="h-screen text-foreground bg-background">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="h-auto w-36 m-auto hover:cursor-pointer"
            src="/LogoRetangular.png"
            alt="Potyguara Logo"
            onClick={() => handleNavigateToHomePage()}
          />
          <h2 className="text-center text-xl font-bold leading-4 tracking-tight text-gray-900">
            Entre na sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="/dashboard"
            // method="POST"
          >
            <div>
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
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Senha
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />
              </div>
            </div>

            <div>
              {/* <Button
                onClick={() => handleNavigateToDashboard()}
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Entrar
              </Button> */}
            </div>
          </form>
          <Button
            onClick={() => handleNavigateToDashboard()}
            className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Entrar
          </Button>
          <p className="mt-10 text-center text-sm text-gray-500">
            Não é um membro?{" "}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="hover:bg-transparent">
                  Cadastre-se.
                </Button>
              </DialogTrigger>
              <DialogOverlay className="bg-background opacity-90" />
              <DialogContent className="sm:max-w-[425px] md:h-52">
                <DialogHeader>
                  <DialogTitle className="text-md text-foreground">
                    Gostariamos de saber qual é o seu perfil?
                  </DialogTitle>
                  <DialogDescription className="text-justify">
                    No Potyguara você pode escolher dois caminhos... <br />O
                    criador de conteúdo (O artista) ou o consumidor de cultura
                    (O espectador).
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex justify-around sm:justify-around">
                  <Button
                    className="w-32 hover:text-foreground"
                    onClick={() => handleNavigateToSingupPageArtist()}
                  >
                    Artista
                  </Button>
                  <Button
                    className="w-32 hover:text-foreground"
                    onClick={() => handleNavigateToSingupPageViewer()}
                  >
                    Espectador
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </p>
        </div>
      </div>
    </main>
  );
}
