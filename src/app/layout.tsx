import type { Metadata } from "next";
import { inter } from "@/libs/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "StarWars",
  description: "Starwars dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={"font-inter"}>{children}</body>
    </html>
  );
}
