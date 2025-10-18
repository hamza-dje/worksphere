"use client";
import SideButtonProps from "@/utils/types/SideButtonProps";
import SideButton from "./SideButton";
import {
    DashboardIcon,
    HistoryIcon,
    InboxIcon,
    LogOutIcon,
    ModifyAccountIcon,
    ModifyProfileIcon,
    MovementsIcon,
    MyAccountIcon,
    MyFinancesIcon,
    MyProjectsIcon,
    MyServicesIcon,
    WithdrawIcon,
    WorkingOnIcon,
} from "./sidebar-icons/Icons";
import { useState } from "react";
import useUserRole from "@/hooks/useUserRole";

export default function Sidebar() {
    const userRole = useUserRole();
    const [subMenuShown, setSubMenuShown] = useState<
        [boolean, boolean, boolean]
    >([false, false, false]);

    const mainSideButtons: Array<SideButtonProps> = [
        {
            icon: <DashboardIcon />,
            name: "Dashboard",
            href: "/dashboard",
        },
        {
            icon: <MyProjectsIcon />,
            name: "My Projects",
            index: 0,
            subMenuShown: subMenuShown,
            setSubMenuShown: setSubMenuShown,
            hasChildren: true,
            childrenButtons: [
                {
                    icon: <WorkingOnIcon />,
                    name: userRole === "freelancer" ? "Working On" : "Pending",
                    href:
                        userRole === "freelancer" ? "/working-on" : "/pending",
                },
                {
                    icon: <HistoryIcon />,
                    name: "History",
                    href: "/history",
                },
            ],
        },
        {
            icon: <MyServicesIcon />,
            name: `My ${userRole === "freelancer" ? "Services" : "Needs"}`,
            href: `/my-${userRole === "freelancer" ? "services" : "needs"}`,
        },
        {
            icon: <MyAccountIcon />,
            name: "My Account",
            hasChildren: true,
            index: 2,
            subMenuShown: subMenuShown,
            setSubMenuShown: setSubMenuShown,
            childrenButtons: [
                {
                    icon: <ModifyProfileIcon />,
                    name: "Modify Profile",
                    href: "/profile",
                },
                {
                    icon: <ModifyAccountIcon />,
                    name: "Modify Account",
                    href: "/account",
                },
            ],
        },
    ];

    const otherSideButtons: SideButtonProps[] = [
        {
            icon: <InboxIcon />,
            name: "Inbox",
            customColor: "var(--color-blue)",
            href: "/inbox",
        },
        {
            icon: <LogOutIcon />,
            name: "Log Out",
            customColor: "var(--color-red)",
        },
    ];

    return (
        <div className="flex-1 flex flex-col justify-between pb-5 max-xl:fixed max-xl:left-0 max-xl:bottom-3 max-xl:top-[90px] max-xl:bg-white max-xl:z-[2] max-xl:p-4 max-xl:w-[300px] max-xl:shadow-[0_0_27px_rgba(0,0,0,0.08)] max-xl:rounded-r-3xl max-xl:-translate-x-[calc(100%-26px)] max-xl:hover:translate-x-0 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <div>
                <h4 className="font-primary text-xs opacity-20 ml-5 mb-1">
                    Main
                </h4>
                <nav className="flex flex-col gap-2.5">
                    {mainSideButtons.map((sideButton, i) => (
                        <SideButton key={`main-${i}`} {...sideButton} />
                    ))}
                </nav>
            </div>
            <div>
                <h4 className="font-primary text-xs opacity-20 ml-5 mb-1">
                    Other
                </h4>
                <nav className="flex flex-col gap-2.5">
                    {otherSideButtons.map((otherSideButton, i) => (
                        <SideButton key={`other-${i}`} {...otherSideButton} />
                    ))}
                </nav>
            </div>
        </div>
    );
}
