import NumberCard from "@/components/user-space/shared/NumberCard";
import MyServicesContainer from "@/components/user-space/services/MyServicesContainer";
import CardWrapper from "@/components/user-space/shared/CardWrapper";

export default function ServicesPage() {
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

    const positive = true;

    return (
        <>
            <NumberCard header="Profit" value="$1000" margin="+25%" />

            <CardWrapper header={"Skills/Services Ratio"}>
                <div className="flex flex-col justify-between max-sm:gap-3 flex-1 mt-1">
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

            <div className="flex flex-col gap-2 max-lg:col-span-full max-lg:flex-row">
                <CardWrapper
                    header="Service Count"
                    className="flex-row justify-between items-center flex-1 lg:rounded-b-lg max-lg:rounded-r-lg max-sm:p-5"
                >
                    <div className="font-primary font-bold text-4xl text-primary max-sm:text-2xl">
                        3
                    </div>
                </CardWrapper>
                <CardWrapper
                    header="Sold"
                    className="flex-row justify-between items-center flex-1 lg:rounded-t-lg max-lg:rounded-l-lg max-sm:p-5"
                >
                    <div className="font-primary font-bold text-4xl text-primary flex items-center gap-2 max-sm:text-2xl">
                        25
                        <div
                            className={`w-9 max-sm:w-6 aspect-square rounded-full flex items-center justify-center
                                ${
                                    positive
                                        ? "bg-green"
                                        : "bg-alternative-red rotate-180"
                                }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="20"
                                viewBox="0 0 19 20"
                                className="fill-white size-[18px] max-sm:size-3"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.520413 9.07107L8.47536 1.11612C8.96352 0.627962 9.75498 0.627962 10.2431 1.11612L18.1981 9.07107C18.6862 9.55922 18.6862 10.3507 18.1981 10.8388C17.7099 11.327 16.9185 11.327 16.4303 10.8388L10.6092 5.01777L10.6092 18C10.6092 18.6904 10.0496 19.25 9.35925 19.25C8.66889 19.25 8.10925 18.6904 8.10925 18L8.10925 5.01777L2.28818 10.8388C1.80002 11.327 1.00857 11.327 0.520413 10.8388C0.0322576 10.3507 0.0322576 9.55922 0.520413 9.07107Z"
                                />
                            </svg>
                        </div>
                    </div>
                </CardWrapper>
            </div>

            <MyServicesContainer />
        </>
    );
}
