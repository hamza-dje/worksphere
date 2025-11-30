import { Metadata } from "next";
import ClientMyServicesPage from "./ClientMyServicesPage";

export const metadata: Metadata = {
  title: "My Services",
  description: "The services I offer",
};

export default function MyServicesPage() {
  return <ClientMyServicesPage />;
}
