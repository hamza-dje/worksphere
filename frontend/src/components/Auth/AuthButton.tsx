import Image from "next/image";

export default function AuthButton({
    platform,
    className,
}: {
    platform: "google" | "facebook" | "apple" | "linkedin";
    className?: string;
}) {
    return (
        <button
            className={`${className} cursor-pointer overflow-hidden w-[calc(25%-15px)] absolute hover:w-full hover:z-10 flex group flex-1 duration-400 ease-out transition-[width_z-index] items-center font-medium rounded-[18px] hover:px-7 py-4 ${
                platform === "google"
                    ? "bg-[#fff] border-1 border-[rgba(31,31,31,0.1)]"
                    : platform === "facebook"
                    ? "bg-[#1877F2]"
                    : platform === "apple"
                    ? "bg-[#0D0D0D]"
                    : "bg-[#0077B5]"
            }`}
        >
            <Image
                src={`/social/${platform}.svg`}
                width={100}
                height={100}
                alt={`${platform}`}
                className="h-8 w-fit max-sm:w-full group-[:not(:hover)]:w-full"
            />
            <p
                className={`max-sm:hidden absolute left-[100px] opacity-0 group-hover:opacity-100 text-nowrap text-[21px] transition-opacity duration-1000 ease-out ${
                    platform !== "google" && "text-white"
                }`}
            >
                Continue with {platform[0].toUpperCase() + platform.slice(1)}
            </p>
        </button>
    );
}
