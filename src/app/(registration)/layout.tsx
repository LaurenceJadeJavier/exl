"use client";

import React from "react";
import landing from "@assets/images/landing2.png";

type RegistationLayoutProps = {
  children: React.ReactNode;
};
export default function RegistationLayout({
  children,
}: RegistationLayoutProps) {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-full"
        style={{ backgroundImage: `url(${landing.src})` }}
      >
        <div className="flex items-center justify-center h-full">
          {children}
        </div>
      </div>
    </>
  );
}
