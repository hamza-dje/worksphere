"use client";
import Image from "next/image";
import { useReducer } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MessagesContainer from "./navbar-components/messages/MessagesContainer";
import NotificationContainer from "./navbar-components/notifications/NotificationsContainer";
import UserMenu from "./navbar-components/user-menu/UserMenu";
import MenuShownType from "@/utils/types/MenuShownType";
import NavbarReducerAction from "@/utils/types/NavbarReducerAction";

type MenuKey = keyof MenuShownType;

export default function Navbar() {
    const path = usePathname();

    const toggleMenu = (state: MenuShownType, key: MenuKey): MenuShownType => {
        const isOpen = state[key];
        return {
            messagesMenu: false,
            notificationMenu: false,
            userMenu: false,
            [key]: !isOpen,
        };
    };
    const reducer = (state: MenuShownType, action: NavbarReducerAction) => {
        switch (action.type) {
            case "toggleMessages":
                return toggleMenu(state, "messagesMenu");
            case "toggleNotifications":
                return toggleMenu(state, "notificationMenu");
            case "toggleUser":
                return toggleMenu(state, "userMenu");
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, {
        messagesMenu: false,
        notificationMenu: false,
        userMenu: false,
    });

    return (
        <header className="z-10 w-full py-5 shadow-[0_0_27px_rgba(0,0,0,0.08)] rounded-b-[36px] flex justify-between px-[140px] max-lg:px-[60px] max-sm:px-6 sticky top-0 right-0 left-0 bg-white">
            <Link href="/home">
                <div className="flex gap-3.5 items-center">
                    <Image
                        src="/logo.svg"
                        width={46}
                        height={40}
                        alt="Logo"
                        priority
                    />
                    <span className="font-bold font-primary bg-gradient-to-r from-green to-blue bg-clip-text text-transparent text-[27px] max-sm:hidden">
                        Work
                        <span className="font-black font-primary text-transparent">
                            Wave
                        </span>
                    </span>
                </div>
            </Link>

            <div className="flex items-center gap-5 [&>span>span>img]:hover:drop-shadow-[0_0_6px_rgba(0,0,0,0.2)] [&>span>span>img]:cursor-pointer">
                {/* Messages */}
                {!path.startsWith("/inbox") && (
                    <span className="sm:relative">
                        <span className="relative">
                            <img
                                src="/navbar/msg.svg"
                                alt="Messages"
                                className="h-[30px] duration-150 transition"
                                loading="eager"
                                onClick={() =>
                                    dispatch({ type: "toggleMessages" })
                                }
                            />
                            <span className="text-white bg-red absolute top-0 -translate-y-[50%] right-0 text-xs font-primary font-medium px-[5px] py-[1px] translate-x-2 border-3 border-white rounded-full">
                                2
                            </span>
                        </span>

                        <MessagesContainer
                            messagesShown={state.messagesMenu}
                            messages={[
                                {
                                    message:
                                        "message message message message message message",
                                    user: {
                                        fullname: "Hamza Djedidi",
                                        image: "image",
                                    },
                                    time: "5m",
                                    newMessage: true,
                                    messagesCount: 2,
                                },
                                {
                                    message:
                                        "message message message message message message",
                                    user: {
                                        fullname: "Hamza Djedidi",
                                        image: "image",
                                    },
                                    time: "5m",
                                },
                                {
                                    message:
                                        "message message message message message message",
                                    user: {
                                        fullname: "Hamza Djedidi",
                                        image: "image",
                                    },
                                    time: "5m",
                                },
                                {
                                    message:
                                        "message message message message message message",
                                    user: {
                                        fullname: "Hamza Djedidi",
                                        image: "image",
                                    },
                                    time: "5m",
                                },
                            ]}
                            setMessagesShown={() =>
                                dispatch({ type: "toggleMessages" })
                            }
                        />
                    </span>
                )}

                {/* Notifications */}
                <span className="sm:relative sm:mr-4">
                    <span className="relative">
                        <img
                            src="/navbar/bell.svg"
                            alt="Notifications"
                            className="h-[30px] duration-150 transition"
                            loading="eager"
                            onClick={() =>
                                dispatch({ type: "toggleNotifications" })
                            }
                        />
                        <span className="text-white bg-red absolute top-0 -translate-y-[50%] right-0 text-xs font-primary font-medium px-[5px] py-[1px] translate-x-2 border-3 border-white rounded-full">
                            2
                        </span>
                    </span>

                    <NotificationContainer
                        notifications={[
                            {
                                title: "Project added",
                                time: "5m",
                                description:
                                    "Lorum ipsum dolor sit amet was added to your projects list.",
                                notChecked: true,
                            },
                            {
                                title: "Project added",
                                time: "5m",
                                description:
                                    "Lorum ipsum dolor sit amet was added to your projects list.",
                            },
                            {
                                title: "Project added",
                                time: "5m",
                                description:
                                    "Lorum ipsum dolor sit amet was added to your projects list.",
                            },
                        ]}
                        notificationsShown={state.notificationMenu}
                        setNotificationsShown={() =>
                            dispatch({ type: "toggleNotifications" })
                        }
                    />
                </span>

                {/* User */}
                <div className="sm:relative">
                    <div
                        className="flex items-center gap-[18px] cursor-pointer"
                        onClick={() => dispatch({ type: "toggleUser" })}
                    >
                        <div className="w-[44px] aspect-square rounded-full bg-primary"></div>
                        <div className="flex flex-col max-md:hidden">
                            <span className="font-primary font-bold text-sm text-primary">
                                Hamza Djedidi
                            </span>
                            <span className="text-xs text-primary">
                                Graphic Designer
                            </span>
                        </div>
                    </div>

                    <UserMenu
                        userMenuShown={state.userMenu}
                        setUserShown={() => dispatch({ type: "toggleUser" })}
                    />
                </div>
            </div>
        </header>
    );
}
