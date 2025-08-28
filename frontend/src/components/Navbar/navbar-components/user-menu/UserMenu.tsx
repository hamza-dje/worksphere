import { SetStateAction } from "react";
import MenuButton from "./MenuButton";
import { MenuShownType } from "@/utils/types";

export default function UserMenu({
    userMenuShown,
    setUserShown
}: {
    userMenuShown: boolean,
    setUserShown: () => void
}) {
    return (
        <div
            className={`absolute sm:top-[80px] lg:right-[50%] max-lg:right-0 lg:translate-x-[50%] w-[360px] grid grid-cols-2 gap-x-2.5 max-sm:px-2 max-sm:top-[calc(100%+10px)] max-sm:w-full ${userMenuShown
                ? "gap-y-2.5"
                : "gap-y-0 pointer-events-none -translate-y-5 opacity-0"
                } transition-all duration-200 ease-out`}
        >
            <MenuButton name="Dashboard" />
            <MenuButton name="Working On" />
            <MenuButton name="My Services" href="services" />
            <MenuButton name="Withdraw" />
            <MenuButton name="Profile" />
            <MenuButton name="Account" />
            <button className="normal-button col-span-2 my-2">
                Post a service
            </button>
            <MenuButton
                name="Get Support"
                className="border-[oklch(from_var(--color-blue)_l_c_h_/_0.15)]! text-blue! hover:shadow-[0_4px_14px_oklch(from_var(--color-blue)_l_c_h_/_0.2)]! hover:border-white! focus:bg-blue! focus:text-white!"
                imageClassName="bg-blue! group-focus:bg-white!"
                href="support"
            />
            <MenuButton
                name="Log Out"
                className="border-[oklch(from_var(--color-alternative-red)_l_c_h_/_0.15)]! text-alternative-red! hover:shadow-[0_4px_14px_oklch(from_var(--color-alternative-red)_l_c_h_/_0.2)]! hover:border-white! focus:bg-alternative-red! focus:text-white!"
                imageClassName="bg-alternative-red! group-focus:bg-white!"
                href="logout"
            />
            <button
                onClick={() => setUserShown()}
                className="small-menu-button absolute right-1 -bottom-8"
            >
                Close
            </button>
        </div>
    );
}