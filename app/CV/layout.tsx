import React from 'react'
import { Providers } from "./providers";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: 'CV', 
    description: 'Welcom to my CV'
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        <main> 
        <Providers>
            {children}
        </Providers>
        </main>
        </>
    )
}
