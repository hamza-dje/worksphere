import MessageProps from "@/utils/types/MessageProps";
import Link from "next/link";

export default function UserMessage(props: MessageProps) {
    return (
        <Link href={`/inbox/1`}>
            <div
                className={`p-4 cursor-pointer ${props.className} ${
                    props.newMessage
                        ? "bg-[oklch(from_var(--color-primary)_l_c_h_/_0.15)] hover:bg-[oklch(from_var(--color-primary)_l_c_h_/_0.25)]"
                        : "hover:bg-[oklch(from_var(--color-primary)_l_c_h_/_0.08)]"
                } duration-200 transition-colors group`}
            >
                <div className="flex gap-3 items-center group-hover:-translate-y-1 duration-200 transition-transform">
                    <div className="w-12 aspect-square bg-primary rounded-full flex-shrink-0" />
                    <div
                        className={`flex flex-1 flex-col ${
                            props.newMessage ? "" : "gap-1"
                        } min-w-0`}
                    >
                        <div className="flex justify-between">
                            <span className="font-primary font-bold text-sm">
                                {props.user.fullname}
                            </span>
                            <span className="font-primary opacity-20 text-xs">
                                {props.time} ago
                            </span>
                        </div>
                        {props.newMessage ? (
                            <>
                                <span className="truncate text-xs block opacity-40 flex-shrink mb-2 font-bold">
                                    {props.message}
                                </span>
                                <div className="flex justify-between items-center">
                                    <button className="small-menu-button bg-transparent p-0">
                                        Mark as seen
                                    </button>
                                    <span className="text-white bg-red text-xs font-primary font-medium px-[5px] py-[1px] rounded-full">
                                        {props.messagesCount}
                                    </span>
                                </div>
                            </>
                        ) : (
                            <div className="flex justify-between items-center">
                                <span className="truncate max-w-[90%] text-xs block opacity-40 flex-shrink">
                                    {props.message}
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 19 13"
                                    className="fill-black opacity-20 size-4"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.76244 6.6696C1.84002 6.53452 1.94704 6.35651 2.08341 6.14833C2.40776 5.65317 2.89377 4.99403 3.53921 4.33714C4.83611 3.01724 6.71802 1.76211 9.18978 1.76211C11.6615 1.76211 13.5434 3.01724 14.8403 4.33714C15.4858 4.99403 15.9718 5.65317 16.2962 6.14833C16.4325 6.35651 16.5395 6.53452 16.6171 6.6696C16.5395 6.80468 16.4325 6.98268 16.2962 7.19086C15.9718 7.68602 15.4858 8.34516 14.8403 9.00205C13.5434 10.322 11.6615 11.5771 9.18978 11.5771C6.71802 11.5771 4.83611 10.322 3.53921 9.00205C2.89377 8.34516 2.40776 7.68602 2.08341 7.19086C1.94704 6.98268 1.84002 6.80468 1.76244 6.6696ZM17.3871 6.6696C18.0052 6.39098 18.0051 6.39074 18.005 6.39047L18.0038 6.38818L18.0014 6.38335L17.9936 6.36774C17.987 6.35473 17.9777 6.33656 17.9656 6.31359C17.9415 6.26766 17.9066 6.20244 17.8607 6.12068C17.7689 5.95727 17.6332 5.72725 17.4534 5.45279C17.0947 4.90512 16.556 4.1738 15.8352 3.44023C14.3997 1.97923 12.1829 0.453451 9.18978 0.453451C6.19663 0.453451 3.97987 1.97923 2.54433 3.44023C1.82354 4.1738 1.28488 4.90512 0.926126 5.45279C0.746343 5.72725 0.610645 5.95727 0.518893 6.12068C0.472991 6.20244 0.43801 6.26766 0.413938 6.31359C0.4019 6.33656 0.392583 6.35473 0.385985 6.36774L0.378126 6.38335L0.375723 6.38818L0.374904 6.38984C0.374773 6.3901 0.374339 6.39098 0.992432 6.6696C0.374339 6.94821 0.374459 6.94845 0.37459 6.94872L0.375723 6.95101L0.378126 6.95585L0.385985 6.97146C0.392583 6.98447 0.4019 7.00263 0.413938 7.0256C0.43801 7.07154 0.472991 7.13676 0.518893 7.21851C0.610645 7.38192 0.746343 7.61194 0.926126 7.8864C1.28488 8.43408 1.82354 9.16539 2.54433 9.89896C3.97987 11.36 6.19663 12.8857 9.18978 12.8857C12.1829 12.8857 14.3997 11.36 15.8352 9.89896C16.556 9.16539 17.0947 8.43408 17.4534 7.8864C17.6332 7.61194 17.7689 7.38192 17.8607 7.21851C17.9066 7.13676 17.9415 7.07154 17.9656 7.0256C17.9777 7.00263 17.987 6.98447 17.9936 6.97146L18.0014 6.95585L18.0038 6.95101L18.005 6.94872C18.0051 6.94845 18.0052 6.94821 17.3871 6.6696ZM17.3871 6.6696L18.005 6.39047C18.0917 6.56694 18.0917 6.77226 18.005 6.94872L17.3871 6.6696ZM0.992432 6.6696L0.374904 6.38984C0.288211 6.5663 0.287897 6.77226 0.37459 6.94872L0.992432 6.6696ZM5.77422 6.6696C5.77422 8.52889 7.26499 10.1048 9.18978 10.1048C11.1146 10.1048 12.6053 8.52889 12.6053 6.6696C12.6053 4.8103 11.1146 3.23436 9.18978 3.23436C7.26499 3.23436 5.77422 4.8103 5.77422 6.6696ZM9.18978 8.79617C8.09638 8.79617 7.14044 7.88201 7.14044 6.6696C7.14044 5.45718 8.09638 4.54302 9.18978 4.54302C10.2832 4.54302 11.2391 5.45718 11.2391 6.6696C11.2391 7.88201 10.2832 8.79617 9.18978 8.79617Z"
                                    />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
