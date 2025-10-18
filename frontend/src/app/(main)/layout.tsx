import Navbar from "@/components/navbar/authenticated/Navbar";

export default function MainLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <body className="min-h-screen flex flex-col">
            <Navbar />
            {children}
        </body>
    );
}
