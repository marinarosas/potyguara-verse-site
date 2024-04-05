'use client'

import { useRouter } from 'next/navigation'
import { useListArtistAll } from '@/services/hooks/useListArtistAll'


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
    <div className="h-full px-8 py-6 space-y-6 pb-16 rotate-0 scale-100 transition-all">
      <CardSmallInfo />
      <div className="flex gap-4 flex-col lg:flex-row">
        <CardTips />
        <div className="flex w-full lg:w-1/2 gap-4">
          <CardMyAvatar />
          <CardMyStage />
        </div>
      </div>
    </div>
  )
}
