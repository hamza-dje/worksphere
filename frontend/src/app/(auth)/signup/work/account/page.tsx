'use client'
import AccountCreated from "@/components/auth/signup/shared/AccountCreated";
import StepOne from "@/components/auth/signup/shared/StepOne";
import ChooseSkills from "@/components/auth/signup/work/ChooseSkills";
import ProfileAppearance from "@/components/Auth/signup/work/ProfileAppearance";
import ProfileFinished from "@/components/auth/signup/work/ProfileFinished";
import { InputField } from "@/components/user-space/InputField";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

export default function SignUpFreelancerPage() {
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
    <ProfileAppearance header="Create an account" headerDescription="Your personal informations" submitButtonContent="Finish" accountType="freelancer" skipAllowed >
        <InputField type="text" placeholder="firstName"></InputField>
        <InputField type="text" placeholder="lastName"></InputField>
        <InputField type="email" placeholder="email"></InputField>
        <InputField type="password" placeholder="password"></InputField>
    </ProfileAppearance>
    )
}

