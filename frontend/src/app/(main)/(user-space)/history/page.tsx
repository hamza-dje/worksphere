import ProjectsContainer from "@/components/user-space/history/ProjectsContainer";
import NumberCard from "@/components/user-space/shared/NumberCard";
import ProjectsBarChart from "@/components/user-space/history/ProjectsBarChart";
import ProjectsLineChart from "@/components/user-space/history/ProjectsLineChart";
import ProjectsType from "@/utils/types/ProjectsType";

export default function HistoryPage() {
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
            <ProjectsLineChart />
            <ProjectsContainer projects={projects} />
        </>
    );
}
