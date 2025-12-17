"use client";
import Image from "next/image";
import { useEffect, useReducer, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MessagesContainer from "./navbar-components/messages/MessagesContainer";
import NotificationContainer from "./navbar-components/notifications/NotificationsContainer";
import UserMenu from "./navbar-components/user-menu/UserMenu";
import MenuShownType from "@/utils/types/MenuShownType";
import NavbarReducerAction from "@/utils/types/NavbarReducerAction";
import { getProfile } from "@/api/rest/services/user";
import toast from "react-hot-toast";
import { PortfolioDto, SignUpDto } from "@/utils/types/validation/user";
import { getPortfolio } from "@/api/rest/services/portfolio";
import { notificationDto } from "@/utils/types/validation/notification";
import { getNotification } from "@/api/rest/services/notification";
import { getMessages } from "@/api/rest/services/messages";
import { messageDto } from "@/utils/types/validation/messages";
import { useUserStore } from "@/store/store";

type MenuKey = keyof MenuShownType;

export default function Navbar() {
  const setId = useUserStore((state) => state.setId);
  const [notifications, setNotifications] = useState<notificationDto[]>([]);
  const [messages, setMessages] = useState<messageDto[]>([]);
  const [profile, setProfile] = useState<SignUpDto>({
    firstName: "",
    lastName: "",
    email: "",
    role: "freelancer",
    id: undefined,
  });
  const [portfolio, setPortfolio] = useState<{
    dto: PortfolioDto;
    photo: string;
  }>({
    dto: { mobile: "", description: "", location: "", portfolioLink: "" },
    photo: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      const profileResult = await getProfile();
      if ((profileResult as any).error) {
        toast.error(`Can't get profile: ${(profileResult as any).error}`);
        return;
      }
      setProfile(profileResult as SignUpDto);

      const userId = (profileResult as SignUpDto).id;
      if (!userId) return;       
      setId(userId);
      
      const portfolioResult = await getPortfolio(userId);
    
      if ((portfolioResult as any).error) {
        toast.error(`Can't get portfolio: ${(portfolioResult as any).error}`);
      } else {
        setPortfolio(portfolioResult as { dto: PortfolioDto; photo: string });
        
      }

      const notificationResult = await getNotification(userId);
      if ((notificationResult as any).error) {
        toast.error(
          `Can't get your notifications: ${(notificationResult as any).error}`
        );
      } else {
        setNotifications(notificationResult as notificationDto[] | any);
      }

      const messagesResult = await getMessages();
      if ((messagesResult as any).error) {
        toast.error(
          `Can't get your messages: ${(messagesResult as any).error}`
        );
      } else {
        setMessages(messagesResult as messageDto[] | any);
      }
    };

    fetchData();
  }, []);

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

  // const notificationtest: notificationDto[] = [
  //   {
  //     purpose: "New Message",
  //     message: "You have a new message from John.",

  //     checked: false,
  //   },
  //   {
  //     purpose: "Project Update",
  //     message: "Your project has been approved.",

  //     checked: true,
  //   },
  // ];
  return (
    <div className="z-10 w-full py-5 shadow-[0_0_27px_rgba(0,0,0,0.08)] rounded-b-[36px] flex justify-between px-[140px] max-lg:px-[60px] max-sm:px-6 sticky top-0 right-0 left-0 bg-white">
      <Link href="/frl">
        <div className="flex gap-3.5 items-center">
          <Image src="/logo.svg" width={46} height={40} alt="Logo" priority />
          <span className="font-bold font-primary bg-gradient-to-r from-green to-blue bg-clip-text text-transparent text-[27px] max-sm:hidden">
            Work
            <span className="font-black font-primary text-transparent">
              Spher
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
                onClick={() => dispatch({ type: "toggleMessages" })}
              />
              <span className="text-white bg-red absolute top-0 -translate-y-[50%] right-0 text-xs font-primary font-medium px-[5px] py-[1px] translate-x-2 border-3 border-white rounded-full">
                {messages.length}
              </span>
            </span>

            <MessagesContainer
              messagesShown={state.messagesMenu}
              messages={messages.slice(0, 5)}
              setMessagesShown={() => dispatch({ type: "toggleMessages" })}
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
              onClick={() => dispatch({ type: "toggleNotifications" })}
            />
            <span className="text-white bg-red absolute top-0 -translate-y-[50%] right-0 text-xs font-primary font-medium px-[5px] py-[1px] translate-x-2 border-3 border-white rounded-full">
              {notifications.length}
            </span>
          </span>

          <NotificationContainer
            notifications={notifications.map((notification) => ({
              purpose: notification.purpose,
              message: notification.message,
              time: notification.createdAt
                ? new Date(notification.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "",
              checked: notification.checked,
            }))}
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
            <div className="w-[44px] aspect-square rounded-full bg-primary">
             {portfolio.photo ? (
    <Image
      src={portfolio.photo}
      alt={`${profile.firstName} ${profile.lastName}`}
      className="rounded-full w-full h-full"
      width={200}
      height={200}
      // Add unoptimized temporarily to rule out Next.js Image processing issues
      unoptimized={true} 
      onError={(e) => console.error("Image failed to load:", e)}
    />
  ) : (
    // Visual feedback if image string is empty
    <span className="text-xs text-white flex items-center justify-center h-full">
       No Img
    </span>
  )}
            </div>
            <div className="flex flex-col max-md:hidden">
              <span className="font-primary font-bold text-sm text-primary">
                {profile.firstName}
              </span>
              <span className="text-xs text-primary">{profile.lastName}</span>
            </div>
          </div>

          <UserMenu
            userMenuShown={state.userMenu}
            setUserShown={() => dispatch({ type: "toggleUser" })}
          />
        </div>
      </div>
    </div>
  );
}
