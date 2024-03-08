"use client";

import { useRouter } from "next/navigation";
import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";

export function FooterInside() {
  const router = useRouter();

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

  function handleNavigateToHomePage(path: string) {
    router.push(`/${path}`);
  }

  return (
    <div className="h-full flex bg-background  text-foreground items-center mx-8">
      <div className="flex">
        <div className="w-full text-foreground">
          <p className="hidden md:block lg:block text-xs w-full py-6">
            Copyright 2023 © Marina Jaudy - Todos os direitos reservados.
          </p>
        </div>
        <RiInstagramFill
          size={30}
          onClick={() => handleNavigateToInstaLink()}
          className="hover:cursor-pointer"
        />
        <RiLinkedinBoxFill
          size={30}
          onClick={() => handleNavigateToLinkedinLink()}
          className="hover:cursor-pointer"
        />
      </div>

      {/* Powered by */}
      <div className="w-full md:w-3/12 lg:w-3/12 h-full flex flex-col justify-center md:justify-evenly lg:justify-evenly mr-4 md:mr-20 lg:mr-20">
        <h1 className="flex font-bold text-center justify-center md:justify-start lg:justify-start md:text-left lg:text-left">
          Powered by:
        </h1>
        <div className="text-base flex items-end pt-2 pb-2 justify-center md:justify-start lg:justify-start">
          <div className="h-auto w-1/3">
            <img src="/logo 50 anos  roxo.png" alt="Logo Sebrae" />
          </div>
          <div className="h-auto w-1/3">
            <img src="/sudene.png" alt="Logo Sudene" />
          </div>
        </div>
        <div className="md:hidden lg:hidden col-span-2 flex justify-center gap-8 w-full">
          <RiInstagramFill
            size={30}
            onClick={() => handleNavigateToInstaLink()}
            className="hover:cursor-pointer"
          />
          <RiLinkedinBoxFill
            size={30}
            onClick={() => handleNavigateToLinkedinLink()}
            className="hover:cursor-pointer"
          />
        </div>
        <p className="md:hidden lg:hidden text-xs w-full py-6">
          Copyright 2023 © Marina Jaudy - Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
