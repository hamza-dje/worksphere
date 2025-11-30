import SignUpFormWrapper from "../SignUpFormWrapper";

export default function AccountCreated({
  accountType,
}: {
  accountType: "freelancer" | "client";
}) {
  const user = "Semai";
  return (
    <SignUpFormWrapper
      header={`Welcome ${user}`}
      headerDescription="Account created successfully"
      submitButtonContent="Set up my profile!"
      accountType={accountType}
      skipAllowed={accountType === "client"}
    >
      <p className="col-span-full text-center text-xl">
        Your account has been created successfully!
        <br />
        <br />
        Just one more step. We should set up your profile to look more
        professional.
      </p>
    </SignUpFormWrapper>
  );
}
