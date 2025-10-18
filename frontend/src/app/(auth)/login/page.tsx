import AuthButton from "@/components/auth/AuthButton";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Login",
    description: "Welcome back to WorkWave!",
};

export default function LoginPage() {
    return (
        <div className="h-screen w-full">
            <div className="bg-white w-[50%] shadow-[0_0_27px_rgba(0,0,0,0.08)] max-lg:w-full h-full rounded-[0_36px_36px_0] max-lg:rounded-none flex flex-col items-center relative">
                <Link
                    href="/freelancer"
                    className="text-sm font-primary font-bold text-black opacity-20 absolute top-7 right-7 max-sm:hidden"
                >
                    Back
                </Link>
                <div className="w-[400px] pt-[140px] max-sm:pt-[100px] max-sm:w-full max-sm:px-3.5">
                    <div className="flex flex-col items-center mb-[52px] text-center">
                        <h1>Welcome back!</h1>
                        <p className="opacity-60 text-[18px] max-sm:text-sm">
                            Sign in to continue to WorkWave.
                        </p>
                    </div>

                    <form
                        action=""
                        className="flex flex-col gap-6 max-sm:gap-4 mb-2.5"
                    >
                        <input type="text" name="email" placeholder="Email" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <button className="big-button">Log in</button>
                    </form>

                    <div className="flex justify-between text-black text-sm">
                        <Link
                            href=""
                            className="opacity-50 hover:opacity-100 duration-200 transition-opacity"
                        >
                            New to WorkWave?
                        </Link>
                        <Link
                            href=""
                            className="opacity-50 hover:opacity-100 duration-200 transition-opacity"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <div className="flex gap-3.5 items-center opacity-20 my-8">
                        <hr className="w-full" />
                        <p className="font-medium">Or</p>
                        <hr className="w-full" />
                    </div>
                    <div className="relative col-span-full h-16">
                        <AuthButton platform="google" className="left-0" />
                        <AuthButton
                            platform="facebook"
                            className="left-[calc(25%+5px)] hover:left-0"
                        />
                        <AuthButton
                            platform="apple"
                            className="left-[calc(50%+10px)] hover:left-0"
                        />
                        <AuthButton
                            platform="linkedin"
                            className="left-[calc(75%+15px)] hover:left-0"
                        />
                    </div>
                </div>
            </div>
            <div className="h-full absolute right-0 top-0 -z-[1] max-lg:hidden">
                <Image
                    src="/login-bg.png"
                    width={2000}
                    height={1500}
                    alt="Login background"
                    className="h-full w-full object-cover object-right min-w-full min-h-[460px]"
                />
            </div>
        </div>
    );
}
