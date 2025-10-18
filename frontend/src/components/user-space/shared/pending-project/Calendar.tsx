import { before } from "node:test";
import CardWrapper from "../CardWrapper";

export default function Calendar({
    deadline,
}: {
    deadline: { year: number; month: number; day: number };
}) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    function isLate() {
        const today = new Date().getDate();
        let currentMonth = new Date().getMonth();
        if (
            currentMonth > deadline.month ||
            (currentMonth === deadline.month && today > deadline.day)
        ) {
            return true;
        } else {
            return false;
        }
    }

    function arrangeDays() {
        const days = ["S", "M", "T", "W", "T", "F", "S"];
        const currentDay = new Date().getDay();
        const arrangedDays = [
            ...days.slice(currentDay),
            ...days.slice(0, currentDay),
        ];
        return arrangedDays;
    }

    function getMonthDays(year: number, month: number) {
        return new Date(year, month + 1, 0).getDate();
    }

    function calendarDays() {
        const todayDate = new Date();
        let currentYear = todayDate.getFullYear();
        let currentMonth = todayDate.getMonth();
        let day = todayDate.getDate();

        const startMonth = currentMonth;

        const days: Array<{
            number: number;
            position: "before" | "is" | "after";
            month: "current" | "next";
        }> = [];

        for (let i = 0; i < 21; i++) {
            const maxMonthDays = getMonthDays(currentYear, currentMonth);

            // rollover to next month
            if (day > maxMonthDays) {
                day = 1;
                if (currentMonth === 11) {
                    currentMonth = 0;
                    currentYear++;
                } else {
                    currentMonth++;
                }
            }

            // position relative to deadline
            let position: "before" | "is" | "after";
            if (
                currentYear < deadline.year ||
                (currentYear === deadline.year &&
                    currentMonth < deadline.month) ||
                (currentYear === deadline.year &&
                    currentMonth === deadline.month &&
                    day < deadline.day)
            ) {
                position = "before";
            } else if (
                currentYear === deadline.year &&
                currentMonth === deadline.month &&
                day === deadline.day
            ) {
                position = "is";
            } else {
                position = "after";
            }

            days.push({
                number: day,
                position,
                month: currentMonth === startMonth ? "current" : "next",
            });

            day++;
        }

        return days;
    }

    return (
        <CardWrapper
            className="gap-1!"
            customHeader={
                <div className="flex justify-between">
                    <h6 className="font-primary text-primary opacity-40 text-sm">
                        Deadline
                    </h6>
                    <h6
                        className={`font-primary font-bold text-primary text-sm ${
                            isLate() ? "text-red" : ""
                        }`}
                    >
                        {months[deadline.month]} {deadline.day}
                    </h6>
                </div>
            }
        >
            <div className="flex-1 grid grid-cols-7 grid-rows-[auto_repeat(3,_minmax(0,33px))] gap-0.5">
                {/* Header */}
                {arrangeDays().map((day, i) => (
                    <span
                        key={i}
                        className="font-primary text-[11px] text-center opacity-10"
                    >
                        {day}
                    </span>
                ))}

                {/* Calendar Days */}
                {calendarDays().map((day, i) => (
                    <div
                        key={i}
                        className={`font-primary font-bold text-xs flex justify-center items-center h-full aspect-square rounded-full mx-auto ${
                            day.position === "is"
                                ? "bg-yellow"
                                : i === 0
                                ? isLate()
                                    ? "text-red border-red border-[1.5px]"
                                    : "border-[1.5px] border-primary text-primary"
                                : day.position === "before"
                                ? "text-primary opacity-40"
                                : day.position === "after"
                                ? day.month === "next"
                                    ? "opacity-10"
                                    : "opacity-20"
                                : ""
                        }`}
                    >
                        {day.number}
                    </div>
                ))}
            </div>
        </CardWrapper>
    );
}
