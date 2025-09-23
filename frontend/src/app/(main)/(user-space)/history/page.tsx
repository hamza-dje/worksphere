"use client";
import ProjectsContainer from "@/components/user-space/history/ProjectsContainer";
import NumberCard from "@/components/user-space/shared/NumberCard";
import ProjectsBarChart from "@/components/user-space/history/ProjectsBarChart";
import ProjectsLineChart from "@/components/user-space/history/ProjectsLineChart";
import ProjectsType from "@/utils/types/ProjectsType";
import useUserRole from "@/hooks/useUserRole";
import CardWrapper from "@/components/user-space/shared/CardWrapper";

export default function HistoryPage() {
    const userRole = useUserRole();

    const projects: ProjectsType = [
        {
            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
            status: "Pending",
            type: "Service",
            date: "Apr 14 2024",
            deadline: "Apr 14 2024",
            cost: 120,
            client: "string",
        },
        {
            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
            status: "Done",
            type: "Service",
            date: "Apr 14 2024",
            deadline: "Apr 14 2024",
            cost: 1000,
            client: "string",
        },
        {
            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
            status: "Done",
            type: "Need",
            date: "Apr 14 2024",
            deadline: "Apr 14 2024",
            cost: 200,
            client: "string",
        },
        {
            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
            status: "Done",
            type: "Service",
            date: "Apr 14 2024",
            deadline: "Apr 14 2024",
            cost: 500,
            client: "string",
        },
    ];
    const projectsByMonth = {
        max: 6,
        latestMonths: [
            {
                month: "Mar",
                projects: 4,
            },
            {
                month: "Apr",
                projects: 3,
            },
            {
                month: "May",
                projects: 6,
            },
            {
                month: "Jun",
                projects: 2,
            },
            {
                month: "Jul",
                projects: 4,
            },
            {
                month: "Aug",
                projects: 5,
            },
        ],
    };

    return (
        <>
            <NumberCard header="Projects" value={214} margin="-21%" />
            <ProjectsBarChart projectsByMonth={projectsByMonth} />
            {userRole === "freelancer" ? (
                <ProjectsLineChart />
            ) : (
                <div className="flex flex-col gap-2 max-lg:col-span-full max-lg:flex-row">
                    <CardWrapper
                        header="Pending Projects"
                        className="flex-row justify-between items-center flex-1 lg:rounded-b-lg max-lg:rounded-r-lg max-sm:p-5"
                        href="/pending"
                    >
                        <div className="font-primary font-bold text-4xl text-primary max-sm:text-2xl">
                            3
                        </div>
                    </CardWrapper>
                    <CardWrapper
                        header="Active Needs"
                        className="flex-row justify-between items-center flex-1 lg:rounded-t-lg max-lg:rounded-l-lg max-sm:p-5"
                        href="/my-needs"
                    >
                        <div className="font-primary font-bold text-4xl text-primary flex items-center gap-2 max-sm:text-2xl">
                            25
                        </div>
                    </CardWrapper>
                </div>
            )}
            <ProjectsContainer projects={projects} userRole={userRole} />
        </>
    );
}
