import { Metadata } from "next";
import ClientPendingPage from "./ClientPendingPage";

export const metadata: Metadata = {
  title: "Pending Projects",
  description: "My ongoing projects",
};

export default function PendingPage() {
  return <ClientPendingPage />;
}
