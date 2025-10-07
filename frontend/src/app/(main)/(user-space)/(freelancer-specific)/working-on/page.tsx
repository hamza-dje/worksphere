import UserMessage from "@/components/inbox/UserMessage";
import Calendar from "@/components/user-space/shared/pending-project/Calendar";
import CardWrapper from "@/components/user-space/shared/CardWrapper";
import NumberCard from "@/components/user-space/shared/NumberCard";
import MessageCard from "@/components/user-space/shared/pending-project/MessageCard";

export default function WorkingOnPage() {
    return (
        <>
            <NumberCard
                header="Estimated Earnings"
                value="$120"
                customFooter={
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <span className="font-primary font-medium text-lg opacity-20">
                                +0%
                            </span>
                            <span className="font-primary text-xs opacity-20">
                                No updates
                            </span>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-primary font-medium text-lg text-green">
                                -0%
                            </span>
                            <span className="font-primary text-xs opacity-20">
                                No delay
                            </span>
                        </div>
                    </div>
                }
            />

            <Calendar
                deadline={{ year: new Date().getFullYear(), month: 9, day: 10 }}
            />

            <CardWrapper
                header="Contact Client"
                className="justify-between"
                href="/inbox"
            >
                <MessageCard
                    user={{ fullname: "Hamza Djedidi", image: "siu" }}
                    time="8m"
                    message="Lorem ipsum dolor dit emet lorem ipsum dolor dit emet lorem ipsum dolor dit emet lorem ipsum dolor dit emet"
                    newMessage
                    messagesCount={2}
                />
                <p className="font-primary text-xs opacity-20 self-end">
                    Go to inbox
                </p>
            </CardWrapper>

            {/* TODO: Finish implementing Deliverables component */}
            <CardWrapper header="Deliverables" className="col-span-full">
                <div></div>
            </CardWrapper>
        </>
    );
}
