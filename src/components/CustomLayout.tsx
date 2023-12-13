"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { inter } from "@/libs/fonts";
import { Provider } from "@/app/provider";
import DashboardLayout from "./DashboardLayout";

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const notLogin = pathname !== "/";

  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={"font-inter"}>
        <Provider>
          {notLogin ? (
            <DashboardLayout>{children}</DashboardLayout>
          ) : (
            <>{children}</>
          )}
        </Provider>
      </body>
    </html>
  );
};

export default CustomLayout;
