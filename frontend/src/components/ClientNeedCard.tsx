import ClientNeedCardProps from "@/utils/types/ClientNeedCardProps";
import OverlayButton from "./OverlayButton";

export default function ClientNeedCard(props: ClientNeedCardProps) {
    return (
        <div className="border-1 border-[oklch(from_var(--color-black)_l_c_h_/_0.1)] px-10 py-9 max-sm:p-6 md:px-[84px] md:py-[40px] rounded-[36px] mb-[50px]">
            <div className="flex justify-between gap-7">
                <h2 className="font-primary font-extrabold text-primary md:text-[28px]">
                    {props.title}
                </h2>
                <span className="font-primary font-extrabold text-primary md:text-[28px] text-nowrap max-sm:hidden">
                    ${props.priceRange[0]} - ${props.priceRange[1]}
                </span>
                <div className="flex flex-col sm:hidden">
                    <span className="font-primary font-extrabold text-primary text-nowrap -mb-1">
                        ${props.priceRange[0]}
                    </span>
                    <span className="font-primary font-extrabold text-primary text-nowrap">
                        ${props.priceRange[1]}
                    </span>
                </div>
            </div>

            <div className="flex justify-between opacity-50 mb-[24px]">
                <span className="font-primary text-primary md:text-lg text-xs">
                    {props.category}
                </span>
                <span className="font-primary text-primary md:text-lg text-xs">
                    {props.time} hours ago
                    {props.bids &&
                        `, ${props.bids} bid${props.bids > 1 && "s"}`}
                </span>
            </div>

            <div className="flex flex-col max-sm:flex-col-reverse">
                <p className="text-xl max-md:text-sm max-md:tracking-wide text-black mb-[30px] md:leading-8">
                    {props.description}
                </p>

                <div className="flex gap-[8px] flex-wrap mb-[40px] max-sm:mb-4 max-md:gap-1.5">
                    {props.skills.map((skill, i) => (
                        <span
                            key={i}
                            className="bg-[oklch(from_var(--color-primary)_l_c_h_/_0.15)] px-[18px] py-[10px] font-primary font-medium text-xs rounded-full max-md:text-[10px] max-md:px-3 max-md:py-1.5"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex justify-between">
                <div className="flex items-center gap-[18px] max-md:gap-2.5">
                    <div className="w-9 max-md:w-7 aspect-square rounded-full bg-primary" />
                    <h3 className="font-primary text-[18px] max-md:text-sm">
                        {props.clientName}
                    </h3>
                </div>

                <div className="flex gap-[18px] max-md:gap-2">
                    <OverlayButton
                        openOverlayButton={
                            <button className="normal-button border-2 border-red bg-transparent opacity-30 hover:opacity-100 max-sm:py-0">
                                <span className="max-sm:hidden font-primary font-bold text-red flex items-center gap-2">
                                    Report
                                    <div className="w-3.5 aspect-square rounded-full border-[1.5px] border-red h-fit relative">
                                        <span className="text-red absolute left-[50%] top-[50%] -translate-[50%] font-extrabold text-[10px]">
                                            !
                                        </span>
                                    </div>
                                </span>
                                <span className="sm:hidden font-extrabold text-red text-lg">
                                    !
                                </span>
                            </button>
                        }
                        overlayContent={
                            <textarea
                                name="reason"
                                placeholder="Reason why?"
                                rows={4}
                                className="resize-none w-full"
                            />
                        }
                        cancelButtonContent="Cancel reporting!"
                        confirmButton={
                            <button className="normal-button bg-red">
                                Report
                            </button>
                        }
                    />
                    {/* <BidDialogButton /> */}
                    <OverlayButton
                        openOverlayButton={
                            <button className="normal-button">
                                Place a bid
                            </button>
                        }
                        mainClassName="grid grid-cols-2 gap-5"
                        overlayContent={
                            <>
                                <textarea
                                    name="description"
                                    className="resize-none col-span-2"
                                    rows={3}
                                    placeholder="Description"
                                />
                                <div className="relative">
                                    <input
                                        type="number"
                                        name="price"
                                        id="price"
                                        placeholder="Suggested price"
                                        className="peer w-full not-placeholder-shown:font-primary not-placeholder-shown:font-bold"
                                    />
                                    <label
                                        htmlFor="price"
                                        className="peer-placeholder-shown:hidden font-primary font-bold absolute right-[18px] top-[50%] -translate-y-[50%] text-lg"
                                    >
                                        $
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="number"
                                        name="revision-fee"
                                        id=""
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
                        cancelButtonContent="Cancel editing!"
                        confirmButton={
                            <button className="normal-button max-sm:text-xs">
                                Finish applying
                            </button>
                        }
                    />
                </div>
            </div>
        </div>
    );
}
