"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  const [menuExpanded, setMenuExpanded] = useState<boolean>(false);
  const responsiveMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (path === "/client") {
      document.body.classList.add("role-client");
    } else {
      document.body.classList.remove("role-client");
    }
  }, [path]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        responsiveMenuRef.current &&
        !responsiveMenuRef.current.contains(e.target as Node)
      ) {
        setMenuExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 right-0 left-0 z-10 h-0">
      <header className="w-full py-4 shadow-[0_0_27px_rgba(0,0,0,0.08)] rounded-b-[36px] flex justify-between px-[140px] max-lg:px-[60px] max-sm:px-6 z-10 sticky top-0 right-0 left-0 bg-white">
        {/* Logo */}
        <div className="flex gap-3.5 items-center">
          <Image src="/logo.svg" width={46} height={40} alt="Logo" priority />
          <span className="font-bold font-primary bg-gradient-to-r from-green to-blue bg-clip-text text-transparent text-[27px] max-sm:hidden">
            Work
            <span className="font-black font-primary text-transparent">
              Spher
            </span>
          </span>
        </div>
        {/* Navigation buttons */}
        <div className="flex items-center gap-10 [&>a]:font-primary [&>a]:text-lg max-xl:hidden">
          <Link
            href={"/freelancer"}
            className={`${
              path === "/freelancer" ? "text-green font-bold" : "text-black"
            } relative`}
          >
            I want to work
            <span
              className="absolute top-[48px] -left-0.5 -right-0.5 h-1.5 rounded-t-full bg-primary"
              style={{
                display: `${path === "/freelancer" ? "initial" : "none"}`,
              }}
            />
          </Link>
          <Link
            href={"/client"}
            className={`${
              path === "/client" ? "font-bold text-blue" : "text-black"
            } relative`}
          >
            I want to hire
            <span
              className="absolute top-[48px] -left-0.5 -right-0.5 h-1.5 rounded-t-full bg-primary"
              style={{
                display: `${path === "/client" ? "initial" : "none"}`,
              }}
            />
          </Link>
        </div>
        {/* Auth buttons */}
        <div className="flex gap-4 max-xl:hidden">
          <Link
            href={"/login"}
            className="stroke-button font-medium border-primary text-primary opacity-100 py-2.5 px-[22px]"
          >
            Log in
          </Link>
          <Link
            href={"/signup"}
            className="normal-button font-medium py-3 px-[22px]"
          >
            Sign up
          </Link>
        </div>
        {/* Responsive menu */}
        <div className="xl:hidden sm:relative" ref={responsiveMenuRef}>
          <span
            className="cursor-pointer"
            onClick={() => setMenuExpanded((m) => !m)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="108"
              viewBox="0 0 120 108"
              className="fill-primary size-9"
            >
              <rect width="120" height="20" rx="10" />
              <path d="M0 54C0 48.4772 4.47715 44 10 44H110C115.523 44 120 48.4772 120 54V54C120 59.5228 115.523 64 110 64H10C4.47715 64 0 59.5228 0 54V54Z" />
              <rect y="88" width="120" height="20" rx="10" />
            </svg>
          </span>

          <div
            className={`absolute max-sm:w-[calc(100%-24px)] max-sm:right-3 shadow right-0 top-[70px] max-sm:top-[84px] flex flex-col gap-1 w-[300px] bg-white rounded-[18px] [&>button]:font-primary [&>button]:cursor-pointer [&>button]:text-lg p-4 transition-[translate_opacity] duration-150 ease-out ${
              menuExpanded
                ? "opacity-100 translate-y-0"
                : "opacity-0 pointer-events-none -translate-y-4"
            }`}
          >
            <Link
              href={"/freelancer"}
              className={`py-1.5 rounded-xl font-primary text-center ${
                path === "/freelancer"
                  ? "bg-primary font-bold text-white"
                  : "hover:bg-[oklch(from_var(--color-green)_l_c_h_/_.15)]"
              }`}
            >
              I want to work
            </Link>
            <Link
              href={"/client"}
              className={`py-1.5 rounded-xl mb-2.5 font-primary text-center ${
                path === "/client"
                  ? "bg-primary font-bold text-white"
                  : "hover:bg-[oklch(from_var(--color-blue)_l_c_h_/_.15)]"
              }`}
            >
              I want to hire
            </Link>
            <div className="flex gap-3">
              <Link
                href={"/login"}
                className="stroke-button text-center font-medium border-primary text-primary opacity-100 py-2.5 px-[22px] flex-1"
              >
                Log in
              </Link>
              <Link
                href={"/signup"}
                className="normal-button font-medium py-3 px-[22px] flex-1 text-center text-[16px]"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
