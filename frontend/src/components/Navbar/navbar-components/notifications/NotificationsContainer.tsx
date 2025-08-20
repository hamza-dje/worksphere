import { MenuShownType, NotificationProps } from "@/utils/types";
import Notification from "./Notification";
import { SetStateAction } from "react";

export default function NotificationContainer({
    notifications,
    notificationsShown,
    setMenuShown
}: {
    notifications: NotificationProps[],
    notificationsShown: boolean,
    setMenuShown: React.Dispatch<SetStateAction<MenuShownType>>
}) {
    const hasNotifications = notifications.length > 0;

    return (
        <div className={`absolute left-1/2 -translate-x-1/2 top-[74px] w-[320px] flex flex-col gap-1 transition-all duration-200 ease-out ${!notificationsShown && '-translate-y-5 opacity-0 pointer-events-none'}`}>
            <div className={`${hasNotifications ? 'max-h-[260px]' : 'h-[80px] flex items-center justify-center'} no-scrollbar bg-white shadow-[0_0_27px_rgba(0,0,0,0.08)] rounded-[18px] overflow-auto`}>
                {
                    hasNotifications
                        ? notifications.map((notification, i) =>
                            <Notification
                                key={i}
                                {...notification}
                            />
                        )
                        : <span className="text-xs font-primary opacity-20">You have no notification</span>
                }
            </div>
            <div className={`flex ${hasNotifications ? 'justify-between' : 'justify-end'} px-2`}>
                {
                    hasNotifications &&
                    <button className="small-menu-button">
                        Mark all as checked
                    </button>
                }
                <button
                    className="small-menu-button"
                    onClick={() => setMenuShown(m => ({
                        messagesMenu: false,
                        notificationMenu: !m.notificationMenu,
                        userMenu: false
                    }))}
                >
                    Close
                </button>
            </div>
        </div>
    );
}