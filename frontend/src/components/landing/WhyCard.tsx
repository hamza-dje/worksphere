export default function WhyCard({
    title,
    paragraph,
    color,
}: {
    title: string;
    paragraph: string;
    color: "green" | "blue" | "purple";
}) {
    return (
        <div
            className="col-span-5 max-xl:col-span-4 max-md:col-span-full flex flex-col gap-2 px-10 py-8 rounded-[36px] bg-[oklch(from_var(--color-x)_l_c_h_/_.15)]"
            style={
                {
                    "--color-x": `var(--color-${color})`,
                } as React.CSSProperties
            }
        >
            <h4
                className={`font-primary font-extrabold text-[28px] text-[var(--color-x)] ${
                    color === "purple" ? "text-purple" : ""
                }`}
            >
                {title}
            </h4>
            <p className="text-lg max-md:text-[16px] leading-6 max-md:leading-snug tracking-wide">
                {paragraph}
            </p>
        </div>
    );
}
