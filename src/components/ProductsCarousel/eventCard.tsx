'use client'
import { IEventShow } from '@/types/eventShow'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import FotoBanda from '../../../public/fotoGuitaura.jpg'
import { SplideSlide } from '@splidejs/react-splide'
import { formatDate } from '@/utils/DateFormatter'
import { priceFormatter } from '@/utils/PriceFormatter'

interface Props {
  event: IEventShow
}

export function EventCard({ event }: Props) {
  return (
    <SplideSlide className="bg-white bg-opacity-10 text-white rounded-t-lg flex flex-col max-w-76 w-76 h-80 ustify-center items-center border-2 border-blue-600">
      <Image
        className="w-60 rounded-t-lg"
        src={FotoBanda}
        alt={`Foto ${event.title}`}
      />
      <div className="w-full p-4">
        <h5 className="text-xl w-full font-bold tracking-tight text-primary border-2 border-yellow-500">
          {event.title}
        </h5>
        <p className="text-lg w-full font-light tracking-tight text-secondary-100 border-2 border-yellow-500">
          {event.content}
        </p>
        <div className="flex w-full">
          <p className="font-normal w-full text-gray-700 dark:text-gray-400 text-justify border-2 border-yellow-500">
            {formatDate(event.eventDate)}
          </p>
          <p className="font-normal w-full text-gray-700 dark:text-gray-400 text-justify border-2 border-yellow-500">
            {event.eventTime}h
          </p>
        </div>
        <p className="font-normal w-full text-gray-700 dark:text-gray-400 text-justify border-2 border-yellow-500">
          {priceFormatter.format(event.price)}
        </p>
        <Button
          className="lg:hidden"
          // onClick={handleNextSlide}
          variant="secondary"
        >
          Comprar ingresso
        </Button>
      </div>
    </SplideSlide>
  )
}
