import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <div className="w-[840px] max-lg:w-[700px] max-md:w-[600px] max-sm:w-[calc(100%-32px)] flex flex-col gap-20 mx-auto mt-16 max-sm:mt-20">
            <Link
                href="/freelancer"
                className="text-sm font-primary font-bold text-black opacity-20 max-sm:hidden"
            >
                Back
            </Link>

            <div className="flex flex-col items-center">
                <h1 className="text-center w-fit bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">
                    Welcome to WorkWave!
                </h1>
                <p className="opacity-60 text-lg w-fit">
                    What brings you here?
                </p>
            </div>

            <div className="flex max-md:flex-col gap-5">
                <Link
                    href={"/signup/hire"}
                    className="flex-1 relative flex flex-col gap-2.5 px-10 py-8 rounded-[40px] border-1 border-[oklch(from_var(--color-black)_l_c_h_/_.1)] hover:bg-[oklch(from_var(--color-blue)_l_c_h_/_.8)] hover:border-transparent hover:shadow-[0_0_20px_0_rgba(0,0,0,.2)] duration-300 group"
                >
                    <Image
                        src={"/signup/welcome/hire.png"}
                        alt="Hire"
                        width={1000}
                        height={0}
                        className="max-lg:hidden absolute -z-1 top-1/2 -translate-y-1/2 pointer-events-none right-1/8 opacity-0 group-hover:opacity-100 group-hover:right-1/2 duration-600 scale-125"
                    />
                    <h3 className="font-primary font-extrabold text-blue group-hover:text-white duration-300 text-3xl max-lg:text-2xl">
                        I want to hire
                    </h3>
                    <p className="text-lg group-hover:text-white duration-300">
                        Hire reliable freelancers from around the globe to work
                        on your projects.
                    </p>
                </Link>

                <Link
                    href={"/signup/work"}
                    className="flex-1 relative flex flex-col gap-2.5 px-10 py-8 rounded-[40px] border-1 border-[oklch(from_var(--color-black)_l_c_h_/_.1)] hover:bg-[oklch(from_var(--color-green)_l_c_h_/_.8)] hover:border-transparent hover:shadow-[0_0_20px_0_rgba(0,0,0,.2)] duration-300 group"
                >
                    <Image
                        src={"/signup/welcome/work.png"}
                        alt="Hire"
                        width={1000}
                        height={0}
                        className="max-lg:hidden absolute -z-1 top-1/2 -translate-y-1/2 pointer-events-none left-1/8 opacity-0 group-hover:opacity-100 group-hover:left-1/2 duration-600 scale-125"
                    />
                    <h3 className="font-primary font-extrabold text-green group-hover:text-white duration-300 text-3xl max-lg:text-2xl">
                        I want to work
                    </h3>
                    <p className="text-lg group-hover:text-white duration-300">
                        Work as a freelancer on projects of various categories
                        and get paid.
                    </p>
                </Link>
            </div>

            <div className="flex justify-end">
                <Link
                    href={"/login"}
                    className="opacity-50 text-sm hover:opacity-100 duration-300"
                >
                    Already have an account? <strong>Log in</strong>
                </Link>
            </div>
        </div>
    );
}
