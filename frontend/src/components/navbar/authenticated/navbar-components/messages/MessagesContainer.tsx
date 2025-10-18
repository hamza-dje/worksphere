import UserMessage from "@/components/inbox/UserMessage";
import MessageProps from "@/utils/types/MessageProps";
import Link from "next/link";

export default function MessagesContainer({
    messages,
    messagesShown,
    setMessagesShown,
}: {
    messages: Array<MessageProps>;
    messagesShown: boolean;
    setMessagesShown: () => void;
}) {
    const hasMessages = messages.length > 0;

    return (
        <div
            className={`absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-[74px] sm:w-[360px] max-sm:w-full max-sm:top-[calc(100%+10px)] max-sm:left-0 max-sm:px-2 flex flex-col gap-1 transition-all duration-200 ease-out ${
                !messagesShown && "-translate-y-5 opacity-0 pointer-events-none"
            }`}
        >
            <Link
                className={`normal-button z-[1] flex justify-center bg-white drop-shadow-[0_0_27px_rgba(0,0,0,0.1)] hover:drop-shadow-[0_10px_27px_rgba(0,0,0,0.1)] ${
                    messagesShown ? "mb-2" : "-mb-2"
                }`}
                href="/inbox"
            >
                <span className="font-primary max-md:text-[16px] font-medium bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">
                    Check Inbox
                </span>
            </Link>
            <div
                className={`${
                    hasMessages
                        ? "max-h-[240px]"
                        : "h-[80px] flex items-center justify-center"
                } no-scrollbar bg-white shadow-[0_0_27px_rgba(0,0,0,0.08)] rounded-[18px] overflow-auto`}
            >
                {hasMessages ? (
                    messages.map((message, i) => (
                        <UserMessage key={i} {...message} />
                    ))
                ) : (
                    <span className="text-xs font-primary opacity-20">
                        You have no messages
                    </span>
                )}
            </div>
            <div className={`flex justify-end px-2`}>
                <button
                    className="small-menu-button"
                    onClick={() => setMessagesShown()}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
