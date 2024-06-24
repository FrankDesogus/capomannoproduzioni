
import { Metadata } from "next"


import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import React from "react"
import PasswordProtectedContent from "./statemanage"
import Script from "next/script"
import { Head } from "next/document"
import ClientOnlyComponents from "./gdpr"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {props.children}      
      <Footer />
      {/* Inserisci il componente client-specific */}
      <ClientOnlyComponents />
    </>
  );
}

