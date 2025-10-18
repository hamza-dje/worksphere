"use client";

import {
    cloneElement,
    ReactElement,
    ReactNode,
    useEffect,
    useRef,
} from "react";

export default function OverlayButton({
    openOverlayButton,
    overlayContent,
    mainClassName,
    cancelButtonContent,
    confirmButton,
    externalDataToPass,
    apiEndpoint,
}: {
    openOverlayButton: ReactElement<Readonly<{ onClick: () => void }>>;
    overlayContent: ReactNode;
    mainClassName?: string;
    cancelButtonContent: string;
    confirmButton: ReactElement;
    externalDataToPass?: Record<string, any>;
    apiEndpoint?: string;
}) {
    const dialog = useRef<HTMLDialogElement>(null);
    const overlay = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                dialog.current?.open &&
                !overlay.current?.contains(e.target as Node)
            )
                dialog.current.close();
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const openOverlayButtonClone = cloneElement(openOverlayButton, {
        onClick: () => dialog.current?.showModal(),
    });

    return (
        <>
            {openOverlayButtonClone}
            <dialog ref={dialog} className="m-auto rounded-[36px] w-[500px]">
                <form
                    className={`bg-white p-10 max-sm:p-8 ${mainClassName}`}
                    ref={overlay}
                    onSubmit={(e) => e.preventDefault()}
                >
                    {overlayContent}
                    <div className="col-span-2 flex justify-between px-4 mt-4 max-sm:px-0">
                        <button
                            className="font-primary font-medium opacity-20 cursor-pointer text-black hover:opacity-40 duration-200 transition-opacity max-sm:text-xs"
                            onClick={() => dialog.current?.close()}
                            type="button"
                        >
                            {cancelButtonContent}
                        </button>
                        <>{confirmButton}</>
                    </div>
                </form>
            </dialog>
        </>
    );
}
