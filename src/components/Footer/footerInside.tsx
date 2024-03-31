'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { RiInstagramFill, RiLinkedinBoxFill } from 'react-icons/ri'
import LogoSebrae from '../../../public/logo 50 anos  roxo.png'
import LogoSudene from '../../../public/sudene.png'
import LogoImd from '../../../public/metropoleIMDlogo.svg'
import LogoGameLab from '../../../public/LOGO VERT BRANCO@3x.png'

export function FooterInside() {
  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function handleNavigateToInstaLink() {
    window.open('https://www.instagram.com/_liveplus/', '_blank')
  }

  function handleNavigateToLinkedinLink() {
    window.open('https://www.linkedin.com/company/liveplusbr/', '_blank')
  }

  function handleNavigateToHomePage(path: string) {
    router.push(`/${path}`)
  }

  return (
    <footer className="h-16 flex bg-muted-foreground  text-foreground items-center justify-between px-8 border-t-2">
      <p className="text-xs w-1/3">
        Copyright 2023 ©Potyguara Verse - Todos os direitos reservados.
      </p>

      <div className="flex w-96 justify-between items-center">
        <div className="w-20">
          <Image src={LogoSebrae} alt="Logo Sebrae" height={100} width={100} />
        </div>
        <div className="w-20">
          <Image src={LogoSudene} alt="Logo Sudene" height={100} width={100} />
        </div>
        <div className="w-20">
          <Image
            src={LogoImd}
            alt="Logo Metorpole Digital"
            height={100}
            width={100}
          />
        </div>
        <div className="w-20">
          <Image
            src={LogoGameLab}
            alt="Logo GameLab"
            height={100}
            width={100}
          />
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
    </footer>
  )
}
