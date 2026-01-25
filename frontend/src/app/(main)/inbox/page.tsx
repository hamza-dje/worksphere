import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inbox",
};

export default function InboxPage() {
  return (
    <div className="font-primary text-sm flex items-center gap-4 m-auto">
      <img src="/navbar/msg.svg" alt="Message" className="h-7" />
      Please choose a person to start messaging!
    </div>
  );
}
