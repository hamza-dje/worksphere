"use client";
import { usePathname } from "next/navigation";
import UserMessage from "./UserMessage";

export default function UsersMessagesContainer() {
    const path = usePathname();
    const userMessagesContainerStyle = path === "/inbox" ? "" : "max-lg:hidden";

    return (
        <div className={`flex-1 flex flex-col ${userMessagesContainerStyle}`}>
            <div className="flex gap-5 pb-10 max-sm:hidden">
                <img src="/navbar/msg.svg" loading="lazy" alt="Inbox" />
                <span className="bg-gradient-to-r from-blue to-green font-primary font-bold text-4xl bg-clip-text text-transparent">
                    Inbox
                </span>
            </div>

            <div className="flex-1 shadow rounded-4xl flex flex-col min-h-0 overflow-hidden">
                {/* Search Box */}
                <div className="relative p-5">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search"
                        className="h-full w-full max-xl:text-sm !pr-9"
                    />
                    <label
                        htmlFor="search"
                        className="absolute top-1/2 -translate-y-1/2 right-9"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            className="fill-none size-4 stroke-black opacity-20"
                        >
                            <path
                                d="M13.3703 13.3703C14.6817 12.059 15.4928 10.2474 15.4928 8.24638C15.4928 4.24431 12.2484 1 8.24638 1C4.24431 1 1 4.24431 1 8.24638C1 12.2484 4.24431 15.4928 8.24638 15.4928C10.2474 15.4928 12.059 14.6817 13.3703 13.3703ZM13.3703 13.3703L19 19"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </label>
                </div>

                <div className="flex flex-col overflow-y-auto scroll-pb-2.5 flex-1">
                    <UserMessage
                        user={{
                            fullname: "Hamza Djedidi",
                            image: "",
                        }}
                        message="Message message message message"
                        time="5m"
                        newMessage
                        messagesCount={2}
                    />
                    <UserMessage
                        user={{
                            fullname: "Hamza Djedidi",
                            image: "",
                        }}
                        message="Message message message message"
                        time="5m"
                    />
                    <UserMessage
                        user={{
                            fullname: "Hamza Djedidi",
                            image: "",
                        }}
                        message="Message message message message"
                        time="5m"
                    />
                    <UserMessage
                        user={{
                            fullname: "Hamza Djedidi",
                            image: "",
                        }}
                        message="Message message message message"
                        time="5m"
                    />
                    <UserMessage
                        user={{
                            fullname: "Hamza Djedidi",
                            image: "",
                        }}
                        message="Message message message message"
                        time="5m"
                    />
                    <UserMessage
                        user={{
                            fullname: "Hamza Djedidi",
                            image: "",
                        }}
                        message="Message message message message"
                        time="5m"
                    />
                    <UserMessage
                        user={{
                            fullname: "Hamza Djedidi",
                            image: "",
                        }}
                        message="Message message message message"
                        time="5m"
                    />
                </div>
            </div>
        </div>
    );
}
