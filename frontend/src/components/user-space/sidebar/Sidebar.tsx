import { SideButtonProps } from "@/utils/types";
import SideButton from "./SideButton";
import { DashboardIcon, HistoryIcon, InboxIcon, LogOutIcon, MyAccountIcon, MyFinancesIcon, MyProjectsIcon, MyServicesIcon, WorkingOnIcon } from "./sidebar-icons/Icons";

const mainSideButtons: SideButtonProps[] = [
    {
        icon: <DashboardIcon />,
        name: "Dashboard",
        href: '/dashboard'
    },
    {
        icon: <MyProjectsIcon />,
        name: "My Projects",
        hasChildren: true,
        childrenButtons: [
            {
                icon: <WorkingOnIcon />,
                name: "Working On",
                href: "/working-on"
            },
            {
                icon: <HistoryIcon />,
                name: "History",
                href: "/history"
            }
        ]
    },
    {
        icon: <MyServicesIcon />,
        name: "My Services",
        href: '/my-services'
    },
    {
        icon: <MyFinancesIcon />,
        name: "My Finances"
    },
    {
        icon: <MyAccountIcon />,
        name: "My Account"
    }
];

const insightsSideButtons: SideButtonProps[] = [
    {
        icon: <InboxIcon />,
        name: "Inbox",
        customColor: "var(--color-blue)"
    },
    {
        icon: <LogOutIcon />,
        name: "Log Out",
        customColor: "var(--color-red)"
    }
];

export default function Sidebar() {
    return (
        <div className="flex-1 flex flex-col justify-between pb-5">
            <div>
                <h4 className="font-primary text-xs opacity-20 ml-5 mb-1">Main</h4>
                <nav className="flex flex-col gap-2.5">
                    {mainSideButtons.map((sideButton, i) => <SideButton key={`main-${i}`} {...sideButton} />)}
                </nav>
            </div>
            <div>
                <h4 className="font-primary text-xs opacity-20 ml-5 mb-1">Insights</h4>
                <nav className="flex flex-col gap-2.5">
                    {insightsSideButtons.map((insightsSideButton, i) => <SideButton key={`insights-${i}`} {...insightsSideButton} />)}
                </nav>
            </div>
        </div>
    )
}