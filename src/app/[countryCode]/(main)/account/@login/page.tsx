import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Registrati",
  description: "Registra il tuo account di Orientando Capo Mannu",
}

export default function Login() {
  return <LoginTemplate />
}
