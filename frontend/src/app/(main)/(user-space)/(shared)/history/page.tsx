import { Metadata } from "next";
import ClientHistoryPage from "./ClientHistoryPage";

export const metadata: Metadata = {
    title: "History",
    description: "Your WorkWave projects history",
};

export default function HistoryPage() {
    return <ClientHistoryPage />;
}
