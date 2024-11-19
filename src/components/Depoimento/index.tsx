'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, EffectCoverflow } from 'swiper/modules'
import './styles.css'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import LogoImd from '../../../public/1A-Primaria-Gradiente.svg'
import LogoAndrea from '../../../public/logoandrea.png'
import LogoGameLab from '../../../public/LOGO VERT BRANCO@3x.png'
import LogoSebrae from '../../../public/logo 50 anos  roxo.png'
import LogoSudene from '../../../public/sudene.png'
import Image from 'next/image'

const slides = [
  // {
  //   image: BesouroLogo,
  //   // title: "Besouro Cintilante",
  //   // subtitle: 'É inegociável o cumprimento da regulação e de todos os nossos contratos e compromissos firmados.',
  // },
  {
    image: LogoImd,
    // title: "Metrópole Digital - IMD",
    // subtitle: 'O sucesso é uma via de mão dupla, nossos parceiros e colaboradores são chave para o nosso crescimento.',
  },
  {
    image: LogoAndrea,
    // title: "Andrea Arteterapeuta",
    // subtitle: 'A diversidade enriquece ambientes e as pessoas são o nosso maior capital',
  },
  {
    image: LogoGameLab,
    // title: "Game Lab",
    // subtitle: 'Proatividade, disposição e desenvoltura para resolver problemas.',
  },
  {
    image: LogoSebrae,
    // title: "Sebrae RN",
    // subtitle: 'Estar aberto para enxergar novas perspectivas, buscar diferentes soluções e protagonizar mudanças.',
  },
  {
    image: LogoSudene,
    // title: "Sudene",
    // subtitle: 'Humildade para entender que se pode aprender sempre mais e ousadia para buscar a evolução.',
  },
]

export default function OurPartnership() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="h-screen bg-background flex flex-col gap-4 border-2 border-orange-logo"
      id="ourpartnership"
    >
      <div
        className="border-2 border-green-neon"
        style={{
          backgroundImage: `url(/Waveosund.png)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: 'center',
        }}
      >
        <h2
          className="
        p-4 
        pl-10 
        text-green-neon 
        text-2xl 
        font-bold 
        text-center
        "
        >
          Nossos parceiros
        </h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          loop={true}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="text-foreground items-center justify-center">
                <Image src={slide.image} alt="Logos" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ReactPlayer
        className="h-screen w-40 sm:w-40 md:w-40 lg:w-full"
        height="full"
        width="100%"
        url="https://youtu.be/v-M28eX_WvY"
        controls={isHovered}
        playing={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  )
}
