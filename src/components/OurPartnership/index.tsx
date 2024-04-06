'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, EffectCoverflow } from 'swiper/modules'
import './styles.css'
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
  return (
    <>
      <div
        className="h-96 md:h-screen lg:h-screen bg-muted-foreground flex-col gap-4 items-center justify-center pt-10 -mb-20"
        id="ourpartnership"
        style={{
          backgroundImage: `url(/Waveosund.png)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: 'center',
        }}
      >
        <div className="h-96 md:h-screen lg:h-screen pl-6 md:pl-0 lg:pl-0">
          <h2 className="text-secondary text-2xl font-bold text-center pr-6">
            Nossos parceiros
          </h2>
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
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
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className=" text-foreground items-center justify-center h-fit">
                  <Image src={slide.image} alt="Logos" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
