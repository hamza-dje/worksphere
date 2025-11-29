"use client";
import { ReactNode } from "react";

export default function SignUpFormWrapper({
    header,
    headerDescription,
    submitButtonContent = "Continue",
    submitButtonClassName,
    formCustomClassName,
    children,
    accountType,
    skipAllowed = false,
    skipContent = "Skip for now",
}: {
    header: string;
    headerDescription: string;
    submitButtonContent?: string;
    submitButtonClassName?: string;
    formCustomClassName?: string;
    children: ReactNode;
    accountType: "client" | "freelancer";
    skipAllowed?: boolean;
    skipContent?: string;
}) {
    return (
        <>
            <div className="pt-6 pl-[30px]">
                <button
                    onClick={() => {}}
                    className="text-sm font-primary font-bold text-black opacity-20 max-sm:hidden cursor-pointer"
                >
                    Back
                </button>
            </div>
            <div className="flex flex-col items-center pt-10 mb-10">
                <h1 className="bg-gradient-to-r from-blue to-green bg-clip-text text-transparent text-center">
                    {header}
                </h1>
                <p className="opacity-60 text-lg text-center">
                    {headerDescription}
                </p>
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className={`${
                    formCustomClassName
                        ? formCustomClassName
                        : "grid grid-cols-4 gap-x-5 gap-y-7 w-[400px] max-sm:w-[calc(100%-32px)] mx-auto"
                }`}
            >
                {children}
                <button
                    type="submit"
                    className={`${submitButtonClassName} big-button col-span-full mt-7 duration-300`}
                >
                    {submitButtonContent}
                </button>

                {skipAllowed && (
                    <button
                        type="button"
                        className="font-primary font-bold text-sm opacity-20 col-span-full text-end cursor-pointer"
                    >
                    </button>
                )}
            </form>
           
        </>
    );
}
