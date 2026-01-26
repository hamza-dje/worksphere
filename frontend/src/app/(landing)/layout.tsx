import Navbar from "@/components/navbar/landing/Navbar";
import React from "react";

export default function LandingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
