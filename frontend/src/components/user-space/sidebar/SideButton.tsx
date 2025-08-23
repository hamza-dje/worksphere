"use client";
import { SideButtonProps } from "@/utils/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cloneElement, ReactElement, SVGProps, useState } from "react";

export default function SideButton(props: SideButtonProps) {
    const [menuExpanded, setMenuExpanded] = useState<boolean>(false);
    const path = usePathname();

    const cloneIcon = (icon: ReactElement<SVGProps<SVGSVGElement>>, child: boolean = false, childHref?: string) => {
        return cloneElement(props.icon, {
            className: `${props.customColor
                ? 'fill-[var(--custom-color)]'
                : child
                    ? path === childHref
                        ? 'fill-white'
                        : 'fill-primary'
                    : path === props.href
                        ? 'fill-white'
                        : menuExpanded
                            ? 'fill-white'
                            : 'fill-primary'
                } opacity-80 size-4`
        });
    };

    if (props.hasChildren && props.childrenButtons) return (
        <div>
            <button
                className={`relative z-[1] flex items-center gap-4 w-full text-sm font-primary font-bold px-6 py-3.5 border-1 rounded-[18px] hover:border-transparent duration-200 transition-[background_shadow] cursor-pointer
                    ${menuExpanded
                        ? 'text-white border-transparent bg-primary shadow-[0_5px_10px_rgba(0,0,0,0.15)]'
                        : 'text-primary border-[oklch(from_var(--color-primary)_l_c_h_/_0.15)] hover:bg-[oklch(from_var(--color-primary)_l_c_h_/_0.15)]'
                    }`}
                style={{
                    '--custom-color': `${props.customColor}`
                } as React.CSSProperties}
                onClick={() => setMenuExpanded(m => !m)}
            >
                {cloneIcon(props.icon)}
                {props.name}
            </button>

            <div className={`relative pl-8 transition-all duration-200 ease-out z-0 -top-[18px] overflow-hidden
                ${menuExpanded
                    ? 'max-h-32 -mb-[18px]'
                    : 'max-h-0'
                }`}>
                {
                    props.childrenButtons.map((childButton, i) => {
                        if (i === 0) {
                            return <Link
                                key={`${childButton.name}`}
                                className={`relative flex items-center gap-4 w-full text-sm border-none font-primary font-bold px-6 pb-3.5 pt-[32px] border-1 rounded-b-[18px] hover:border-transparent group cursor-pointer
                                ${path === childButton.href
                                        ? 'text-white fill-dark-primary border-transparent'
                                        : 'text-primary fill-primary'
                                    }`}
                                style={{ zIndex: 2 - 2 * i }}
                                href={childButton.href}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className={`absolute top-[18px] left-0 -translate-x-full size-4 transition-[opacity] duration-200
                                ${path === childButton.href
                                        ? ''
                                        : 'opacity-10 group-hover:opacity-20'
                                    }`}>
                                    <path d="M20 20C20 8.9543 11.0457 0 0 0H20V20Z" />
                                    <path d="M20 20C20 8.9543 11.0457 0 0 0H20V20Z" />
                                </svg>
                                <div className="absolute w-full h-full top-0 left-0 bg-white -z-10 rounded-b-[18px]" />
                                <div className={`absolute w-full h-full top-0 left-0 -z-10 transition-[opacity] duration-200 rounded-b-[18px]
                                    ${path === childButton.href
                                        ? 'bg-dark-primary'
                                        : 'bg-primary opacity-10 group-hover:opacity-20'
                                    }`} />
                                {cloneIcon(childButton.icon, true, childButton.href)}
                                {childButton.name}
                            </Link>
                        } else {
                            return <Link
                                key={`${childButton.name}`}
                                className={`relative flex items-center gap-4 w-full text-sm border-none font-primary font-bold px-6 pb-3.5 pt-[32px] -mt-[18px] border-1 rounded-b-[18px] hover:border-transparent group cursor-pointer overflow-hidden
                                ${path === childButton.href
                                        ? 'text-white border-transparent'
                                        : 'text-primary'
                                    }`}
                                style={{ zIndex: 2 - 2 * i }}
                                href={childButton.href}
                            >
                                <div className="absolute w-full h-full top-0 left-0 bg-white -z-10" />
                                <div className={`absolute w-full h-full top-0 left-0 -z-10 transition-[opacity] duration-200
                                    ${path === childButton.href
                                        ? 'bg-dark-primary'
                                        : 'bg-primary opacity-10 group-hover:opacity-20'
                                    }`} />
                                {cloneIcon(childButton.icon, true, childButton.href)}
                                {childButton.name}
                            </Link>
                        }
                    }
                    )
                }
            </div>
        </div>
    );
    else return (
        <Link
            className={`flex items-center gap-4 w-full text-sm
                ${props.customColor
                    ? 'text-[var(--custom-color)] border-[oklch(from_var(--custom-color)_l_c_h_/_0.15)] hover:bg-[oklch(from_var(--custom-color)_l_c_h_/_0.15)]'
                    : path === props.href
                        ? 'text-white border-transparent bg-dark-primary'
                        : 'text-primary border-[oklch(from_var(--color-primary)_l_c_h_/_0.15)] hover:bg-[oklch(from_var(--color-primary)_l_c_h_/_0.15)]'
                } font-primary font-bold px-6 py-3.5 border-1 rounded-[18px] hover:border-transparent duration-200 transition-[background] cursor-pointer`}
            style={{
                '--custom-color': `${props.customColor}`
            } as React.CSSProperties}
            href={props.href ?? ''}
        >
            {cloneIcon(props.icon)}
            {props.name}
        </Link>
    );
}