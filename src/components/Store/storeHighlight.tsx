"use client";
import React, { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "swiper/css";
import "swiper/css/pagination";
import "./stylesStore.css";
import AppMkt from "../../../public/retrowaveSun.jpeg";
import BandImage from "../../../public/BgSite.png";
import SkinsImage from "../../../public/retrowaveSkins.jpeg";
import Image from "next/image";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

export function StoreHighlight() {
  const splideRef = useRef<Splide | null>(null);

  const {theme} = useTheme()

  const varianteButton = theme === 'light' ? 'default' : 'secondary'

  const highlights = [
    {
      image: AppMkt,
      title: "Potyguara Verse",
      subtitle: "Sua nova plataforma de eventos.",
      description:
        "Faça download do jogo e venha curte um bom evento regado de muito jogos.",
        buttonText: 'Download'
    },
    {
      image: BandImage,
      title: "Guitaura Medieval",
      subtitle: "Adiquira seus ingressos!",
      description: "Show da banda medieval mais conhecida da cidade de Natal!",
      buttonText: 'Compre os ingressos'

    },
    {
      image: SkinsImage,
      title: "Skins",
      subtitle: "Conheça nossas skins!",
      description:
        "Variedades de skins para todos os estilos e gostos, venha se reiventar com a Potyguara.",
        buttonText: 'Compre uma skin'

    },
  ];
  return (
    <div className="h-full w-full flex justify-center items-start -mt-4 lg:mt-0 mb-4 lg:mb-0">
      <Splide
        ref={splideRef}
        options={{
          rewind: false,
          direction: "ltr",
          wheel: true,
          waitForTransition: true,
          wheelSleep: 1000,
          type: "loop",
          perMove: 1,
          autoplay: true,
          pauseOnHover: true,
          interval: 3000,
          arrows: false,
          focus: "center",
          slideFocus: true,
          perPage: 1,
          width: "80%",
          pagination: true,
          // isNavigation: true,
          // breakpoints: {
          //   640: {
          //     perPage: 1,
          //   },
          //   1920: {
          //     perPage: 3,
          //   },
          // },
        }}
      >
        {highlights.map((highlight, index) => (
          <SplideSlide
            key={highlight.image}
            className="app-carousel flex flex-col items-center h-[30rem] rounded-2xl overflow-hidden"
          >
            <Image
              src={highlight.image}
              alt=""
              className="relative h-full"
            />
            <div className="absolute flex bottom-8 left-0 justify-between w-full items-center pr-8">
              <div className="px-10 py-4 bg-gradient-to-r from-background to-transparent">
                <h1 className="text-6xl text-primary dark:text-secondary">{highlight.title}</h1>
                <h2 className="text-3xl">{highlight.subtitle}</h2>
                <p className="text-lg">{highlight.description}</p>
              </div>
              <Button variant={varianteButton} className="h-14 w-fit text-xl text-background">{highlight.buttonText}</Button>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
