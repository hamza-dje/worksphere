import AccountCreated from "@/components/auth/signup/shared/AccountCreated";
import StepOne from "@/components/auth/signup/shared/StepOne";
import ChooseSkills from "@/components/auth/signup/work/ChooseSkills";
import ProfileAppearance from "@/components/Auth/signup/work/ProfileAppearance";
import ProfileFinished from "@/components/auth/signup/work/ProfileFinished";

export default function SignUpFreelancerPage() {
    return <ProfileAppearance header="Create your account" headerDescription="Your profile appearance" submitButtonContent="Finish" accountType="freelancer" skipAllowed />;
}

/*
 header="Setting up your profile"
            headerDescription="Your profile appearance"
            submitButtonContent="Finish"
            accountType="freelancer"
            skipAllowed
*/