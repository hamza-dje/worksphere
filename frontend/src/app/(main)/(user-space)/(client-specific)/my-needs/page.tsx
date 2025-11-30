import { Metadata } from "next";
import ClientMyNeedsPage from "./ClientMyNeedsPage";

export const metadata: Metadata = {
  title: "My Needs",
  description: "The projects I need to finish",
};

export default function MyNeedsPage() {
  return <ClientMyNeedsPage />;
}
