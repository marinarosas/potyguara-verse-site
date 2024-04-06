'use client'

import { useRouter } from 'next/navigation'
import { RiSlideshow3Fill } from 'react-icons/ri'
import { MdEdit } from 'react-icons/md'
import { useListArtistAll } from '@/services/hooks/useListArtistAll'
import { useEffect } from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { object } from 'zod'
import Image from 'next/image'
import QualquerCoisa from '../../../../public/BgSite.png'
import { CardSmallInfo } from '@/components/Cards/smallCardInfo'
import { CardTips } from '@/components/Cards/cardTips'
import { CardMyAvatar } from '@/components/Cards/cardMyAvatar'
import { CardMyStage } from '@/components/Cards/cardMyStage'
export default function Dashboard() {
  const router = useRouter()

  const { artists } = useListArtistAll()

  function handleNavigateToHomePage() {
    router.push(`/`)
  }

  function handleNavigateToSingupPageArtist() {
    router.push(`/singup-artist`)
  }

  function handleNavigateToSingupPageViewer() {
    router.push(`/singup-viewer`)
  }

  return (
    <div className="h-full px-8 py-6 space-y-6 pb-16">
      <CardSmallInfo />
      <div className="flex gap-4">
        <CardTips />
        <div className="flex w-1/2 gap-4">
          <CardMyAvatar />
          <CardMyStage />
        </div>
      </div>
    </div>
  )
}
