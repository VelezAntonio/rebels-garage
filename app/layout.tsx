import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "The Rebels Garage - Expert Vehicle Bodywork & Repairs",
  description:
    "Expert bodywork and repairs for cars, UTVs, box trucks, RVs, Can-Ams, and RZRs. From dents to full collision repairs, we ensure top-quality service.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
