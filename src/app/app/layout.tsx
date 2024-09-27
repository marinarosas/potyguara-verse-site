'use client'

import { ReactNode, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { HeaderInside } from '@/components/Header/headerInside'
import { FooterInside } from '@/components/Footer/footerInside'
import { Toaster } from '@/components/ui/toaster'
import Loading from './loading'

export default function Layout({ children }: { children: ReactNode }) {
  const { user } = useAuth()

  return (
    <>
      {!user?.id ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="flex flex-col antialiased bg-muted-foreground text-foreground h-screen">
            <HeaderInside />
            <div className="flex flex-col flex-1">{children}</div>
            <Toaster />
            <FooterInside />
          </div>
        </>
      )}
    </>
  )
}
