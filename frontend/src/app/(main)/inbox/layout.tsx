import ClientInboxLayout from "@/components/inbox/layout/ClientInboxLayout";


export default async function InboxLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ClientInboxLayout>
            {children}
        </ClientInboxLayout>
    );
}