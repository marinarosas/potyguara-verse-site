"use client";

import { useRouter } from "next/navigation";
import { z } from "zod";
import { useState } from "react";
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTheme } from "next-themes";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import Link from "next/link";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
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
} from "@/components/ui/dropdown-menu";
import { RxAvatar } from "react-icons/rx";
import { IoWalletOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { GiThreeFriends } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import CreateEventDialog, { eventFormSchema } from "../FormCreateEvent";

const products = [
  {
    name: "Steam",
    description: "Loja de plataforma para download",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Meta Quest Store",
    description: "Loja para o óculos quest",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
];
const callsToAction = [
  { name: "Assita o trailer", href: "#", icon: PlayCircleIcon },
  { name: "Fale conosco", href: "#", icon: PhoneIcon },
];

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Steam",
    href: "/docs/primitives/alert-dialog",
    description:
      "Entre em nossa comunidade steam e veja o que a galera ta falando do jogo.",
  },
  {
    title: "Meta Quest Store",
    href: "/docs/primitives/hover-card",
    description:
      "Nossa plataforma a clique de você, venha experimentar o outro lado do jogo.",
  },
  {
    title: "Loja parceiras",
    href: "/docs/primitives/progress",
    description:
      "Quem não que um desconto? Venha conhecer nossos parceiros de perto.",
  },
  {
    title: "Configuração",
    href: "/docs/primitives/tooltip",
    description:
      "Caso precise, configure a plataforma para melhor performance.",
  },
];

export function HeaderInside() {
  const router = useRouter();

  const { setTheme } = useTheme();

  const { toast } = useToast();

  const [openDialogCreateEvent, setOpenDialogCreateEvent] = useState(false);

  const formEvent = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      eventdata: "",
      nameevent: "",
      timeevent: "",
      durantionevent: "",
      price: "",
      description: "",
      statuspayment: false,
    },
  });

  function handleNavigateToLoginPage() {
    router.push(`/app/login-page`);
  }

  function handleNavigateToHomePage() {
    router.push(`/`);
  }

  function handleNavigateToMyEventsPage() {
    router.push(`/app/my-events`);
  }

  function handleNavigateToDashboardPage() {
    router.push(`/app/dashboard`);
  }

  return (
    <header className="bg-background h-16 w-full flex items-center justify-between px-8 z-30 border-b-2">
      {/* Logo side */}
      <div className="flex items-center justify-start">
        {/* Logo */}
        <div className="h-auto w-24 hover:cursor-pointer ">
          <img
            src="/LogoRetangular.png"
            alt="Logo Potyguara"
            onClick={() => handleNavigateToHomePage()}
          />
        </div>
        <NavigationMenu className="pl-8">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/app/dashboard" onClick={()=>{handleNavigateToDashboardPage()}} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Ínicio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Meus eventos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Eventos
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Crie seus eventos em poucos cliques e conquiste uma
                          plateia de outro mundo!
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <Dialog
                    open={openDialogCreateEvent}
                    onOpenChange={setOpenDialogCreateEvent}
                  >
                    <DialogTrigger asChild>
                      <ListItem
                        title="Crie seu evento"
                        onClick={() => {
                          formEvent.reset();
                          setOpenDialogCreateEvent(true);
                        }}
                      >
                        Dê vida a seu avatar, construa seu palco e preencha o
                        formulário e seu evento estará pronto para começar.
                      </ListItem>
                    </DialogTrigger>
                    <DialogOverlay className="bg-background opacity-90" />
                    <CreateEventDialog
                      formEvent={formEvent}
                      setOpenDialogCreateEvent={setOpenDialogCreateEvent}
                    />
                  </Dialog>

                  <ListItem
                    onClick={() => handleNavigateToMyEventsPage()}
                    title="Central de eventos"
                  >
                    Gerencie seus eventos e acompanhe os status da sua
                    monetização.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Dicas">
                    Dicas de como criar seu eventos, tutorial e muito mais...
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Meu avatar
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Meu Palco
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Carteira
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Outras opções</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Coins side */}
      <div className="flex items-center justify-end gap-4 w-full">
        {/* Create Event */}
        <Dialog
          open={openDialogCreateEvent}
          onOpenChange={setOpenDialogCreateEvent}
        >
          <DialogTrigger asChild>
            <Button
              className="text-white text-xs py-2.5 text-center items-center"
              onClick={() => {
                formEvent.reset();
                setOpenDialogCreateEvent(true);
              }}
            >
              Criar evento
            </Button>
          </DialogTrigger>
          <DialogOverlay className="bg-background opacity-90" />
          <CreateEventDialog
            formEvent={formEvent}
            setOpenDialogCreateEvent={setOpenDialogCreateEvent}
          />
        </Dialog>

        {/* Dark/Light Mode */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Menu profile */}
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
          <DropdownMenuContent className="w-56 mr-2">
            <DropdownMenuLabel className="flex justify-between items-center">
              Minha conta
              <div className="flex justify-between items-center gap-1">
                <img
                  src="/brasao_preto.png"
                  alt="Iamgem da moeda"
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
            <DropdownMenuItem>
              Sair
              {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
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
  );
});
ListItem.displayName = "ListItem";
