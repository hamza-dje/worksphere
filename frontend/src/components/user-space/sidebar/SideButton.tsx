"use client";
import SideButtonProps from "@/utils/types/SideButtonProps";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  cloneElement,
  ReactElement,
  SVGProps,
  useEffect,
  useState,
} from "react";

export default function SideButton(props: SideButtonProps) {
  const path = usePathname();

  const childHasActiveLink = props.childrenButtons?.some(
    (childButton) => childButton.href === path,
  );
  const menuExpanded = props.subMenuShown?.[props.index];

  const cloneIcon = (
    icon: ReactElement<SVGProps<SVGSVGElement>>,
    child: boolean = false,
    childHref?: string,
  ) => {
    return cloneElement(icon, {
      className: `${
        props.customColor
          ? "fill-[var(--custom-color)]!"
          : child
            ? path === childHref
              ? "fill-white"
              : "fill-primary"
            : path === props.href
              ? "fill-white"
              : menuExpanded || childHasActiveLink
                ? "fill-white"
                : "fill-primary"
      } opacity-80 size-4`,
    });
  };

  if (props.hasChildren && props.childrenButtons)
    return (
      <div>
        <button
          className={`relative z-[1] flex items-center gap-4 w-full text-sm font-primary font-bold px-[25px] py-[15px] rounded-[18px] duration-200 transition-shadow cursor-pointer group
                    ${
                      menuExpanded || childHasActiveLink
                        ? "text-white shadow-[0_5px_10px_rgba(0,0,0,0.15)]"
                        : "text-primary"
                    }`}
          onClick={() =>
            props.setSubMenuShown((s) =>
              s[props.index]
                ? [false, false, false]
                : (s.map((_, i) => props.index === i) as typeof s),
            )
          }
        >
          <div className="absolute left-0 top-0 w-full h-full rounded-[18px] bg-white -z-10 border-1 border-transparent" />
          <div
            className={`absolute left-0 top-0 w-full h-full rounded-[18px] -z-10 border-1 transition-colors duration-200
                    ${
                      menuExpanded || childHasActiveLink
                        ? "border-transparent bg-primary"
                        : "border-[oklch(from_var(--color-primary)_l_c_h_/_0.15)] group-hover:bg-[oklch(from_var(--color-primary)_l_c_h_/_.15)] group-hover:border-transparent"
                    }`}
          />
          {cloneIcon(props.icon)}
          {props.name}
        </button>

        <div
          className={`relative transition-[height] pl-8 duration-200 ease-out z-0 -top-[18px] overflow-hidden
                ${
                  menuExpanded
                    ? "h-[114px] -mb-[18px]"
                    : childHasActiveLink
                      ? "h-[66px] -mb-[18px]"
                      : "h-0"
                }`}
        >
          {childHasActiveLink && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className={`absolute top-[18px] left-0 translate-x-full size-4 transition-[opacity] duration-200 -z-10
                        ${
                          childHasActiveLink
                            ? "fill-dark-primary"
                            : "opacity-10 group-hover:opacity-20"
                        }`}
            >
              <path d="M20 20C20 8.9543 11.0457 0 0 0H20V20Z" />
              <path d="M20 20C20 8.9543 11.0457 0 0 0H20V20Z" />
            </svg>
          )}
          {props.childrenButtons.map((childButton, i) => (
            <Link
              key={`${childButton.name}`}
              className={`absolute right-0 left-8 flex items-center gap-4 text-sm border-none font-primary font-bold px-6 pb-3.5 pt-[32px] border-1 rounded-b-[18px] hover:border-transparent group cursor-pointer transition-[top_translate] duration-200 ease-out
                                ${
                                  path === childButton.href
                                    ? "text-white fill-dark-primary border-transparent"
                                    : menuExpanded
                                      ? "text-primary fill-primary"
                                      : "text-primary fill-primary -translate-y-[48px]"
                                }`}
              style={{
                zIndex: 2 - 2 * i,
                top: `${
                  menuExpanded ? i * 48 : path === childButton.href && 0
                }px`,
              }}
              href={childButton.href as any}
            >
              {i === 0 && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="absolute top-[18px] left-0 -translate-x-full size-4 fill-white"
                  >
                    <path d="M20 20C20 8.9543 11.0457 0 0 0H20V20Z" />
                    <path d="M20 20C20 8.9543 11.0457 0 0 0H20V20Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className={`absolute top-[18px] left-0 -translate-x-full size-4 transition-[opacity] duration-200
                                ${
                                  path === childButton.href
                                    ? ""
                                    : "opacity-10 group-hover:opacity-20"
                                }`}
                  >
                    <path d="M20 20C20 8.9543 11.0457 0 0 0H20V20Z" />
                    <path d="M20 20C20 8.9543 11.0457 0 0 0H20V20Z" />
                  </svg>
                </>
              )}
              <div className="absolute w-full h-full top-0 left-0 bg-white -z-10 rounded-b-[18px]" />
              <div
                className={`absolute w-full h-full top-0 left-0 -z-10 transition-[opacity] duration-200 rounded-b-[18px]
                                    ${
                                      path === childButton.href
                                        ? "bg-dark-primary"
                                        : "bg-primary opacity-10 group-hover:opacity-20"
                                    }`}
              />
              {cloneIcon(childButton.icon, true, childButton.href)}
              {childButton.name}
            </Link>
          ))}
        </div>
      </div>
    );
  else
    return (
      <Link
        className={`flex items-center gap-4 w-full text-sm
                ${
                  props.customColor
                    ? "text-[var(--custom-color)] border-[oklch(from_var(--custom-color)_l_c_h_/_0.15)] hover:bg-[oklch(from_var(--custom-color)_l_c_h_/_0.15)]"
                    : path === props.href
                      ? "text-white border-transparent bg-dark-primary"
                      : "text-primary border-[oklch(from_var(--color-primary)_l_c_h_/_0.15)] hover:bg-[oklch(from_var(--color-primary)_l_c_h_/_0.15)]"
                } font-primary font-bold px-6 py-3.5 border-1 rounded-[18px] hover:border-transparent duration-200 transition-[background] cursor-pointer`}
        style={
          {
            "--custom-color": `${props.customColor}`,
          } as React.CSSProperties
        }
        href={(props.href ?? "") as any}
      >
        {cloneIcon(props.icon)}
        {props.name}
      </Link>
    );
}
