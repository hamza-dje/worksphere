import NotificationProps from "@/utils/types/NotificationProps";
import Notification from "./Notification";
import { SetStateAction } from "react";

export default function NotificationContainer({
    notifications,
    notificationsShown,
    setNotificationsShown,
}: {
    notifications: Array<NotificationProps>;
    notificationsShown: boolean;
    setNotificationsShown: () => void;
}) {
    const hasNotifications = notifications.length > 0;

    return (
        <div
            className={`absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-[74px] sm:w-[320px] sm:max-md:w-[300px] max-sm:w-full max-sm:top-[calc(100%+10px)] max-sm:left-0 max-sm:px-2 flex flex-col gap-1 transition-all duration-200 ease-out ${
                !notificationsShown &&
                "-translate-y-5 opacity-0 pointer-events-none"
            }`}
        >
            <div
                className={`${
                    hasNotifications
                        ? "max-h-[260px]"
                        : "h-[80px] flex items-center justify-center"
                } no-scrollbar bg-white shadow-[0_0_27px_rgba(0,0,0,0.08)] rounded-[18px] overflow-auto`}
            >
                {hasNotifications ? (
                    notifications.map((notification, i) => (
                        <Notification key={i} {...notification} />
                    ))
                ) : (
                    <span className="text-xs font-primary opacity-20">
                        You have no notification
                    </span>
                )}
            </div>
            <div
                className={`flex ${
                    hasNotifications ? "justify-between" : "justify-end"
                } px-2`}
            >
                {hasNotifications && (
                    <button className="small-menu-button">
                        Mark all as checked
                    </button>
                )}
                <button
                    className="small-menu-button"
                    onClick={() => setNotificationsShown()}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
