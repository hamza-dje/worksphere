export default function Notification({ title, time, description }: { title: string, time: string, description: string }) {
    return (
        <div className="px-5 py-3 cursor-pointer hover:bg-[oklch(from_var(--color-primary)_l_c_h_/_0.1)] duration-200 transition-colors group">
            <div className="flex flex-col gap-0.5 group-hover:-translate-y-1 duration-200 transition-transform">
                <div className="flex justify-between text-primary">
                    <span className="font-primary font-bold text-sm text-inherit">
                        {title}
                    </span>
                    <span className="font-primary text-xs text-inherit">
                        {time} ago
                    </span>
                </div>
                <p className="text-xs opacity-40 mb-2">
                    {description}
                </p>
                <div className="flex justify-between font-primary text-[10px] [&>button]:opacity-20 [&>button]:hover:opacity-40 [&>button]:transition-opacity [&>button]:cursor-pointer">
                    <button className="text-inherit">
                        Mark as checked
                    </button>
                    <button className="text-inherit">
                        Check projects
                    </button>
                </div>
            </div>
        </div>
    );
}