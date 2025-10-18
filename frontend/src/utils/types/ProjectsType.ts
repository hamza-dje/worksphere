type ProjectsType = Array<{
    name: string;
    status: "Done" | "Pending" | "Late";
    type: "Service" | "Need";
    date: string;
    deadline: string;
    cost: number;
    client: string;
}>;

export default ProjectsType;
