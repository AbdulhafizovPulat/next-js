"use client";
import Script from "next/script";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      {children}
      <Script id="show-banner">{`console.log('script loaded');`}</Script>
    </NextThemesProvider>
  );
}
