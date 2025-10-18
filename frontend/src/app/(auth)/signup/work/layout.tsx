import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Become a Freelancer",
};

export default function ClientSignUpLayout({
    children,
}: {
    children: Readonly<React.ReactNode>;
}) {
    return (
        <>
            <div className="flex absolute h-full w-full -z-10 max-lg:hidden">
                <Image
                    src={"/signup/work/left.png"}
                    alt="Background 1"
                    width={1000}
                    height={0}
                    className="w-1/2 object-cover object-center"
                />
                <Image
                    src={"/signup/work/right.png"}
                    alt="Background 2"
                    width={1000}
                    height={0}
                    className="w-1/2 object-cover object-center"
                />
            </div>
            <div className="h-screen w-[860px] max-lg:w-full bg-white mx-auto rounded-[40px] flex flex-col relative z-10">
                {children}
            </div>
        </>
    );
}
