"use client";

import { Button } from "../ui/button";
import { Dialog, DialogOverlay, DialogTrigger } from "@/components/ui/dialog";
import { ChooseUserRole } from "../Singup/dialogChooseRole";
import { Suspense } from "react";

export function Homepage() {
  return (
    <div
      id="homepage"
      className="h-screen align-middle flex sm:justify-start md:justify-center lg:justify-center 2xl:justify-center pt-40sm:pt-40md:pt-0 lg:pt-0 2xl:pt-0 gap-8 flex-col items-center transition-transform"
      style={{
        backgroundImage: `url(/BgSite_ImageAV.jpeg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "center",
      }}
    >
      <h1 className="flex justify-center text-center text-white font-bold text-4xl lg:text-3xl w-9/12 lg:w-3/5 ml-8 mr-8 ">
        Conheça a Potyguara Verse sua plataforma de eventos online, uma nova
        maneira de assitir eventos!
      </h1>
      <div className="flex flex-col md:flex-row gap-12">
        <Button variant="default">Baixe a plataforma</Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">Cadastre-se</Button>
          </DialogTrigger>
          <DialogOverlay className="bg-muted-foreground opacity-30 w-screen" />
          <Suspense>
            <ChooseUserRole />
          </Suspense>
        </Dialog>
      </div>
      <div className="lg:hidden w-full h-28 mt-12 bg-gradient-to-b from-black-000 to-background"></div>
    </div>
  );
}
