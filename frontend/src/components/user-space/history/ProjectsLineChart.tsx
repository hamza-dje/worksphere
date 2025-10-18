import CardWrapper from "../shared/CardWrapper";

export default function ProjectsLineChart() {
    const skills = [
        { "Graphic design": 12 },
        { "Graphic design": 12 },
        { "Graphic design": 12 },
    ];
    const colors = ["green", "alternative-red", "blue"];
    const skillsAsNumber = skills.map(
        (skill) => Object.values(skill)[0] as number
    );
    const total = skillsAsNumber.reduce((a, b) => a + b, 0);

    return (
        <CardWrapper
            header={"Skills/Projects Ratio"}
            className={"sm:max-lg:hidden"}
        >
            <div className="flex flex-col justify-between max-lg:gap-3 flex-1 mt-1">
                <div className="flex gap-1.5">
                    {skillsAsNumber.map((skill, i) => (
                        <span
                            key={i}
                            className="h-2 rounded-full"
                            style={{
                                width: `${(skill / total) * 100}%`,
                                backgroundColor: `var(--color-${colors[i]})`,
                            }}
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-2.5">
                    {skills.map((skill, i) => {
                        const [name, value] = Object.entries(skill)[0];
                        return (
                            <div key={i} className="flex justify-between">
                                <span className="flex items-center gap-2 font-primary text-xs">
                                    <div
                                        className="w-2.5 aspect-square rounded-full"
                                        style={{
                                            backgroundColor: `var(--color-${colors[i]})`,
                                        }}
                                    />
                                    {name}
                                </span>
                                <span className="font-primary text-xs">
                                    {value}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </CardWrapper>
    );
}
