import { formatValue } from "@/utils/functions";
import CardWrapper from "../CardWrapper";
import StatusLabel from "../StatusLabel";

export default function LatestProjects({
    projects
}: {
    projects: Array<{ name: string, status: 'Done' | 'Pending' | 'Late', type: 'Service' | 'Need', date: string, deadline: string, cost: number, client: string }>
}) {
    return (
        <CardWrapper
            header="Latest Projects"
            className="col-span-full overflow-x-auto"
        >
            <table>
                <thead>
                    <tr>
                        <th className="w-[240px]">Project name</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Start date</th>
                        <th>Deadline</th>
                        <th>Final cost</th>
                        <th>Client</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map((project, i) =>
                            <tr key={i}>
                                <td className="truncate block w-[200px]">{project.name}</td>
                                <td><StatusLabel status={project.status} /></td>
                                <td className="opacity-60">{project.type}</td>
                                <td>{project.date}</td>
                                <td>{project.deadline}</td>
                                <td className="font-bold text-green">+${formatValue(project.cost)}</td>
                                <td>{project.client}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </CardWrapper>
    );
}