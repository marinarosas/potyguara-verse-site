"use client";

import { ReactNode } from "react";
// import { useAuth } from '@/contexts/AuthContext'
// import Loading from "./loading";
import { HeaderInside } from "@/components/Header/headerInside";
import { FooterInside } from "@/components/Footer/footerInside";
import { Toaster } from "@/components/ui/toaster";
// import { theme } from '@/styles/theme'

export default function Layout({ children }: { children: ReactNode }) {
  // const { user } = useAuth()

  // const bgColor = useColorModeValue(
  //   theme.colors.bgSidebarHeader.light,
  //   theme.colors.bgSidebarHeader.dark,
  // )

  return (
    <>
      {/* {!user?.id ? (
        <>
          <Loading />
        </>
      ) : ( */}
       <div>
        <HeaderInside/>
        {children}
        <Toaster/>
        <FooterInside/>
      </div>
      {/* )} */}
    </>
  );
}
