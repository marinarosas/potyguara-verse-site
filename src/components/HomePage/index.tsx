'use client'

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
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

export function Homepage() {

  const router = useRouter();


  function handleNavigateToSingupPageArtist() {
    router.push(`/singup-artist`);
  }

  function handleNavigateToSingupPageViewer() {
    router.push(`/singup-viewer`);
  }

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
      <h1 className="flex justify-center text-center text-whitefont-bold text-4xlsm:text-4xlmd:text-3xl lg:text-3xl 2xl:text-3xl sm:w-9/12md:w-3/5lg:w-3/5 2xl:w-3/5 ml-8 mr-8 ">
        Conheça a Potyguara Verse sua plataforma de eventos online, uma nova
        maneira de assitir eventos!
      </h1>
      <div className="flex flex-col md:flex-row gap-12">
        <Button className="text-white">Baixe a plataforma</Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="text-black-000" variant="secondary">
              Cadastre-se
            </Button>
          </DialogTrigger>
          <DialogOverlay className="bg-background opacity-90 w-screen" />
          <DialogContent className="sm:max-w-[425px] md:h-52">
            <DialogHeader>
              <DialogTitle className="text-md text-foreground">
                Gostariamos de saber qual é o seu perfil?
              </DialogTitle>
              <DialogDescription className="text-justify">
                No Potyguara você pode escolher dois caminhos... <br />O criador
                de conteúdo (O artista) ou o consumidor de cultura (O
                espectador).
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex justify-around sm:justify-around">
              <Button
                className="w-32 text-foreground"
                onClick={() => handleNavigateToSingupPageArtist()}
              >
                Artista
              </Button>
              <Button
                className="w-32 text-foreground"
                onClick={() => handleNavigateToSingupPageViewer()}
              >
                Espectador
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="lg:hidden w-full h-28 mt-12 bg-gradient-to-b from-black-000 to-background"></div>
    </div>
  );
}
