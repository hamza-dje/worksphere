"use client";
import { useEffect, useRef } from "react";
import OverlayButton from "../OverlayButton";
import MessagesContainer from "@/components/inbox/MessagesContainer";

export default function ChatContainer() {
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const chatContainer = chatContainerRef.current;
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, []);

    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3.5">
                    <div className="w-9 aspect-square rounded-full bg-primary" />
                    <span className="font-primary font-bold text-sm">
                        Hamza Djedidi
                    </span>
                </div>
                <div className="flex gap-3">
                    <OverlayButton
                        openOverlayButton={
                            <button className="stroke-button text-sm py-2 px-4">
                                !
                            </button>
                        }
                        overlayContent={
                            <textarea
                                name="reason"
                                placeholder="Reason why?"
                                rows={4}
                                className="resize-none w-full"
                            />
                        }
                        cancelButtonContent="Cancel reporting!"
                        confirmButton={
                            <button className="normal-button bg-red">
                                Report
                            </button>
                        }
                    />
                    <button className="normal-button text-sm py-2 px-4 flex items-center gap-2">
                        <img src="/inbox/call.png" alt="" className="h-3.5" />
                        Call
                    </button>
                </div>
            </div>

            <div
                ref={chatContainerRef}
                className="flex-1 flex flex-col gap-5 overflow-y-auto no-scrollbar"
            >
                <div className="text-center flex flex-col gap-1.5 py-10">
                    <span className="font-primary text-primary font-medium">
                        Chat has been started with Hamza Djedidi ✨
                    </span>
                    <span className="font-primary text-primary font-light text-sm">
                        Send your first message here!
                    </span>
                </div>

                {/*Todo: Complete message component*/}
                <MessagesContainer
                    messages={[
                        {
                            messageFrom: "him",
                            message:
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
                            timestamp: "siuu",
                        },
                        {
                            messageFrom: "him",
                            message: "siuu",
                            timestamp: "siuu",
                        },
                        {
                            messageFrom: "him",
                            message:
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
                            timestamp: "12:47PM",
                        },
                        {
                            messageFrom: "me",
                            message:
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
                            timestamp: "12:47PM",
                        },
                        {
                            messageFrom: "me",
                            message: "siuu",
                            timestamp: "siuu",
                        },
                        {
                            messageFrom: "me",
                            message: "siuu",
                            timestamp: "siuu",
                        },
                    ]}
                />
            </div>

            <div className="relative">
                <input
                    type="text"
                    placeholder="Message..."
                    className="w-full rounded-full py-3 text-[1rem] pr-[50px] pl-[22px] peer"
                />
                <button className="absolute bg-blue rounded-full flex items-center justify-center top-1.5 right-1.5 bottom-1.5 h-[calc(100%-12px)] aspect-square p-[9px] group peer-placeholder-shown:hidden cursor-pointer">
                    <img
                        src="/inbox/send.png"
                        alt="send"
                        className="translate-x-0.5 group-hover:translate-x-1.5 group-hover:drop-shadow-[-4px_0_1px_rgba(0,0,0,.25)] transition-[translate_filter] duration-200 ease-out"
                    />
                </button>
            </div>
        </>
    );
}
