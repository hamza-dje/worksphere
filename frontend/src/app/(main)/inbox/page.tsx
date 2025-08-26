import ChatContainer from "@/components/inbox/ChatContainer";
import UsersMessagesContainer from "@/components/inbox/UsersMessagesContainer";

export default function Inbox() {
    return (
        <div className="flex-1 w-[1300px] mx-auto flex gap-6 py-10 max-h-[calc(100vh-84px)]">
            <UsersMessagesContainer />
            <ChatContainer />
        </div>
    );
}