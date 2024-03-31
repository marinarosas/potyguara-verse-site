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
import Image from "next/image";
import LogoPotyguara from "../../../public/LogoRetangular.png";
import { ChooseUserRole } from "@/components/Singup/dialogChooseRole";
import { Suspense } from "react";

export default function Login() {
  const router = useRouter();

  function handleNavigateToHomePage() {
    router.push(`/`);
  }

  function handleNavigateToDashboard() {
    router.push(`/app/dashboard`);
  }

  return (
    <main className="h-screen text-foreground bg-muted-foreground">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex flex-col sm:mx-auto sm:w-full sm:max-w-sm gap-4">
          <Image
            className="h-auto w-36 m-auto hover:cursor-pointer"
            src={LogoPotyguara}
            height={100}
            width={100}
            alt="Potyguara Logo"
            onClick={() => handleNavigateToHomePage()}
          />
          <h2 className="text-center text-lg font-bold leading-4 tracking-tight ">
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
                className="block text-sm font-medium leading-6 "
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
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 "
                >
                  Senha
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-secondary-foreground hover:text-secondary"
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
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
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
              <Suspense>
                <ChooseUserRole />
              </Suspense>
            </Dialog>
          </p>
        </div>
      </div>
    </main>
  );
}
