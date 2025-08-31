import ProjectsContainer from "@/components/user-space/history/ProjectsContainer";
import { ProjectsType } from "@/utils/types";

export default function HistoryPage() {
    const projects: ProjectsType = [
        {
            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
            status: "Pending",
            type: "Service",
            date: "Apr 14 2024",
            deadline: "Apr 14 2024",
            cost: 120,
            client: "string"
        },
        {
            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
            status: "Done",
            type: "Service",
            date: "Apr 14 2024",
            deadline: "Apr 14 2024",
            cost: 1000,
            client: "string"
        },
        {
            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
            status: "Done",
            type: "Need",
            date: "Apr 14 2024",
            deadline: "Apr 14 2024",
            cost: 200,
            client: "string"
        },
        {
            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
            status: "Done",
            type: "Service",
            date: "Apr 14 2024",
            deadline: "Apr 14 2024",
            cost: 500,
            client: "string"
        },
    ];

    return (
        <>
            <ProjectsContainer projects={projects} />
        </>
    );
}