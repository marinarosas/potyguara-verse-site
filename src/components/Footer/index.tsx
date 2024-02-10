"use client";

import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  function handleNavigateToInstaLink() {
    window.open("https://www.instagram.com/_liveplus/", "_blank");
  }

  function handleNavigateToLinkedinLink() {
    window.open("https://www.linkedin.com/company/liveplusbr/", "_blank");
  }

  return (
    <div className="h-60 w-full flex flex-col justify-between bg-background items-center pl-20 pr-20">
      {/* Top part */}
      <div className="w-full flex items-center pr-4">
        <div className="h-auto w-36 col-span-1">
          <img src="/LogoRetangular.png" alt="Logo Potyguara" />
        </div>
        <nav className="col-span-5 flex justify-around flex-1">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
            // onClick={() => scrollToSection("homepage")}
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
            // onClick={() => scrollToSection("aboutus")}
          >
            Sobre nós
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
            // onClick={() => scrollToSection("ourpartnership")}
          >
            Nossos parceiros
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
            // onClick={() => scrollToSection("contact")}
          >
            Contato
          </a>
        </nav>
        <div className="w-4/12"></div>
        <div className="col-span-2 flex justify-around w-1/12">
          <RiInstagramFill
            size={30}
            onClick={() => handleNavigateToInstaLink()}
          />
          <RiLinkedinBoxFill
            size={30}
            onClick={() => handleNavigateToLinkedinLink()}
          />
        </div>
      </div>

      {/* Bottom part */}
      <div className="w-full text-foreground items-center flex pl-4">
        {/* Address */}
        <div className="w-full text-foreground">
          <h2 className="font-bold text-base">Matriz</h2>
          <h3>
            Av. Engenheiro Roberto Freire, 1962, Loja 13, Capim Macio - NatalRN.{" "}
            <br /> Cond. Seaway Shopping.
          </h3>
          <p className="text-xs w-full py-6">
            Copyright 2023 © Marina Jaudy - Todos os direitos reservados.
          </p>
        </div>

        {/* Powered by */}
        <div className="w-3/12 h-full flex flex-col justify-evenly">
          <h1 className="flex font-bold">Powered by:</h1>
          <div className="text-base flex items-end pt-2 pb-2">
            <div className="h-auto w-1/2">
              <img src="/logo 50 anos  roxo.png" alt="Logo Sebrae" />
            </div>
            <div className="h-auto w-1/2">
              <img src="/sudene.png" alt="Logo Sudene" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
