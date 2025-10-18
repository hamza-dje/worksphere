"use client";

import { useEffect, useRef, useState } from "react";

export default function MessagesContainer({
    messages,
}: {
    messages: Array<{
        messageFrom: "me" | "him";
        message: string;
        timestamp: string;
    }>;
}) {
    return (
        <div className="flex flex-col">
            {messages.map((message, i) => {
                const [windowWidth, setWindowWidth] = useState<number | null>(
                    null
                );
                const [seenTimeShown, setSeenTimeShown] =
                    useState<boolean>(false);

                const messageRef = useRef<HTMLDivElement>(null);
                const messageContainerRef = useRef<HTMLDivElement>(null);
                const seenTimeRef = useRef<HTMLDivElement>(null);

                useEffect(() => {
                    const handleResize = () =>
                        setWindowWidth(window.innerWidth);

                    handleResize();
                    window.addEventListener("resize", handleResize);
                    return () =>
                        window.removeEventListener("resize", handleResize);
                }, []);

                useEffect(() => {
                    if (
                        messageContainerRef.current &&
                        messageRef.current &&
                        seenTimeRef.current
                    ) {
                        if (seenTimeShown) {
                            messageContainerRef.current.style.height = `${
                                messageRef.current.offsetHeight +
                                seenTimeRef.current.offsetHeight +
                                4
                            }px`;
                        } else {
                            messageContainerRef.current.style.height = `${messageRef.current.offsetHeight}px`;
                        }
                    }
                }, [seenTimeShown, windowWidth]);

                const senderPicShown: boolean =
                    message.messageFrom === "him" &&
                    (i === messages.length - 1 ||
                        messages[i + 1]?.messageFrom !== message.messageFrom);
                const firstMessage: boolean =
                    messages[i + 1]?.messageFrom === message.messageFrom &&
                    messages[i - 1]?.messageFrom !== message.messageFrom;
                const lastMessage: boolean =
                    messages[i + 1]?.messageFrom !== message.messageFrom &&
                    messages[i - 1]?.messageFrom === message.messageFrom;
                const messageInMiddle: boolean =
                    messages[i + 1]?.messageFrom === message.messageFrom &&
                    messages[i - 1]?.messageFrom === message.messageFrom;
                const userChanged: boolean =
                    i !== messages.length - 1 &&
                    message.messageFrom !== messages[i + 1]?.messageFrom;

                return (
                    <div
                        ref={messageContainerRef}
                        key={i}
                        className={`flex items-start gap-1.5 overflow-hidden transition-[height] duration-200
                            ${senderPicShown ? "" : "pl-7.5"} ${
                            lastMessage
                                ? userChanged
                                    ? "mb-5"
                                    : ""
                                : "mb-[3px]"
                        } ${message.messageFrom === "me" ? "justify-end" : ""}`}
                    >
                        {senderPicShown && (
                            <div className="w-6 aspect-square bg-primary rounded-full self-end" />
                        )}
                        <div
                            ref={messageRef}
                            onClick={() => setSeenTimeShown((s) => !s)}
                            className={`px-4 py-2 w-fit max-w-7/12 max-sm:max-w-5/6 max-sm:text-[15px] rounded-[20px] cursor-pointer relative tracking-[0.2px]
                                ${
                                    message.messageFrom === "him"
                                        ? firstMessage
                                            ? "rounded-bl-[4px] "
                                            : lastMessage
                                            ? "rounded-tl-[4px] "
                                            : messageInMiddle
                                            ? "rounded-l-[4px] "
                                            : ""
                                        : firstMessage
                                        ? "rounded-br-[4px]"
                                        : lastMessage
                                        ? "rounded-tr-[4px]"
                                        : messageInMiddle
                                        ? "rounded-r-[4px]"
                                        : ""
                                } ${
                                message.messageFrom === "him"
                                    ? "bg-[oklch(from_var(--color-black)_l_c_h_/_.05)]"
                                    : "bg-primary text-white"
                            }`}
                        >
                            {message.message}
                            <span
                                ref={seenTimeRef}
                                className={`absolute right-0 bottom-0 translate-y-full text-[11px] font-primary pt-1 ${
                                    seenTimeShown ? "opacity-40" : "opacity-0"
                                }`}
                            >
                                {message.timestamp}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
