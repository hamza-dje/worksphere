"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FilterBar from "./FilterBar";
import UserMenu from "./UserMenu";
import Notification from "./navbar-components/Notification";

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

                        <div className="absolute left-1/2 -translate-x-1/2 top-[74px] w-[320px] max-h-[260px] no-scrollbar bg-white shadow-[0_0_27px_rgba(0,0,0,0.08)] rounded-[18px] overflow-auto">
                            <Notification
                                title="Project added"
                                time="8m"
                                description="Lorum ipsum dolor sit amet was added to your projects list."
                            />
                            <Notification
                                title="Project added"
                                time="8m"
                                description="Lorum ipsum dolor sit amet was added to your projects list."
                            />
                            <Notification
                                title="Project added"
                                time="8m"
                                description="Lorum ipsum dolor sit amet was added to your projects list."
                            />
                        </div>
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

                        <UserMenu
                            userMenuShown={userMenuShown}
                            setUserMenuShown={setUserMenuShown}
                        />
                    </div>
                </div>
            </header>
            {
                path === '/' && <FilterBar navbarHeight={navbarHeight} />
            }
        </>
    );
}
