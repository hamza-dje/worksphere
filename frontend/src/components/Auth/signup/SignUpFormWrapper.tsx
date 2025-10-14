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
                        {skipContent}
                    </button>
                )}
            </form>
            {accountType === "client" ? (
                <div className="max-sm:pt-10 flex gap-4 mt-auto mx-auto pb-[30px] w-[500px] max-sm:w-[calc(100%-32px)]">
                    <div className="flex-2 flex flex-col gap-1">
                        <span
                            className={`text-sm ${
                                false
                                    ? "font-bold text-green"
                                    : "font-medium text-[oklch(from_var(--color-black)_l_c_h_/_.2)]"
                            }`}
                        >
                            Personal infos
                        </span>
                        <div className="w-full h-1 bg-[oklch(from_var(--color-black)_l_c_h_/_.2)] rounded-full">
                            <span
                                className="bg-green h-full rounded-full block"
                                style={{
                                    width: `${25}%`,
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-1">
                        <span
                            className={`text-sm ${
                                false
                                    ? "font-bold text-green"
                                    : "font-medium text-[oklch(from_var(--color-black)_l_c_h_/_.2)]"
                            }`}
                        >
                            Set up your profile
                        </span>
                        <div className="w-full h-1 bg-[oklch(from_var(--color-black)_l_c_h_/_.2)] rounded-full">
                            <span
                                className="bg-green h-full rounded-full block"
                                style={{
                                    width: `${0}%`,
                                }}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="max-sm:pt-10 flex gap-4 mt-auto mx-auto pb-[30px] w-[500px] max-sm:w-[calc(100%-32px)]">
                    <div className="flex-1 flex flex-col gap-1">
                        <span
                            className={`text-sm ${
                                false
                                    ? "font-bold text-green"
                                    : "font-medium text-[oklch(from_var(--color-black)_l_c_h_/_.2)]"
                            }`}
                        >
                            Personal infos
                        </span>
                        <div className="w-full h-1 bg-[oklch(from_var(--color-black)_l_c_h_/_.2)] rounded-full">
                            <span
                                className="bg-green h-full rounded-full block"
                                style={{
                                    width: `${25}%`,
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-1">
                        <span
                            className={`text-sm ${
                                false
                                    ? "font-bold text-green"
                                    : "font-medium text-[oklch(from_var(--color-black)_l_c_h_/_.2)]"
                            }`}
                        >
                            Set up your profile
                        </span>
                        <div className="w-full h-1 bg-[oklch(from_var(--color-black)_l_c_h_/_.2)] rounded-full">
                            <span
                                className="bg-green h-full rounded-full block"
                                style={{
                                    width: `${0}%`,
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
