"use client";

import React from "react";
import { Button } from "../../../components/ui/button";
import { SignIn } from "../../../lib/actions/auth/sign-in";

interface SignInButtonProps extends React.ComponentProps<typeof Button> {
  provider?: string; // Default to Google
  callbackUrl?: string; // Redirection après connexion
  label?: string; // Texte affiché
  className?: string; // Classe CSS
}

export const SignInButton: React.FC<SignInButtonProps> = ({
  provider = "google",
  callbackUrl = "/",
  label = "Se connecter",
  className,
  asChild,
  ...props

}) => {

  return (
    <Button
      asChild={asChild}

      onClick={() => SignIn(provider, callbackUrl)}


      className={`bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition ${className ?? ""}`}
      {...props}
    >
      {asChild ? props.children : label}
    </Button >
  );

};
