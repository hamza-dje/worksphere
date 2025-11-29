"use client";
import Image from "next/image";
import SignUpFormWrapper from "../SignUpFormWrapper";
import { ChangeEvent, useState } from "react";
type Props = {
    header : string,
    headerDescription : string,
    submitButtonContent : string,
    accountType : "client" | "freelancer",
    skipAllowed? : boolean
};
export default function ProfileAppearance({header, headerDescription, submitButtonContent, accountType, skipAllowed} : Props) {
    const [image, setImage] = useState<string | ArrayBuffer | null>(null);
    const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <SignUpFormWrapper
            header={header}
            headerDescription={headerDescription}
            submitButtonContent={submitButtonContent}
            accountType={accountType}
            skipAllowed={skipAllowed}
        >
            <div className="col-span-full flex items-center gap-5">
                <div className="group rounded-full overflow-hidden relative border-1 border-[oklch(from_var(--color-black)_l_c_h_/_.1)]">
                    <Image
                        src={"/profile/plus-icon.png"}
                        alt=""
                        width={60}
                        height={60}
                        className="absolute left-1/2 top-1/2 -translate-1/2 z-1 opacity-0 group-hover:opacity-100 duration-300 transition-opacity"
                    />
                    <input
                        type="file"
                        onChange={handleUpload}
                        id="profile-picture"
                        accept="image/*"
                        name="profile-picture"
                        className="absolute w-full h-full rounded-full opacity-0 z-1 cursor-pointer"
                    />
                    <Image
                        src={(image as string) ?? "/profile/profile-pic.png"}
                        alt="Profile picture"
                        width={120}
                        height={120}
                        className="size-[120px] max-sm:size-[90px] group-hover:blur-xs duration-300 transition-all"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <span className="font-primary font-bold text-2xl">
                        Hamza Djedidi
                    </span>
                    <span className="text-xl">Hamza Djedidi</span>
                </div>
            </div>

            <textarea
                name="about"
                placeholder="About..."
                rows={3}
                className="col-span-full resize-none"
            />
        </SignUpFormWrapper>
    );
}
