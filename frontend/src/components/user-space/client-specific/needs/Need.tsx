import OverlayButton from "@/components/OverlayButton";

export default function Need({
    name,
    description,
    skills,
    budget,
    category,
}: {
    name: string;
    description: string;
    skills: Array<string>;
    budget: { start: number; end: number };
    category: string;
}) {
    const calculateTotal = (cost: `$${number}`, sold: number) => {
        const costAsNumber = Number(cost.slice(1));
        return costAsNumber * sold;
    };

    return (
        <div className={"flex justify-between min-w-[500px] not-last:mb-3"}>
            {/* Name & description */}
            <div className={"flex flex-col max-w-1/3 min-w-1/5"}>
                <span className={"font-primary text-xs"}>{name}</span>
                <span className={"text-xs line-clamp-3 opacity-60"}>
                    {description}
                </span>
            </div>
            {/* Skills */}
            <div className={"flex flex-col"}>
                <span className={"font-primary text-xs mb-0.5"}>Skills:</span>
                {skills.map((skill, i) => (
                    <div
                        key={i}
                        className="font-primary text-[11px] opacity-40"
                    >
                        {skill}
                    </div>
                ))}
            </div>
            <div className={"flex flex-col justify-between"}>
                <span className="flex justify-between">
                    <span className={"font-primary text-xs"}>Budget:</span>
                    <span className="font-primary font-bold text-xs text-blue text-end">
                        ${budget.start}-${budget.end}
                    </span>
                </span>

                <span className="flex flex-col gap-1">
                    <span className={"font-primary text-xs"}>Category:</span>
                    <span className="font-primary text-[11px] opacity-40 text-end">
                        {category}
                    </span>
                </span>
            </div>

            {/* Buttons */}
            <div className={"flex flex-col items-center gap-2"}>
                <OverlayButton
                    mainClassName={"grid grid-cols-2 gap-5"}
                    openOverlayButton={
                        <button
                            className={
                                "normal-button text-xs px-3.5 py-2 rounded-xl"
                            }
                        >
                            Modify
                        </button>
                    }
                    overlayContent={
                        <>
                            <input
                                name={"name"}
                                placeholder={"Name"}
                                className={"col-span-full"}
                            />
                            <textarea
                                name={"description"}
                                placeholder={"Description"}
                                className={"col-span-full resize-none"}
                                rows={3}
                            />
                            <div className="relative">
                                <input
                                    type="number"
                                    name="min-budget"
                                    id="min-budget"
                                    placeholder="Min budget"
                                    className="peer w-full not-placeholder-shown:font-primary not-placeholder-shown:font-bold"
                                />
                                <label
                                    htmlFor="min-budget"
                                    className="peer-placeholder-shown:hidden font-primary font-bold absolute right-[18px] top-[50%] -translate-y-[50%] text-lg"
                                >
                                    $
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="number"
                                    name="revision-fee"
                                    id="revision-fee"
                                    placeholder="Revision fee"
                                    className="peer w-full not-placeholder-shown:font-primary not-placeholder-shown:font-bold"
                                />
                                <label
                                    htmlFor="revision-fee"
                                    className="peer-placeholder-shown:hidden font-primary font-bold absolute right-[18px] top-[50%] -translate-y-[50%] text-lg"
                                >
                                    %
                                </label>
                            </div>
                        </>
                    }
                    cancelButtonContent={"Cancel editing!"}
                    confirmButton={
                        <button className={"normal-button"}>
                            Finish modifying
                        </button>
                    }
                />
                <OverlayButton
                    openOverlayButton={
                        <button
                            className={
                                "stroke-button text-xs px-3.5 py-1.5 rounded-xl"
                            }
                        >
                            Delete
                        </button>
                    }
                    overlayContent={
                        <div
                            className={
                                "font-primary font-bold text-center mb-10"
                            }
                        >
                            You sure you want to delete your service?
                        </div>
                    }
                    cancelButtonContent={"No, keep it!"}
                    confirmButton={
                        <button className={"normal-button bg-red"}>
                            Yes, delete!
                        </button>
                    }
                />
            </div>
        </div>
    );
}
