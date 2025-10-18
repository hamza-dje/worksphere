import AuthButton from "../../AuthButton";
import SignUpFormWrapper from "../SignUpFormWrapper";

export default function StepOne({
    accountType,
}: {
    accountType: "freelancer" | "client";
}) {
    return (
        <SignUpFormWrapper
            header="Create an account"
            headerDescription="Your personal informations."
            accountType={accountType}
        >
            <input
                type="text"
                name="first-name"
                placeholder="First name"
                className="col-span-2"
            />
            <input
                type="text"
                name="last-name"
                placeholder="Last name"
                className="col-span-2"
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                className="col-span-full"
            />

            <div className="col-span-full flex gap-4 items-center opacity-20">
                <hr className="flex-1" />
                <span className="font-medium text-sm">Or</span>
                <hr className="flex-1" />
            </div>

            <div className="relative col-span-full h-16">
                <AuthButton platform="google" className="left-0" />
                <AuthButton
                    platform="facebook"
                    className="left-[calc(25%+5px)] hover:left-0"
                />
                <AuthButton
                    platform="apple"
                    className="left-[calc(50%+10px)] hover:left-0"
                />
                <AuthButton
                    platform="linkedin"
                    className="left-[calc(75%+15px)] hover:left-0"
                />
            </div>
        </SignUpFormWrapper>
    );
}
