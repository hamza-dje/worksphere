import Sidebar from "@/components/user-space/sidebar/Sidebar";

export default function UserSpaceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="flex-1 flex gap-6 w-[1300px] mx-auto py-10">
            <Sidebar />
            <div className="flex-3 grid grid-cols-3  auto-rows-[max-content] gap-6">
                {children}
            </div>
        </main>
    );
}