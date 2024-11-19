// @ts-ignore
import { Splide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import LogoImd from '../../../public/1A-Primaria-Gradiente.svg'
import LogoAndrea from '../../../public/logoandrea.png'
import LogoGameLab from '../../../public/LOGO VERT BRANCO@3x.png'
import LogoSebrae from '../../../public/logo 50 anos  roxo.png'
import LogoSudene from '../../../public/sudene.png'
import PotyCoin from '../../../public/brasao_color.png'
import { useEffect, useRef, useState } from 'react'

import { FaChevronDown, FaChevronRight, FaChevronLeft } from 'react-icons/fa'

import { Button } from '../ui/button'
import { EventCard } from './eventCard'
import { useListEventsAll } from '@/services/hooks/events/useListEventsAll'

const carouselService = [
  {
    srcImage: PotyCoin,
    altImage: 'DevApp',
    title: 'Desenvolvimento de',
    blueTitle: 'Apps',
    description:
      'Melhor empresa de desenvolvimento de aplicativos. Impulsione a eficiência operacional da sua empresa com aplicativos altamente interativos e inovadores.',
    positionImage: 'bottom-0',
    positionImageMobile: '-bottom-44',
  },
  {
    srcImage: PotyCoin,
    altImage: 'DevSafe',
    title: 'Segurança',
    blueTitle: 'Cibernética',
    description:
      'Proteja-se com as melhores tecnologias de segurança cibernética. Fornecemos soluções robustas para proteger seus dados críticos e recursos de TI.',
    positionImage: '-top-16',
    positionImageMobile: '-top-64',
  },
  {
    srcImage: PotyCoin,
    altImage: 'DevWeb',
    title: 'Desenvolvimento',
    blueTitle: 'Web',
    description:
      'Um time profissional de design de sites e plataformas web, oferecendo sites e soluçõesde alta qualidade, fáceis de usar e responsivos.',
    positionImage: 'top-0',
    positionImageMobile: 'top-0',
  },
  {
    srcImage: PotyCoin,
    altImage: 'DevUXUI',
    title: 'UX /',
    blueTitle: 'UI Design',
    description:
      'Desenvolvemos aplicações pensadas na experiência do usuário com um layout cativante para representar artisticamente o conceito da sua marca.',
    positionImage: 'top-0',
    positionImageMobile: 'top-0',
  },
  {
    srcImage: PotyCoin,
    altImage: 'DevMktDigital',
    title: 'Marketing',
    blueTitle: 'Digital',
    description:
      'Estabelecemos a presença online da marca com ferramentas de trabalho comprovadas. Modernize sua empresa com as soluções de Marketing da Interas.',
    positionImage: 'bottom-0',
    positionImageMobile: '-bottom-24',
  },
]

export default function ProductCarouselLine() {
  const splideRef = useRef<Splide | null>(null)

  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [isMobile, setIsMobile] = useState('')

  const { events, error, isLoading, mutateEvents } = useListEventsAll()

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
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="500"
      data-aos-offset="0"
      className="flex flex-col gap-2 justify-center items-center"
    >
      <h1 className="w-full text-3xl text-white font-bold border-2 border-red-800">
        Eventos
      </h1>
      <Splide
        ref={splideRef}
        options={{
          rewind: true,
          // height: '32em',
          perPage: isMobile ? 1 : 3,
          drag: !isMobile,
          wheel: false,
          autoplay: false,
          // Button: true,
          // arrow: true,
          arrows: false,
          pagination: false,
          direction: isMobile ? 'ttb' : 'ltr',
        }}
      >
        <div className="flex gap-8 border-2 border-white">
          {events?.events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Splide>
    </div>
  )
}
