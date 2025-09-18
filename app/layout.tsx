import type React from "react"
import type { Metadata } from "next"
import { Urbanist, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
});

export const metadata: Metadata = {
  title: "Achaí - Achados e Perdidos Universitários",
  description:
    "Conectamos estudantes para que seus pertences voltem rapidamente e em segurança. Sistema de achados e perdidos para universidades.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${urbanist.variable} ${dmSans.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
