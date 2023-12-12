"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { inter } from "@/libs/fonts";
import Image from "next/image";
import Sidebar from "./Sidebar";

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const notLogin = pathname !== "/";

  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={"font-inter"}>
        {notLogin ? (
          <div className="flex h-screen">
            <div className=" w-1/5 ">
              <Sidebar />
            </div>
            <div></div>
          </div>
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
};

export default CustomLayout;
