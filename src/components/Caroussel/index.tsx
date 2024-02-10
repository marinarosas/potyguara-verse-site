"use client";

import React, { useEffect, useState } from "react";
import { Chrono } from "react-chrono";

export function Carrousel() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const items = [
    {
      title: "Atualmente",
      cardTitle: "Fase de execução",
      // url: "http://www.history.com",
      cardSubtitle: "Contruindo a plataforma",
      cardDetailedText: "Iniciando a produção do jogo de eventos online.",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "http://someurl/image.jpg",
      //   },
      // },
    },
    {
      title: "2023",
      cardTitle: "Startup",
      // url: "http://www.history.com",
      cardSubtitle: "Fase de consolidação",
      cardDetailedText: "O projeto virou uma empresa, Live Plus.",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "http://someurl/image.jpg",
      //   },
      // },
    },
    {
      title: "2022",
      cardTitle: "Fase de buscar investimento",
      // url: "http://www.history.com",
      cardSubtitle: "Edital Centelha",
      cardDetailedText:
        "Entramos no edital, onde fundamentamos e aprofundamos mais a plataforma como um negócio. Nosso projeto foi aprovado no edital Centelha do Sebrae e Sudene.",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "http://someurl/image.jpg",
      //   },
      // },
    },
    {
      title: "2021",
      cardTitle: "Fase de pesquisa",
      // url: "http://www.history.com",
      cardSubtitle: "Construindo a base",
      cardDetailedText:
        "Construção do projeto, documentações, pesquisas com usuários e UX/UI design.",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "http://someurl/image.jpg",
      //   },
      // },
    },
    {
      title: "2020",
      cardTitle: "Fase de ideação",
      // // url: "http://www.history.com",
      cardSubtitle: "Validando a idéia",
      cardDetailedText:
        "Iniciamos a idéia como um simples site e fomos conhecer nosso usuário através de pesquisas.",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "http://someurl/image.jpg",
      //   },
      // },
    },
  ];

  return (
    <div
      className="h-screen flex bg-background flex-col md:flex-row lg:flex-row spacing-y-10 md:hidden" 
      id="aboutus"
    >
      {/* Carrousel */}
      <div
        className="
        h-screen
      flex 
      flex-col 
      md:w-1/2
      lg:w-1/2
      pt-4
      bg-background
       "
      >
        {isClient && (
          <Chrono
            activeItemIndex={0}
            items={items}
            // verticalBreakPoint='768px'
            mode="VERTICAL_ALTERNATING"
            cardHeight="100vh"
            cardWidth="100vw"
            theme={{
              primary: "#F24F00",
              secondary: "#F24F00",
              cardBgColor: "#c4c4c4",
              titleColor: "#fff",
              titleColorActive: "#fff",
              cardSubtitleColor: "#000",
              cardTextColor: "#000",
              cardTitleColor: "#F24F00",
            }}
            itemWidth="2vw"
            fontSizes={{
              cardSubtitle: "0.85rem",
              cardText: "0.8rem",
              cardTitle: "1rem",
              title: "1rem",
            }}
          />
        )}
      </div>
    </div>
  );
}
