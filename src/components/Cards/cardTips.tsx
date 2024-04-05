import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import QualquerCoisa from '../../../public/BgSite.png'

export function CardTips() {
  return (
    <Card className="flex w-full lg:w-1/2 h-1/2 break-words bg-transparent shadow-md rounded-2xl bg-clip-border border-2 relative overflow-hidden">
      <CardContent className="flex w-full items-center">
        {/* Left Side */}
        <div className="w-1/2 h-full p-6">
          <CardTitle>Dicas para o seu evento</CardTitle>
          <h5 className="font-bold text-sm py-2">O que você precisa?</h5>
          <CardDescription className="text-gray">
            Aqui você encontra dicas, novidades e outras perguntas sobre criar
            um evento.
          </CardDescription>
          <a
            className="absolute font-semibold leading-normal text-sm group text-slate-500 flex flex-1 h-fit bottom-8"
            // href="javascript:;"
          >
            Veja mais
            {/* <i className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i> */}
          </a>
        </div>

        {/* Image Side */}
        <div className="flex w-1/2 h-full">
          <Image
            className="w-full h-full"
            src={QualquerCoisa}
            alt="rocket"
            height={100}
            width={100}
          />
        </div>
      </CardContent>
    </Card>
  )
}
