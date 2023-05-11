"use client"
import './globals.css'
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/footer";
import { Lato } from 'next/font/google';
import {AuthContextProvider} from "@/app/context/auth-context";

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
      <AuthContextProvider >
        <Navbar/>
        <main className={"antialiased relative " + lato.className}>
          {children}
        </main>
        <Footer/>
      </AuthContextProvider>
      </body>
    </html>
  )
}
