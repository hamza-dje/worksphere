"use client";

import { useEffect, useRef } from "react";

export default function BidDialogButton() {
    const dialog = useRef<HTMLDialogElement>(null);
    const overlay = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dialog.current?.open && !overlay.current?.contains(e.target as Node)) dialog.current.close();
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <button className="normal-button" onClick={() => dialog.current?.showModal()}>
                Place a bid
            </button>
            <dialog ref={dialog} className="m-auto rounded-[36px] w-[500px]">
                <form className="bg-white p-10 max-sm:p-8 grid grid-cols-2 gap-5" ref={overlay}>
                    <textarea name="" id="" className="resize-none col-span-2" rows={3} placeholder="Description" />
                    <div className="relative">
                        <input
                            type="number"
                            name="price"
                            id="price"
                            placeholder="Suggested price"
                            className="peer w-full not-placeholder-shown:font-primary not-placeholder-shown:font-bold"
                        />
                        <label htmlFor="price" className="peer-placeholder-shown:hidden font-primary font-bold absolute right-[18px] top-[50%] -translate-y-[50%] text-lg">$</label>
                    </div>
                    <div className="relative">
                        <input
                            type="number"
                            name="revision-fee"
                            id=""
                            placeholder="Revision fee"
                            className="peer w-full not-placeholder-shown:font-primary not-placeholder-shown:font-bold"
                        />
                        <label htmlFor="revision-fee" className="peer-placeholder-shown:hidden font-primary font-bold absolute right-[18px] top-[50%] -translate-y-[50%] text-lg">%</label>
                    </div>
                    <div className="col-span-2 flex justify-between px-4 mt-2.5 max-sm:px-0">
                        <button
                            className="font-primary font-medium opacity-20 cursor-pointer text-black hover:opacity-40 duration-200 transition-opacity max-sm:text-xs"
                            onClick={() => dialog.current?.close()}
                            type="button"
                        >
                            Cancel editing!
                        </button>
                        <button
                            className="normal-button max-sm:text-xs"
                        >
                            Finish applying
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    );
}