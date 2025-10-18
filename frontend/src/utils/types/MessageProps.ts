type MessageProps = {
    className?: string;
    user: {
        fullname: string;
        image: string;
    };
    message: string;
    time: string;
} & (
    | { newMessage?: undefined; messagesCount?: undefined }
    | { newMessage: boolean; messagesCount: number }
);

export default MessageProps;
