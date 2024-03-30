"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useCallback } from "react";

export function ChooseUserRole() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  function handleNavigateToSingupPageArtist() {
    router.push(`/singup-artist` + "?" + createQueryString("role", "Artist"));
  }

  function handleNavigateToSingupPageViewer() {
    router.push(`/singup-viewer` + "?" + createQueryString("role", "Viewer"));
  }
  return (
    <DialogContent className="sm:max-w-[425px] md:h-52">
      <DialogHeader>
        <DialogTitle className="text-md text-foreground">
          Gostariamos de saber qual é o seu perfil?
        </DialogTitle>
        <DialogDescription className="text-justify  text-foreground">
          No Potyguara você pode escolher dois caminhos... <br />O criador de
          conteúdo (O artista) ou o consumidor de cultura (O espectador).
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
  );
}
