"use client";
import UsersMessagesContainer from "@/components/inbox/UsersMessagesContainer";
import { usePathname } from "next/navigation";

export default function ClientInboxLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const path = usePathname();
    const chatContainerStyle = path === "/inbox" ? "max-lg:hidden" : "";

    return (
        <div className="flex-1 w-[1300px] max-2xl:w-[1200px] max-xl:px-10 max-xl:w-full max-sm:p-0 mx-auto flex gap-6 py-10 max-h-[calc(100vh-84px)] max-sm:pt-5">
            <UsersMessagesContainer />
            <div
                className={`shadow flex-2 rounded-4xl p-5 max-sm:p-4 flex flex-col gap-5 min-h-0 ${chatContainerStyle}`}
            >
                {children}
            </div>
        </div>
    );
}
