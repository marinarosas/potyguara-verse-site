"use client";

import { Button } from "../ui/button";
import { Dialog, DialogOverlay, DialogTrigger } from "@/components/ui/dialog";
import { ChooseUserRole } from "../Singup/dialogChooseRole";
import { Suspense } from "react";

export function Homepage() {
  return (
    <div
      id="homepage"
      className="h-screen flex justify-center gap-8 flex-col items-center transition-transform"
      style={{
        backgroundImage: `url(/BgSite_ImageAV.jpeg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "center",
      }}
    >
      <h1 className="flex justify-center text-center text-white font-bold text-4xl lg:text-3xl px-8 ">
        Conheça a Potyguara Verse sua plataforma de eventos online, uma nova
        maneira de assitir eventos!
      </h1>
      <div className="flex flex-col lg:flex-row gap-12">
        <Button variant="default" size="lg" >Baixe a plataforma</Button>
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
    </div>
  );
}
