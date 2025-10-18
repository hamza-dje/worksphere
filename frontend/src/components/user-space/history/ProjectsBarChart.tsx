import CardWrapper from "../shared/CardWrapper";

export default function ProjectsBarChart({
    projectsByMonth,
}: {
    projectsByMonth: {
        max: number;
        latestMonths: Array<{
            month: string;
            projects: number;
        }>;
    };
}) {
    return (
        <CardWrapper header="Projects by month">
            <div className={"flex-1 flex justify-between"}>
                {projectsByMonth.latestMonths.map((monthlyProjects, i) => (
                    <div
                        key={i}
                        className={
                            "max-sm:h-30 flex flex-col items-center gap-2 font-primary text-[11px] text-[oklch(from_var(--color-black)_l_c_h_/_.4)]"
                        }
                    >
                        <div
                            className={
                                "flex-1 flex items-end w-3.5 bg-[oklch(from_var(--color-primary)_l_c_h_/_.15)] rounded-full"
                            }
                        >
                            <span
                                className={"bg-primary rounded-full flex-1"}
                                style={{
                                    height: `${
                                        (monthlyProjects.projects /
                                            projectsByMonth.max) *
                                        100
                                    }%`,
                                }}
                            />
                        </div>
                        {monthlyProjects.month}
                    </div>
                ))}
            </div>
        </CardWrapper>
    );
}
