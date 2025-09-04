import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

export default function Navbar({
    isFreelancer,
    setIsFreelancer,
}: {
    isFreelancer: boolean;
    setIsFreelancer: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <div className="sticky top-0 right-0 left-0 z-10 h-0">
            <header className="w-full py-4 shadow-[0_0_27px_rgba(0,0,0,0.08)] rounded-b-[36px] flex justify-between px-[140px] max-lg:px-[60px] max-sm:px-6 absolute top-0 right-0 left-0 bg-white">
                {/* Logo */}
                <div className="flex gap-3.5 items-center">
                    <Image
                        src="/logo.svg"
                        width={46}
                        height={40}
                        alt="Logo"
                        priority
                    />
                    <span className="font-bold font-primary bg-gradient-to-r from-green to-blue bg-clip-text text-transparent text-[27px] max-sm:hidden">
                        Work
                        <span className="font-black font-primary text-transparent">
                            Wave
                        </span>
                    </span>
                </div>
                {/* Navigation buttons */}
                <div className="flex items-center gap-10 [&>span]:font-primary [&>span]:cursor-pointer [&>span]:text-lg">
                    <span
                        className={`${
                            isFreelancer ? "text-primary font-bold" : ""
                        } relative`}
                        onClick={() => setIsFreelancer(true)}
                    >
                        I want to work
                        <span
                            className="absolute top-[48px] -left-0.5 -right-0.5 h-1.5 rounded-t-full bg-primary"
                            style={{
                                display: `${isFreelancer ? "initial" : "none"}`,
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isFreelancer ? "" : "text-primary font-bold"
                        } relative`}
                        onClick={() => setIsFreelancer(false)}
                    >
                        I want to hire
                        <span
                            className="absolute top-[48px] -left-0.5 -right-0.5 h-1.5 rounded-t-full bg-primary"
                            style={{
                                display: `${isFreelancer ? "none" : "initial"}`,
                            }}
                        />
                    </span>
                </div>
                {/* Auth buttons */}
                <div className="flex gap-4">
                    <Link
                        href={"/login"}
                        className="stroke-button font-medium border-primary text-primary opacity-100 py-2.5 px-[22px]"
                    >
                        Log in
                    </Link>
                    <button className="normal-button font-medium py-3 px-[22px]">
                        Sign up
                    </button>
                </div>
            </header>
        </div>
    );
}
