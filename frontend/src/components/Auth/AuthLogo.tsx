"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLogo() {
    const path = usePathname();

    return (
        <>
            <Link
                href={"/freelancer"}
                className={`absolute top-7 left-7 flex items-center gap-3 ${
                    path.startsWith("/signup") ? "max-lg:hidden" : ""
                }`}
            >
                <Image
                    src={
                        path.startsWith("/signup")
                            ? "/logo-white.svg"
                            : "/logo.svg"
                    }
                    width={36}
                    height={30}
                    alt="Logo"
                    priority
                />

                <span
                    className={`font-bold font-primary bg-gradient-to-r from-green to-blue bg-clip-text text-transparent text-xl max-sm:hidden ${
                        path.startsWith("/signup") ? "text-white" : ""
                    }`}
                >
                    Work
                    <span
                        className={`font-black font-primary text-transparent ${
                            path.startsWith("/signup") ? "text-white" : ""
                        }`}
                    >
                        Wave
                    </span>
                </span>
            </Link>

            <div
                className={`absolute bottom-7 left-7 text-sm ${
                    path.startsWith("/signup")
                        ? "text-white opacity-100 max-lg:hidden"
                        : "opacity-50"
                }`}
            >
                © WorkWave 2024
            </div>
        </>
    );
}
