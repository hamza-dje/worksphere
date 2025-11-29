"use client";
import Image from "next/image";
import SignUpFormWrapper from "../SignUpFormWrapper";
import { ChangeEvent, useState } from "react";
type Props = {
    header : string,
    headerDescription : string,
    submitButtonContent : string,
    accountType : "client" | "freelancer",
    skipAllowed? : boolean,
    children?: React.ReactNode
};
export default function ProfileAppearance({header, headerDescription, submitButtonContent, accountType, skipAllowed, children} : Props) {
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
           {children}
        </SignUpFormWrapper>
    );
}
