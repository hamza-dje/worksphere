import formatValue from "@/utils/functions/formatValue";
import CardWrapper from "../../shared/CardWrapper";

export default function MyServices({
    services,
}: {
    services: Array<{
        name: string;
        skill: string;
        sold: number;
        cost: number;
    }>;
}) {
    return (
        <CardWrapper
            header="My Services"
            className="sm:col-span-2 overflow-x-auto"
        >
            <table>
                <thead>
                    <tr>
                        <th className="w-[260px]">Name</th>
                        <th>Skill</th>
                        <th className="text-center">Sold</th>
                        <th className="text-end">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service, i) => (
                        <tr key={i}>
                            <td className="truncate block w-[240px]">
                                {service.name}
                            </td>
                            <td className="opacity-60">{service.skill}</td>
                            <td className="text-center">{service.sold}</td>
                            <td className="text-end font-bold text-green">
                                +${formatValue(service.cost)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </CardWrapper>
    );
}
