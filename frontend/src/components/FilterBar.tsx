import { useEffect, useState } from "react";

export default function FilterBar({ navbarHeight }: { navbarHeight: number }) {
    const [makeVisible, setMakeVisible] = useState<boolean>(true);
    const [filterShown, setFilterShown] = useState<boolean>(false);
    const [filterFixed, setFilterFixed] = useState<boolean>(false);
    const [budget, setBudget] = useState<{
        min: number | undefined,
        max: number | undefined
    }>({
        min: undefined,
        max: undefined
    });

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (makeVisible && window.innerWidth > 640) {
            timeout = setTimeout(() => setMakeVisible(false), 1500);
        }

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className="sticky z-9 max-md:w-[calc(100%-16px)] mx-auto sm:h-[60px] group"
            style={{
                top: `${navbarHeight}px`
            }}
        >
            <div
                className={`max-sm:absolute ${makeVisible || filterFixed ? 'sm:-translate-y-4 sm:max-xl:-translate-y-5' : 'sm:opacity-0 sm:-translate-y-full'} sm:group-hover:-translate-y-4 sm:max-xl:group-hover:-translate-y-5 max-sm:-translate-y-5 sm:group-hover:opacity-100 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:gap-4 transition-[top_translate_opacity] duration-[250ms] ease-out ${filterShown ? 'max-sm:top-0' : 'max-sm:-top-[320px]'}`}
            >
                <form
                    className={`bg-white p-6 relative !pt-10 max-xl:p-5 max-sm:flex-col flex w-[1200px] max-xl:w-[945px] max-xl:gap-2.5 max-lg:w-[calc(100%-64px)] max-md:w-full mx-auto shadow-[0_0_27px_rgba(0,0,0,0.08)] rounded-b-[36px] gap-4 [&_input]:placeholder:text-[16px] [&_input,&_select]:px-4 [&_input,&_select]:py-3.5 ${!filterShown && 'max-sm:opacity-0 max-sm:pointer-events-none'}`}>
                    <button
                        type="button"
                        onClick={() => setFilterFixed(f => !f)}
                        className="cursor-pointer absolute right-0 max-xl:top-5 top-4 max-sm:hidden transition-colors duration-150 active:bg-[oklch(from_var(--color-black)_l_c_h_/_0.05)] p-1.5 rounded-full"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className={`stroke-black opacity-40 ${filterFixed ? 'fill-black' : 'fill-none'} size-4`}>
                            <path d="M1 17L6.5 11.5M6.5 11.5L3 8L7 7L9 5L10 1L17 8L13 9L11 11L10 15L6.5 11.5Z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div className="flex-2 flex-shrink-0 relative">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search"
                            className="h-full w-full max-xl:text-sm !pr-9"
                        />
                        <label htmlFor="search" className="absolute top-1/2 -translate-y-1/2 right-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="fill-none size-4 stroke-black opacity-20">
                                <path d="M13.3703 13.3703C14.6817 12.059 15.4928 10.2474 15.4928 8.24638C15.4928 4.24431 12.2484 1 8.24638 1C4.24431 1 1 4.24431 1 8.24638C1 12.2484 4.24431 15.4928 8.24638 15.4928C10.2474 15.4928 12.059 14.6817 13.3703 13.3703ZM13.3703 13.3703L19 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </label>
                    </div>
                    <select
                        name="categoty"
                        id="category"
                        className="flex-1 max-xl:text-sm min-w-0"
                    >
                        <option value="Category1">Category1</option>
                        <option value="Category2">Category2</option>
                        <option value="Category3">Category3</option>
                    </select>
                    <select
                        name="sub-categoty"
                        id="sub-category"
                        className="flex-1 max-xl:text-sm min-w-0"
                    >
                        <option value="SubCategory1">SubCategory1</option>
                        <option value="SubCategory2">SubCategory2</option>
                        <option value="SubCategory3">SubCategory3</option>
                    </select>
                    <div className="flex flex-1 min-w-[20%] [&>div>input]:not-placeholder-shown:font-primary [&>div>input]:not-placeholder-shown:font-bold [&>div]:w-[120px] max-xl:[&>div]:max-w-fit max-sm:[&>div]:max-w-full max-xl:[&>div]:flex-shrink [&>div>label]:absolute [&>div>label]:font-primary [&>div>label]:text-lg [&>div>label]:font-bold [&>div>label]:top-1/2 [&>div>label]:-translate-y-1/2 [&>div>label]:right-4">
                        <div className="relative min-w-0 flex-1 -mr-[1px]">
                            <input
                                type="number"
                                name="min"
                                id="min"
                                max={budget?.max}
                                onChange={e => setBudget(b => ({
                                    ...b,
                                    min: e.target.value === '' ? undefined : Number(e.target.value)
                                })
                                )}
                                onKeyDown={(e) => {
                                    if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '.' && e.currentTarget.value === '') {
                                        e.preventDefault();
                                    }
                                }}
                                placeholder="Min Budget"
                                className="rounded-r-none h-full max-w-full peer max-xl:text-sm min-w-0 max-sm:w-full"
                                step="any"
                            />
                            <label htmlFor="min" className="peer-placeholder-shown:hidden max-xl:!text-sm">$</label>
                        </div>
                        <div className="relative min-w-0 flex-1">
                            <input
                                type="number"
                                name="max"
                                id="max"
                                min={budget?.min}
                                onChange={e => setBudget(b => ({
                                    ...b,
                                    max: e.target.value === '' ? undefined : Number(e.target.value)
                                })
                                )}
                                onKeyDown={(e) => {
                                    if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '.' && e.currentTarget.value === '') {
                                        e.preventDefault();
                                    }
                                }}
                                placeholder="Max Budget"
                                className="rounded-l-none h-full max-w-full peer max-xl:text-sm min-w-0 max-sm:w-full"
                                step="any"
                            />
                            <label htmlFor="max" className="peer-placeholder-shown:hidden max-xl:!text-sm">$</label>
                        </div>
                    </div>
                    <button className="big-button px-8 text-[16px] py-4 flex items-center justify-center gap-3 max-xl:text-sm max-xl:py-3.5 max-xl:px-6">
                        Filter
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 22" className="size-4 max-xl:size-3 stroke-white">
                            <path d="M2 4H7.49994H12.9999V2V6M8 11H18.9999M8 11V9M8 11V13M16.9999 4H18.9999M4 11H2M12.9999 18H2M12.9999 18V16M12.9999 18V20M16.9999 18H18.9999" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </form>
                <button
                    onClick={() => setFilterShown(f => !f)}
                    className="normal-button self-end sm:hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] p-4"
                >
                    {
                        filterShown
                            ? 'Close'
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 22" className="size-6 stroke-white">
                                <path d="M2 4H7.49994H12.9999V2V6M8 11H18.9999M8 11V9M8 11V13M16.9999 4H18.9999M4 11H2M12.9999 18H2M12.9999 18V16M12.9999 18V20M16.9999 18H18.9999" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                    }
                </button>
            </div>
        </div>
    );
}