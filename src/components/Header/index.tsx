'use client'

import { useRouter } from 'next/navigation'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid'
import * as React from 'react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import LogoPotyguara from '../../../public/LogoRetangular.png'
import { MoveRight } from 'lucide-react'

const products = [
  {
    name: 'Steam',
    description: 'Loja de plataforma para download',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Meta Quest Store',
    description: 'Loja para o óculos quest',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
]
const callsToAction = [
  { name: 'Assita o trailer', href: '#', icon: PlayCircleIcon },
  { name: 'Fale conosco', href: '#', icon: PhoneIcon },
]

function classNames(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(' ')
}

export function Header() {
  const router = useRouter()

  const { setTheme } = useTheme()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // const scrollToSection = (sectionId: string) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  function handleNavigateToLoginPage() {
    router.push(`/sing-in`)
  }

  function handleNavigateToHomePage(path: string) {
    router.push(`/${path}`)
  }

  function handleNavigateToHome() {
    router.push(`/`)
  }

  return (
    <header className="h-20 bg-muted-foreground text-foreground">
      {/* WEB */}
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 h-20"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 h-20 items-center">
          <Image
            src={LogoPotyguara}
            alt="Logo Potyguara"
            height={140}
            width={140}
            onClick={() => handleNavigateToHome()}
          />
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="outline"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 border-0"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            {!mobileMenuOpen && (
              <Bars3Icon
                className="h-6 w-6 border-transparent hover:cursor-pointer"
                aria-hidden="true"
              />
            )}
          </Button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 h-20 items-center ">
          <a
            href="#homepage"
            className="text-sm font-semibold leading-6"
            onClick={() => {
              handleNavigateToHomePage('#homepage')
            }}
          >
            Home
          </a>
          <a
            href="#aboutus"
            className="text-sm font-semibold leading-6"
            onClick={() => {
              handleNavigateToHomePage('#aboutus')
            }}
          >
            Sobre nós
          </a>
          <a
            href="#ourpartnership"
            className="text-sm font-semibold leading-6"
            onClick={() => {
              handleNavigateToHomePage('#ourpartnership')
            }}
          >
            Nossos parceiros
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold leading-6"
            onClick={() => {
              handleNavigateToHomePage('#contact')
            }}
          >
            Contato
          </a>
          {/* <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6">
              Baixar plataforma
              <ChevronDownIcon
                className="h-5 w-5 flex-none"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden bg-muted-foreground rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 hover:text-background"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-foreground group-hover:bg-black">
                        <item.icon
                          className="h-6 w-6 text-background  group-hover:text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 ">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 hover:bg-gray-100 hover:text-primary"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover> */}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-4 h-20 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="lg:w-fit md:w-fit sm:w-fit"
                variant="outline"
                size="sm"
              >
                <SunIcon className="h-3 w-3 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-3 w-3 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-muted-foreground text-foreground"
            >
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            className="flex gap-2 text-sm font-semibold leading-6 hover:text-primary hover:cursor-pointer"
            onClick={() => handleNavigateToLoginPage()}
          >
            Log in <MoveRight size={18} strokeWidth={1.25} />
          </Button>
        </div>
      </nav>

      {/* MOBILE */}
      <Dialog
        as="div"
        className="lg:hidden bg-muted-foreground"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-muted-foreground text-foreground">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#homepage"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-background"
                  onClick={() => handleNavigateToHomePage('#homepage')}
                >
                  Home
                </a>
                <a
                  href="#aboutus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-background"
                  onClick={() => handleNavigateToHomePage('#aboutus')}
                >
                  Sobre nós
                </a>
                <a
                  href="#ourpartnership"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-background"
                  onClick={() => handleNavigateToHomePage('#ourpartnership')}
                >
                  Nosso parceiros
                </a>
                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-background"
                  onClick={() => handleNavigateToHomePage('#contact')}
                >
                  Contato
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-background">
                        Baixar plataforma
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none',
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="flex pt-4 justify-between">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:text-orange-md"
                  onClick={() => handleNavigateToLoginPage()}
                >
                  Log in
                </a>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-muted-foreground text-foreground"
                  >
                    <DropdownMenuItem onClick={() => setTheme('light')}>
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')}>
                      Dark
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
