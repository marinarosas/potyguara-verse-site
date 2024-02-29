// "use client";

// import { SideBar } from "@/components/SideBar";
// import { ReactNode } from "react";
// import Loading from "./loading";
// // import { useAuth } from '@/contexts/AuthContext'

// export default function Layout({ children }: { children: ReactNode }) {
//   //   const { user } = useAuth()

//   return (
//     <>
//       <div className="flex flex-col h-screen">
//         <div className="w-full relative">
//           <SideBar />
//           {children}
//         </div>
//       </div>
//       {user.id ? (
//       <>
//         <div className='flex flex-col h-screen'>
//           <div className='w-full relative'>
//             <SideBar />

//             {children}
//           </div>
//         </div>
//       </>
//     ) : (
//       <Loading />
//     )}
//     </>
//   );
// }
"use client";

import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Header } from "../../components/Header/";
import { SideBar } from "../../components/SideBar/";

import { ReactNode } from "react";
// import { useAuth } from '@/contexts/AuthContext'
import Loading from "./loading";
import { HeaderSideBar } from "@/components/SideBar/headerSidebar";
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
        <HeaderSideBar/>
        <SideBar/> 
        <div className="h-screen pt-20 pl-0 lg:pl-64 transition-width duration-75">
        {children}
        </div>
      </div>
      {/* )} */}
    </>
  );
}
