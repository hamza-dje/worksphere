"use client";

import { createPaymentAccount } from "@/api/rest/services/payment";
import { useUserStore } from "@/store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  cloneElement,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import toast from "react-hot-toast";

export default function OverlayButton({
  openOverlayButton,
  overlayContent,
  mainClassName,
  cancelButtonContent,
  confirmButton,
  externalDataToPass,
  apiEndpoint,
  error,
  url,
}: {
  openOverlayButton: ReactElement<Readonly<{ onClick: () => void }>>;
  overlayContent: ReactNode;
  mainClassName?: string;
  cancelButtonContent: string;
  confirmButton: ReactElement;
  externalDataToPass?: Record<string, any>;
  apiEndpoint?: string;
  error?: string | null;
  url?: string | null;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const overlay = useRef<HTMLFormElement>(null);
  const userId = useUserStore((state) => state.id);
  const router = useRouter();
  console.log(userId)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dialog.current?.open && !overlay.current?.contains(e.target as Node))
        dialog.current.close();
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
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
          {error && <div className="col-span-full text-sm ">You don't have stripe account yet <Link href={url ? url : '/frl'} className="font-semibold ml-1 text-alternative-red cursor-pointer" >Create one</Link></div>}
        </form>
      </dialog>
    </>
  );
}
