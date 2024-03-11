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
    <div className="h-10 flex bg-background  text-foreground items-center justify-between px-8">
      <p className="text-xs w-1/3">
        Copyright 2023 ©Potyguara Verse - Todos os direitos reservados.
      </p>

      <div className="flex h-16 w-96 justify-between items-center">
        <div className="w-20">
          <img src="/logo 50 anos  roxo.png" alt="Logo Sebrae" />
        </div>
        <div className="w-20">
          <img src="/sudene.png" alt="Logo Sudene" />
        </div>
        <div className="w-20">
          <img src="/metropoleIMDlogo.svg" alt="Logo Metorpole Digital" />
        </div>
        <div className="w-20">
          <img src="/LOGO VERT BRANCO@3x.png" alt="Logo GameLab" />
        </div>
      </div>
      <div className="flex w-1/3 justify-end">
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
    </div>
  );
}
