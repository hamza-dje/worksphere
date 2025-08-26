import CardWrapper from "../CardWrapper";
import DonutArcs from "./DonutChart";

export default function SkillsPie(
    {
        skills
    }: {
        skills: Array<Record<string, number>>
    }) {
    const colors = ['green', 'blue', 'alternative-red'];

    return (
        <CardWrapper
            header="Skills By Project Ratio"
            className="lg:row-span-2 sm:max-lg:col-span-2"
        >
            <div className="flex lg:flex-col flex-1 lg:mt-5 lg:justify-between max-sm:justify-between max-lg:justify-evenly items-center">
                <div className="w-fit lg:mx-auto max-sm:pr-5">
                    <DonutArcs
                        data={skills.map(skill => Object.values(skill)[0]) as [number, number, number]}
                        gapDeg={24}
                        strokeWidth={24}
                        startAngleDeg={-90}
                        colors={colors as [string, string, string]}
                    />
                </div>
                <div className="flex flex-col lg:w-full lg:gap-2.5 max-lg:justify-evenly max-lg:h-full max-lg:w-1/3 max-sm:w-2/3">
                    {
                        skills.map((skill, i) => {
                            const [name, value] = Object.entries(skill)[0];
                            return <div key={i} className="flex justify-between">
                                <span className="flex items-center gap-2 font-primary text-xs">
                                    <div
                                        className="w-2.5 aspect-square rounded-full"
                                        style={{
                                            backgroundColor: `var(--color-${colors[i]})`
                                        }}
                                    />
                                    {name}
                                </span>
                                <span className="font-primary text-xs">
                                    {value}
                                </span>
                            </div>
                        })
                    }
                </div>
            </div>
        </CardWrapper>
    );
}