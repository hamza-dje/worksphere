import { Metadata } from "next";
import ClientDashboardPage from "./ClientDashboardPage";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Track your progress at WorkSphere",
};

export default function DashboardPage() {
  return <ClientDashboardPage />;
}
