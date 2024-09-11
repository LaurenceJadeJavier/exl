"use client";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["vietnamese"] });

export default function FontProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={montserrat.className}>{children}</div>;
}
