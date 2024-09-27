'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ChartPieIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { useTheme } from 'next-themes'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { RxAvatar } from 'react-icons/rx'
import { IoWalletOutline } from 'react-icons/io5'
import { GoGear } from 'react-icons/go'
import { IoIosArrowDown } from 'react-icons/io'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import LogoPotyguara from '../../../public/LogoRetangular.png'
import BrasaoPreto from '../../../public/brasao_preto.png'
import { NavigationMenuHeader } from './NavigationMenu'
import { useAuth } from '@/contexts/AuthContext'
import { EventCreateDialog } from '../TableEvents/event-create-dialog'
import { Plus } from 'lucide-react'

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

export function HeaderInside() {
  const router = useRouter()
  const { user, signOut } = useAuth()

  const { setTheme } = useTheme()

  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false)

  function handleNavigateToLoginPage() {
    router.push(`/app/login-page`)
  }

  function handleNavigateToHomePage() {
    router.push(`/`)
  }

  return (
    <header className="min-h-16 w-full flex items-center justify-between px-8 border-b-2">
      {/* Logo side */}
      <div className="flex items-center justify-start">
        {/* Logo */}
        <div className="h-auto w-24 hover:cursor-pointer ">
          <Image
            src={LogoPotyguara}
            height={100}
            width={100}
            alt="Logo Potyguara"
            onClick={() => handleNavigateToHomePage()}
          />
        </div>
        <NavigationMenuHeader />
      </div>

      {/* Coins side */}
      <div className="flex items-center justify-end gap-4 w-full">
        <form className="flex items-center justify-between gap-2">
          <div></div>

          {user.role === 'ARTIST' && (
            <Dialog
              open={isCreateEventOpen}
              onOpenChange={setIsCreateEventOpen}
            >
              <DialogTrigger asChild>
                <Button type="button" variant="default">
                  <Plus className="mr-2 h-4 w-4" />
                  Criar Evento
                </Button>
              </DialogTrigger>

              <EventCreateDialog setIsCreateEventOpen={setIsCreateEventOpen} />
            </Dialog>
          )}
        </form>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-1">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <IoIosArrowDown size={18} color="#fff" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-2 bg-muted-foreground text-foreground">
            <DropdownMenuLabel className="flex justify-between items-center">
              {user.name}
              {/* Minha conta */}
              <div className="flex justify-between items-center gap-1">
                <Image
                  src={BrasaoPreto}
                  alt="Iamgem da moeda"
                  height={100}
                  width={100}
                  className="w-6 h-auto"
                />
                <h3 className="text-sm">1650</h3>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="gap-2">
                <RxAvatar size={18} />
                Perfil
                {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <IoWalletOutline size={18} />
                Carteira
                {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <GoGear size={18} />
                Configuração
                {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Meus amigos</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Primeiro amigo</DropdownMenuItem>
                    <DropdownMenuItem>Segundo amigo</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  Convide um amigo
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Email</DropdownMenuItem>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                Novo evento
                <DropdownMenuShortcut>⌘+E</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ajuda</DropdownMenuItem>
            <DropdownMenuItem>Termo de uso</DropdownMenuItem>
            <DropdownMenuItem disabled>
              Política de privacidade
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={signOut}>
              Sair
              {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
