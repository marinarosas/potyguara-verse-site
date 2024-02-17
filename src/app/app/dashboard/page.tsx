"use client";

import { SideBar } from "@/components/SideBar";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  function handleNavigateToHomePage() {
    router.push(`/`);
  }

  function handleNavigateToSingupPageArtist() {
    router.push(`/app/singup-artist`);
  }

  function handleNavigateToSingupPageViewer() {
    router.push(`/app/singup-viewer`);
  }

  return (
   <>
   <SideBar/>
   </>
  );
}
