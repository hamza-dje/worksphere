import Image from "next/image";

export function CategoryCard({
    name,
    imageTitle,
}: {
    name: string;
    imageTitle: string;
}) {
    return (
        <div className="max-lg:hidden flex flex-col gap-5 items-center justify-center cursor-pointer col-span-2 aspect-square rounded-[36px] bg-[oklch(from_var(--color-white)_l_c_h_/_.1)] hover:-translate-y-2.5 hover:bg-white hover:shadow-[0_10px_20px_rgba(0,0,0,.08)] transition-[translate_background_box-shadow] [&,_&_*]:duration-300 [&,_&_*]:ease-out group">
            <span className="relative">
                <Image
                    src={`/landing/categories-section/${imageTitle}.png`}
                    width={90}
                    height={0}
                    alt={name}
                    className={`max-xl:w-[120px] ${
                        imageTitle === "writing" ? "translate-x-2" : ""
                    }`}
                />
                <Image
                    src={`/landing/categories-section/${imageTitle}-hover.png`}
                    width={90}
                    height={0}
                    alt={name}
                    className={`absolute top-0 left-0 opacity-0 group-hover:opacity-100 drop-shadow-[0_0_10px_rgba(0,0,0,.2)] max-xl:w-[120px] ${
                        imageTitle === "writing" ? "translate-x-2" : ""
                    }`}
                />
            </span>
            <span className="font-primary font-bold text-xs max-xl:text-[16px] text-white group-hover:text-primary">
                {name}
            </span>
        </div>
    );
}
