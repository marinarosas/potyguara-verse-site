"use client";

import { ReactNode } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { HeaderInside } from "@/components/Header/headerInside";
import { FooterInside } from "@/components/Footer/footerInside";
import { Toaster } from "@/components/ui/toaster";
import Loading from "./loading";

export default function Layout({ children }: { children: ReactNode }) {
  const { user } = useAuth();

  return (
    <>
      {!user?.id ? (
        <>
          <div className="flex flex-col antialiased bg-muted-foreground text-foreground min-h-full">
            <HeaderInside />
            <div className="flex-1">{children}</div>
            <Toaster />
            <FooterInside />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
