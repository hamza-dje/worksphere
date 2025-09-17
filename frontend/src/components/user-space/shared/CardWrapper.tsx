import Link from "next/link";

export default function CardWrapper({
    children,
    header,
    href,
    className,
}: Readonly<{
    children: React.ReactNode;
    header: string;
    href?: string;
    className?: string;
}>) {
    return href === undefined ? (
        <div
            className={`bg-white shadow px-7 py-6 rounded-4xl flex flex-col gap-2 ${
                className ?? ""
            }`}
        >
            <h6 className="font-primary text-primary opacity-40 text-sm">
                {header}
            </h6>
            {children}
        </div>
    ) : (
        <Link
            className={`bg-white shadow px-7 py-6 rounded-4xl flex flex-col gap-2 ${
                className ?? ""
            }
                ${
                    href !== undefined
                        ? "hover:shadow-[0_10px_27px_oklch(from_var(--color-primary)_l_c_h_/_.3)] hover:-translate-y-2.5 transition-[box-shadow_translate] duration-300 ease-out"
                        : ""
                }`}
            href={href}
        >
            <h6 className="font-primary text-primary opacity-40 text-sm">
                {header}
            </h6>
            {children}
        </Link>
    );
}
