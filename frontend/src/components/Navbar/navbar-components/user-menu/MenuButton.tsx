import Link from "next/link";

export default function MenuButton({ name, className, imageClassName, href }: { name: string, className?: string, imageClassName?: string, href?: string }) {
    return (
        <Link href={name === 'Log Out'
            ? ''
            : href
                ? `/${href}`
                : `/${name.toLowerCase().replace(' ', '-')}`} className="w-full">
            <button className={`${className} w-full border-1 border-[oklch(from_var(--color-primary)_l_c_h_/_0.15)] cursor-pointer text-[11px] font-primary font-medium flex items-center gap-3 px-5 py-3 bg-white text-primary rounded-[18px] hover:-translate-y-1 hover:shadow-[0_4px_14px_oklch(from_var(--color-primary)_l_c_h_/_0.2)] hover:border-white duration-200 ease-out transition focus:bg-primary focus:text-white group shadow-[0_0_27px_rgba(0,0,0,0.08)]`}>
                <div
                    className={`${imageClassName} opacity-60 w-[13px] h-[13px] bg-primary group-focus:bg-white group-focus:opacity-80 mask-no-repeat mask-center mask-contain scale-110`}
                    style={{
                        maskImage: `url('/user-menu/${name === 'Log Out'
                            ? 'logout'
                            : href
                                ? href
                                : name === 'My Services'
                                    ? name.toLowerCase().split(' ')[1]
                                    : name.toLowerCase().split(' ')[0]}.svg')`
                    }}
                />
                {name}
            </button>
        </Link>
    );
}