// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import LogoImd from '../../../public/1A-Primaria-Gradiente.svg'
import LogoAndrea from '../../../public/logoandrea.png'
import LogoGameLab from '../../../public/LOGO VERT BRANCO@3x.png'
import LogoSebrae from '../../../public/logo 50 anos  roxo.png'
import LogoSudene from '../../../public/sudene.png'
import { useEffect, useRef, useState } from "react";

import { FaChevronDown, FaChevronRight, FaChevronLeft  } from "react-icons/fa";

import { Button } from '../ui/button'
import Image from "next/image";

const carouselService = [
  {
    srcImage: LogoImd,
    altImage: "DevApp",
    title: "Desenvolvimento de",
    blueTitle: "Apps",
    description:
      "Melhor empresa de desenvolvimento de aplicativos. Impulsione a eficiência operacional da sua empresa com aplicativos altamente interativos e inovadores.",
    positionImage: "bottom-0",
    positionImageMobile: "-bottom-44",
  },
  {
    srcImage: LogoAndrea,
    altImage: "DevSafe",
    title: "Segurança",
    blueTitle: "Cibernética",
    description:
      "Proteja-se com as melhores tecnologias de segurança cibernética. Fornecemos soluções robustas para proteger seus dados críticos e recursos de TI.",
    positionImage: "-top-16",
    positionImageMobile: "-top-64",
  },
  {
    srcImage: LogoGameLab,
    altImage: "DevWeb",
    title: "Desenvolvimento",
    blueTitle: "Web",
    description:
      "Um time profissional de design de sites e plataformas web, oferecendo sites e soluçõesde alta qualidade, fáceis de usar e responsivos.",
    positionImage: "top-0",
    positionImageMobile: "top-0",
  },
  {
    srcImage: LogoSebrae,
    altImage: "DevUXUI",
    title: "UX /",
    blueTitle: "UI Design",
    description:
      "Desenvolvemos aplicações pensadas na experiência do usuário com um layout cativante para representar artisticamente o conceito da sua marca.",
    positionImage: "top-0",
    positionImageMobile: "top-0",
  },
  {
    srcImage: LogoSudene,
    altImage: "DevMktDigital",
    title: "Marketing",
    blueTitle: "Digital",
    description:
      "Estabelecemos a presença online da marca com ferramentas de trabalho comprovadas. Modernize sua empresa com as soluções de Marketing da Interas.",
    positionImage: "bottom-0",
    positionImageMobile: "-bottom-24",
  },
]

export default function ProductCategory() {
  const splideRef = useRef<Splide | null>(null)

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const handleNextSlide = () => {
    const splideInstance = splideRef.current?.splide

    if (splideInstance) {
      splideInstance.go('+1')
    }
  }

  const handlePrevSlide = () => {
    const splideInstance = splideRef.current?.splide

    if (splideInstance) {
      splideInstance.go('-1')
    }
  }

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 900)
//     };

//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   }, [])

  return (
    <div id="servicos" className="h-full p-5 gap-10 flex flex-col items-center">
      <h1 className="hidden lg:block title text-center font-bold text-primary-800">
        O que podemos fazer pelo<br />seu negócio?
      </h1>
      <h3 data-aos="fade-up" data-aos-duration="1500" className="hidden lg:block textmin text-secondary-100 font-light text-center">
        é mais do que uma pergunta é o convite para transformar ideias em realidade<br />e impulsionar o seu sucesso online
      </h3>
      <h1 className="lg:hidden subtitle text-center font-bold text-primary-800">
        O que podemos fazer pelo seu negócio?
      </h1>
      <h3 data-aos="fade-up" data-aos-duration="1500" className="lg:hidden textmin text-secondary-100 font-light text-justify">
        é mais do que uma pergunta é o convite para transformar ideias em realidade e impulsionar o seu sucesso online
      </h3>
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="500"
        data-aos-offset="0"
        className="h-auto lg:w-[160vh] flex flex-row justify-center items-center">
        <Button onClick={handlePrevSlide} variant="ghost" className="hidden lg:block">
          <FaChevronLeft color="#0061FE" size="15px" />
        </Button>
        <Splide
          ref={splideRef}
          options={{
            rewind: true,
            height: '32em',
            perPage: isMobile ? 1 : 3,
            drag: isMobile ? false : true,
            wheel: false,
            autoplay: false,
            Button: true,
            arrow: true,
            pagination: false,
            direction: isMobile ? 'ttb' : 'ltr',
          }}
        >
          {carouselService.map((item, index) => (
            <SplideSlide key={index} className="flex flex-row w-full h-auto justify-center items-center">
              <div
                className="max-w-sm bg-white h-min-10 border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <Image className="rounded-t-lg" src={item.srcImage} alt={item.altImage} />
                </a>
                <div className="flex flex-col lg:h-48 h-56 justify-center items-center p-5">
                  <a href="#" className="flex flex-row w-full gap-2 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item.title}</h5>
                    <h5 className="mb-2 text-2xl font-light tracking-tight text-secondary-100">{item.blueTitle}</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                    {item.description}
                  </p>
                  <Button className="lg:hidden" onClick={handleNextSlide} variant="secondary">
                    <FaChevronDown size="15px" />
                  </Button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
        <Button onClick={handleNextSlide} variant="ghost" className="hidden lg:block">
          <FaChevronRight color="#0061FE" size="15px" />
        </Button>
      </div>
    </div>
  );
}