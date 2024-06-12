'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { AppProvider } from '@/contexts'
import { SWRConfig } from 'swr'
import { poty } from '@/services/api'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Potyguara Verse</title>

        <link rel="icon" href="favicon.ico" sizes="any" type="image/svg+xml" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/gilroy/Gilroy-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/gilroy/Gilroy-Medium.ttf"
          as="font"
          crossOrigin=""
        /> */}
      </head>
      <body className={inter.className}>
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SWRConfig
              value={{
                fetcher: (url) => poty.get(url).then((res) => res.data),
              }}
            >
              {children}
            </SWRConfig>
            <Toaster />
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  )
}
