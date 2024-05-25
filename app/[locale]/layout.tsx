import "@/app/globals.css";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Weather",
  description: "A weather app built with Next.js and next-intl",
};

import React from "react";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <html lang={locale}>
        <body className="...">
          <Header />
          {children}
        </body>
      </html>
    </>
  );
}
