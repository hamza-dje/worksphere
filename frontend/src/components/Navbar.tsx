"use client";
import Image from "next/image";
import MenuButton from "./MenuButton";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FilterBar from "./FilterBar";

export default function Navbar() {
    const path = usePathname();
    const [userMenuShown, setUserMenuShown] = useState<boolean>(false);
    const [navbarHeight, setNavbarHeight] = useState<number>(84);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (headerRef.current) {
            setNavbarHeight(headerRef.current.offsetHeight);
        }
    }, [headerRef.current]);

    return (
        <>
            <header
                ref={headerRef}
                className="z-10 w-full py-5 shadow-[0_0_27px_rgba(0,0,0,0.08)] rounded-b-[36px] flex justify-between px-[140px] max-lg:px-[60px] max-sm:px-6 sticky top-0 right-0 left-0 bg-white"
            >
                <Link href="/">
                    <div className="flex gap-3.5 items-center">
                        <Image src="/logo.svg" width={46} height={40} alt="Logo" priority />
                        <span className="font-bold font-primary bg-gradient-to-r from-green to-blue bg-clip-text text-transparent text-[27px] max-sm:hidden">
                            Work
                            <span className="font-black font-primary text-transparent">
                                Wave
                            </span>
                        </span>
                    </div>
                </Link>

                <div className="flex items-center gap-5 [&>span>img]:hover:drop-shadow-[0_0_6px_rgba(0,0,0,0.2)] [&>span>img]:cursor-pointer">
                    <span className="relative">
                        <img
                            src="/navbar/msg.svg"
                            alt="Messages"
                            className="h-[30px] duration-150 transition"
                            loading="eager"
                        />
                        <span className="text-white bg-red absolute top-0 -translate-y-[50%] right-0 text-xs font-primary font-medium px-1 translate-x-2 border-3 border-white rounded-full">
                            2
                        </span>
                    </span>
                    <span className="relative sm:mr-4">
                        <img
                            src="/navbar/bell.svg"
                            alt="Notifications"
                            className="h-[30px] duration-150 transition"
                            loading="eager"
                        />
                        <span className="text-white bg-red absolute top-0 -translate-y-[50%] right-0 text-xs font-primary font-medium px-1 translate-x-2 border-3 border-white rounded-full">
                            2
                        </span>
                    </span>
                    <div className="relative">
                        <div
                            className="flex items-center gap-[18px] cursor-pointer"
                            onClick={() => setUserMenuShown(u => !u)}
                        >
                            <div className="w-[44px] aspect-square rounded-full bg-primary"></div>
                            <div className="flex flex-col max-md:hidden">
                                <span className="font-primary font-bold text-sm text-primary">
                                    Hamza Djedidi
                                </span>
                                <span className="text-xs text-primary">Graphic Designer</span>
                            </div>
                        </div>

                        <div
                            className={`absolute top-[80px] lg:right-[50%] max-lg:right-0 lg:translate-x-[50%] w-[360px] grid grid-cols-2 gap-x-2.5 max-sm:pl-12 max-sm:w-screen ${userMenuShown
                                ? "gap-y-2.5"
                                : "gap-y-0 pointer-events-none -translate-y-5 opacity-0"
                                } transition-all duration-200 ease-out`}
                        >
                            <MenuButton name="Dashboard" />
                            <MenuButton name="Working On" />
                            <MenuButton name="My Services" href="services" />
                            <MenuButton name="Withdraw" />
                            <MenuButton name="Profile" />
                            <MenuButton name="Account" />
                            <button className="normal-button col-span-2 my-2">
                                Post a service
                            </button>
                            <MenuButton
                                name="Get Support"
                                className="border-[oklch(from_var(--color-blue)_l_c_h_/_0.15)]! text-blue! hover:shadow-[0_4px_14px_oklch(from_var(--color-blue)_l_c_h_/_0.2)]! hover:border-white! focus:bg-blue! focus:text-white!"
                                imageClassName="bg-blue! group-focus:bg-white!"
                                href="support"
                            />
                            <MenuButton
                                name="Log Out"
                                className="border-[oklch(from_var(--color-alternative-red)_l_c_h_/_0.15)]! text-alternative-red! hover:shadow-[0_4px_14px_oklch(from_var(--color-alternative-red)_l_c_h_/_0.2)]! hover:border-white! focus:bg-alternative-red! focus:text-white!"
                                imageClassName="bg-alternative-red! group-focus:bg-white!"
                                href="logout"
                            />
                            <button
                                onClick={() => setUserMenuShown(u => !u)}
                                className="font-primary text-[11px] opacity-20 cursor-pointer hover:opacity-100 px-2 py-1 absolute right-1 -bottom-8 duration-200 transition-opacity"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {
                path === '/' && <FilterBar navbarHeight={navbarHeight} />
            }
        </>
    );
}
