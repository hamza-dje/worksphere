import Sidebar from "@/components/user-space/sidebar/Sidebar";

export default function UserSpaceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="flex-1 flex gap-6 w-[1300px] max-2xl:w-[1200px] mx-auto py-10 max-xl:relative max-xl:w-full max-xl:px-10 max-sm:p-3 max-sm:pl-8">
            <Sidebar />
            <div className="flex-3 grid grid-cols-3 max-lg:grid-cols-2 auto-rows-min gap-6 max-lg:gap-4 max-sm:grid-cols-1 max-sm:gap-3 min-h-0">
                {children}
            </div>
        </main>
    );
}