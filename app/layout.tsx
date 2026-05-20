import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import ClickSpark from "@/components/click-spark"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Gittiom | Technology, Platforms & Innovation",
  description: "Gittiom is a leading global technology company building the future through social platforms, payment systems, and smart digital infrastructure. Like Apple, Google, and Meta — Gittiom powers the next generation of connected experiences.",
  keywords: ["Gittiom", "technology company", "social platform", "payment platform", "digital infrastructure", "fintech", "innovation", "tech conglomerate"],
  openGraph: {
    title: "Gittiom | Technology, Platforms & Innovation",
    description: "Gittiom is a leading global technology company building the future through social platforms, payment systems, and smart digital infrastructure.",
    url: "https://gittiom.com",
    siteName: "Gittiom",
    type: "website",
    images: [
      {
        url: "https://gittiom.com/api/og",
        width: 1200,
        height: 630,
        alt: "Gittiom - Technology, Platforms & Innovation",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gittiom | Technology, Platforms & Innovation",
    description: "Gittiom is a leading global technology company building the future through social platforms, payment systems, and smart digital infrastructure.",
    images: ["https://gittiom.com/api/og"],
  },
}

export const viewport: Viewport = {
  themeColor: "#AFFF00",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ClickSpark
          sparkColor="#AFFF00"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={400}
          easing="ease-out"
        >
          <LenisProvider>{children}</LenisProvider>
        </ClickSpark>
        <Analytics />
      </body>
    </html>
  )
}
