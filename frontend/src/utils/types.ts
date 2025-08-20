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
        fullname: string;
        image: string;
    };
    message: string;
    time: string;
} & (
        { newMessage?: undefined; messagesCount?: undefined }
        | { newMessage: boolean; messagesCount: number }
    );
