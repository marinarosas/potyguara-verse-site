"use client";

import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiOutlineDashboard } from "react-icons/ai";
import { RxCalendar } from "react-icons/rx";
import { HiOutlineInboxIn } from "react-icons/hi";
import { RxAvatar } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { PiMicrophoneStage } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { FiHelpCircle } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { ReactNode } from "react";
import { CiStar } from "react-icons/ci";

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

export function HeaderSideBar() {
  const router = useRouter();

  const { setTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const scrollToSection = (sectionId: string) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  function handleNavigateToLoginPage() {
    router.push(`/app/login-page`);
  }

  function handleNavigateToHomePage() {
    router.push(`/`);
  }

  return (
    <header className="bg-background fixed w-full flex items-center justify-between pl-12 z-30">
      {/* Logo side */}
      <div className="flex items-center justify-start">
        {/* Button Mobile Menu */}
        <button
          id="toggleSidebarMobile"
          aria-expanded="true"
          aria-controls="sidebar"
          className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
        >
          <svg
            id="toggleSidebarMobileHamburger"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            id="toggleSidebarMobileClose"
            className="w-6 h-6 hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Logo */}
        <div className="h-auto w-32 hover:cursor-pointer ">
          <img
            src="/LogoRetangular.png"
            alt="Logo Potyguara"
            onClick={() => handleNavigateToHomePage()}
          />
        </div>
        <form action="#" method="GET" className="hidden lg:block lg:pl-20">
          <label
            // for="topbar-search"
            className="sr-only"
          >
            Procurar
          </label>
          <div className="mt-1 relative lg:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              name="email"
              id="topbar-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
              placeholder="Procurar"
            />
          </div>
        </form>
      </div>

      {/* Coins side */}
      <div className="flex items-center">
        <button
          id="toggleSidebarMobileSearch"
          type="button"
          className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
        >
          <span className="sr-only">Procurar</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div className="flex justify-between w-20 items-center px-2">
          <img
            src="/brasao_preto.png"
            alt="Iamgem da moeda"
            className="w-auto h-10"
          />
          <h3>1650</h3>
        </div>
        <Button className="hidden sm:inline-flex ml-5 text-white text-sm px-5 py-2.5 text-center items-center mr-3">
          Criar evento
        </Button>
      </div>
    </header>
  );
}
