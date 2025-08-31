import React, { SetStateAction } from "react";

export type ClientNeedCardProps = {
    title: string,
    priceRange: [start: number, end: number],
    category: string,
    time: number,
    bids: number,
    description: string,
    skills: string[],
    clientName: string
};

export type NavbarReducerAction = {
    type: 'toggleMessages' | 'toggleNotifications' | 'toggleUser'
};

export type NotificationProps = {
    title: string,
    time: string,
    description: string,
    notChecked?: boolean
};

export type MenuShownType = {
    messagesMenu: boolean,
    notificationMenu: boolean,
    userMenu: boolean
};

export type MessageProps = {
    user: {
        fullname: string,
        image: string
    },
    message: string,
    time: string
} & (
        { newMessage?: undefined; messagesCount?: undefined }
        | { newMessage: boolean; messagesCount: number }
    );

export type SideButtonProps = {
    icon: React.ReactElement<React.SVGProps<SVGSVGElement>>,
    name: string,
    customColor?: string,
    href?: string
} & (
        { index?: undefined, subMenuShown?: undefined, setSubMenuShown?: undefined, hasChildren?: undefined, childrenButtons?: undefined }
        | { index: number, subMenuShown: [boolean, boolean, boolean], setSubMenuShown: React.Dispatch<SetStateAction<[boolean, boolean, boolean]>>, hasChildren: true, childrenButtons: Array<{ icon: React.ReactElement<React.SVGProps<SVGSVGElement>>, name: string, href: string }> }
    );

export type ProjectsType = Array<{
    name: string,
    status: 'Done' | 'Pending' | 'Late',
    type: 'Service' | 'Need',
    date: string,
    deadline: string,
    cost: number,
    client: string
}>