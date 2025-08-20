import { MenuShownType, MessageProps } from "@/utils/types";
import { SetStateAction } from "react";
import MessageNotification from "./MessageNotification";

export default function MessagesContainer({
    messages,
    messagesShown,
    setMenuShown
}: {
    messages: MessageProps[],
    messagesShown: boolean,
    setMenuShown: React.Dispatch<SetStateAction<MenuShownType>>
}) {
    const hasMessages = messages.length > 0;

    return (
        <div className={`absolute left-1/2 -translate-x-1/2 top-[74px] w-[360px] flex flex-col gap-1 transition-all duration-200 ease-out ${!messagesShown && '-translate-y-5 opacity-0 pointer-events-none'}`}>
            <button className={`normal-button z-[1] ${messagesShown ? 'mb-2' : '-mb-2'} bg-white drop-shadow-[0_0_27px_rgba(0,0,0,0.1)] hover:drop-shadow-[0_10px_27px_rgba(0,0,0,0.1)]`}>
                <span className="font-primary font-medium bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">
                    Check Inbox
                </span>
            </button>
            <div className={`${hasMessages ? 'max-h-[200px]' : 'h-[80px] flex items-center justify-center'} no-scrollbar bg-white shadow-[0_0_27px_rgba(0,0,0,0.08)] rounded-[18px] overflow-auto`}>
                {
                    hasMessages
                        ? messages.map((message, i) =>
                            <MessageNotification
                                key={i}
                                {...message}
                            />
                        )
                        : <span className="text-xs font-primary opacity-20">You have no messages</span>
                }
            </div>
            <div className={`flex justify-end px-2`}>
                <button
                    className="small-menu-button"
                    onClick={() => setMenuShown(m => ({
                        messagesMenu: !m.messagesMenu,
                        notificationMenu: false,
                        userMenu: false
                    }))}
                >
                    Close
                </button>
            </div>
        </div>
    );
}