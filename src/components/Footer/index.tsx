'use client'

import { useRouter } from 'next/navigation'
import { RiInstagramFill, RiLinkedinBoxFill } from 'react-icons/ri'
import LogoPotyguara from '../../../public/LogoRetangular.png'
import Image from 'next/image'

export function Footer() {
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
    <div className="h-full md:h-60 lg:h-60 flex flex-col md:justify-between lg:justify-between gap-10 md:gap-0 lg:gap-0 bg-background items-center pl-2 md:pl-20 lg:pl-20 pr-2 md:pr-20 lg:pr-20">
      {/* Top part */}
      <div className="w-screen md:w-full lg:w-full flex flex-col md:flex-row lg:flex-row items-center pr-4">
        <div className="h-auto w-52 md:w-36 lg:w-36 col-span-1">
          <Image src={LogoPotyguara} alt="Logo Potyguara"/>
        </div>
        <nav className="col-span-5 flex justify-around w-screen flex-1 ml-4 md:ml-0 lg:ml-0 pl-2 md:pl-0 lg:pl-0 pr-2 md:pr-0 lg:pr-0">
          <a
            className="text-sm font-semibold leading-6 text-gray-900 hover:cursor-pointer"
            onClick={() => {
              handleNavigateToHomePage('#homepage')
            }}
          >
            Home
          </a>
          <a
            className="text-sm font-semibold leading-6 text-gray-900 hover:cursor-pointer"
            onClick={() => {
              handleNavigateToHomePage('#aboutus')
            }}
          >
            Sobre nós
          </a>
          <a
            className="text-sm font-semibold leading-6 text-gray-900 hover:cursor-pointer"
            onClick={() => {
              handleNavigateToHomePage('#ourpartnership')
            }}
          >
            Nossos parceiros
          </a>
          <a
            className="text-sm font-semibold leading-6 text-gray-900 hover:cursor-pointer"
            onClick={() => {
              handleNavigateToHomePage('#contact')
            }}
          >
            Contato
          </a>
        </nav>
        <div className="hidden md:block lg:block w-2/12"></div>
        <div className="hidden md:block lg:block col-span-2 justify-between w-1/12">
          <div className="flex">
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
      </div>

      {/* Bottom part */}
      <div className="w-full text-foreground items-center flex flex-col md:flex-row lg:flex-row pl-4 pr-4 md:pr-0 lg:pr-0 text-center md:text-left lg:text-left gap-10 md:gap-0 lg:gap-0">
        {/* Address */}
        <div className="w-full text-foreground">
          <h2 className="font-bold text-base">Matriz</h2>
          <h3>
            Av. Engenheiro Roberto Freire, 1962, Loja 13, Capim Macio - NatalRN.{' '}
            <br /> Cond. Seaway Shopping.
          </h3>
          <p className="hidden md:block lg:block text-xs w-full py-6">
            Copyright 2023 © Marina Jaudy - Todos os direitos reservados.
          </p>
        </div>

        {/* Powered by */}
        <div className="w-full md:w-3/12 lg:w-3/12 h-full flex flex-col justify-center md:justify-evenly lg:justify-evenly mr-4 md:mr-20 lg:mr-20">
          <h1 className="flex font-bold text-center justify-center md:justify-start lg:justify-start md:text-left lg:text-left">
            Powered by:
          </h1>
          <div className="text-base flex items-end pt-2 pb-2 justify-center md:justify-start lg:justify-start">
            <div className="h-auto w-1/3 md:w-1/2 lg:w-1/2">
              <img src="/logo 50 anos  roxo.png" alt="Logo Sebrae" />
            </div>
            <div className="h-auto w-1/3 md:w-1/2 lg:w-1/2">
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
    </div>
  )
}
