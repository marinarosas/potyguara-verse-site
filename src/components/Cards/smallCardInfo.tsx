import { FaMoneyBillWave, FaStar, FaWallet } from 'react-icons/fa'
import { RiSlideshow3Fill } from 'react-icons/ri'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import BrasaoPoty from '../../../public/brasao_preto.png'

export function CardSmallInfo() {
  const mainInfoDashboard = [
    {
      title: 'Ganhos totais',
      value: 'R$53.000,00',
      icon: <FaMoneyBillWave size={20} />,
    },
    {
      title: 'Nº de fãs',
      value: '67',
      smallValue: '+3',
      icon: <FaStar size={20} />,
    },

    {
      title: 'Potycoins',
      value: '1650',
      icon: (
        <Image
          src={BrasaoPoty}
          height={100}
          width={100}
          alt="Iamgem da moeda"
          className="w-6 h-auto"
        />
      ),
    },
    {
      title: 'Eventos feitos',
      value: '31',
      icon: <RiSlideshow3Fill size={20} />,
    },
    {
      title: 'Carteira',
      value: 'R$649,90',
      icon: <FaWallet size={20} />,
    },
  ]

  return (
    <div className="flex gap-4">
      {mainInfoDashboard.map((info) => {
        return (
          <Card
            key={info.title}
            className="relative w-full h-24 flex flex-col min-w-0 break-words bg-transparent drop-shadow-md rounded-2xl bg-clip-border border-2"
          >
            <CardContent className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <p className="mb-0 font-sans leading-normal text-sm">
                    {info.title}
                  </p>
                  <h5 className="mb-0 text-xl font-bold">{info.value}</h5>
                </div>
                <div className="px-3 text-right basis-1/3">
                  {/* <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-orange-logo to-green-neon"> */}
                  <div className="h-full flex justify-end items-start text-foreground opacity-85">
                    {info.icon}
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
