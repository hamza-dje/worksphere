import { HowCardProps } from "@/utils/types";

export default function HowCard({
    index,
    color,
    title,
    paragraph,
    buttonContent,
}: HowCardProps) {
    return (
        <div
            className="col-span-4 max-xl:col-span-2 flex flex-col gap-3 px-10 py-8 bg-[oklch(from_var(--color-custom)_l_c_h_/_.15)] rounded-[36px] relative"
            style={
                {
                    "--color-custom": `var(--color-${color})`,
                } as React.CSSProperties
            }
        >
            {/* TODO: Add custom colors and fix index appearance */}
            <span className="absolute top-0 h-full right-[20px] max-xl:right-2.5 -z-[1] opacity-15">
                <span
                    className="absolute top-[50%] translate-y-[-50%] right-0 font-primary font-black text-[213px] text-[var(--color-custom)] "
                    style={{
                        WebkitTextStroke: "20px",
                        paintOrder: "stroke fill",
                    }}
                >
                    {index}
                </span>
                <span className="absolute top-[50%] translate-y-[-50%] right-0 font-primary font-black text-[213px] text-white">
                    {index}
                </span>
            </span>

            <h4 className="font-primary font-extrabold text-[28px] text-[var(--color-custom)]">
                {title}
            </h4>

            <p className="text-lg leading-6 tracking-wide">{paragraph}</p>

            {buttonContent && (
                <button className="font-primary font-bold text-sm px-5 py-2 border-2 border-[var(--color-custom)] text-[var(--color-custom)] self-center rounded-[14px] hover:bg-[var(--color-custom)] hover:text-white transition duration-200 ease-out cursor-pointer mt-5">
                    {buttonContent}
                </button>
            )}
        </div>
    );
}
