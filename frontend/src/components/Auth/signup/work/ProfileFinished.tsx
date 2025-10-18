import SignUpFormWrapper from "../SignUpFormWrapper";

export default function ProfileFinished() {
    return (
        <SignUpFormWrapper
            header="Congratulations Hamza!"
            headerDescription="Welcome to WorkWave!"
            accountType="freelancer"
            submitButtonContent="Post Your First Service"
            skipAllowed
            skipContent="Proceed to WorkWave"
        >
            <p className="col-span-full text-center text-xl">
                Now, you are officially a freelancer at WorkWave!
                <br />
                <br />
                Start working in the freelance market by posting your own
                services and getting paid like a professional!
            </p>
        </SignUpFormWrapper>
    );
}
