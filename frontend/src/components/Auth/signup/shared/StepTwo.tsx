"use client";
import { useState } from "react";
import SignUpFormWrapper from "../SignUpFormWrapper";

export default function StepOne({
    accountType,
}: {
    accountType: "freelancer" | "client";
}) {
    const [number, setNumber] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let digits = e.target.value.replace(/\D/g, "");
        digits = digits.substring(0, 9);
        const formatted = digits.replace(/(\d{3})(?=\d)/g, "$1 ").trim();
        setNumber(formatted);
    };

    return (
        <SignUpFormWrapper
            header="Create an account"
            headerDescription="Your personal informations."
            accountType={accountType}
        >
            <input
                type="text"
                name="dial-code"
                placeholder="Dial Code"
                value={"+213"}
                readOnly
                className="px-5"
            />
            <input
                type="text"
                name="phone-number"
                placeholder="Phone Number"
                className="col-span-3"
                value={number}
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                className="col-span-full"
            />

            <input
                type="password"
                name="confirm-password"
                placeholder="Confirm Password"
                className="col-span-full"
            />
        </SignUpFormWrapper>
    );
}
