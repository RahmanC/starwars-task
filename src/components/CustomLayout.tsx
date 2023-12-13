"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { inter } from "@/libs/fonts";
import Image from "next/image";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Provider } from "@/app/provider";

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const notLogin = pathname !== "/";

  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={"font-inter"}>
        <Provider>
          {notLogin ? (
            <div className="flex h-screen">
              <div className=" w-1/5 ">
                <Sidebar />
              </div>
              <div className="w-4/5 flex flex-col">
                <Navbar />
                <div className="w-full flex flex-1 p-10">{children}</div>
              </div>
            </div>
          ) : (
            <>{children}</>
          )}
        </Provider>
      </body>
    </html>
  );
};

export default CustomLayout;
