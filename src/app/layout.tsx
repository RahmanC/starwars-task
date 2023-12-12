import type { Metadata } from "next";

import "./globals.css";
import CustomLayout from "@/components/CustomLayout";

export const metadata: Metadata = {
  title: "StarWars",
  description: "Starwars dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CustomLayout>{children}</CustomLayout>;
}
