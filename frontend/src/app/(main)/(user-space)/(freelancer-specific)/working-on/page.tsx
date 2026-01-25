import { Metadata } from "next";
import ClientWorkingOnPage from "./ClientWorkingOnPage";

export const metadata: Metadata = {
  title: "Working On",
  description: "Your project you are working on",
};

export default function WorkingOnPage() {
  return <ClientWorkingOnPage />;
}
