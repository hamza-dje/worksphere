'use client'
import AccountCreated from "@/components/auth/signup/shared/AccountCreated";
import StepOne from "@/components/auth/signup/shared/StepOne";
import ChooseSkills from "@/components/auth/signup/work/ChooseSkills";
import ProfileAppearance from "@/components/Auth/signup/work/ProfileAppearance";
import ProfileFinished from "@/components/auth/signup/work/ProfileFinished";
import { InputField } from "@/components/user-space/InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { SignUpDto, signUpSchema } from "@/utils/types/validation/schemas";
import { signUp } from "@/api/services/auth";
import { toast } from "react-hot-toast";

export default function SignUpFreelancerPage() {
    const [submitted , setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });
  console.log(errors.password);
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [handleChange, setHandleChange] = useState<SignUpDto>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSignUp = async (data: SignUpDto): Promise<void> => {
    const valid = signUpSchema.safeParse(data);
    console.log("mohamed")
    if (!valid.success) {
        console.log("semai")
        toast.error("Please fill all fields correctly.");
        return;
    }
        const result = await signUp(handleChange);
    if ((result as any).error) {
      toast.error(`Signup failed: ${(result as any).error}`);
    } else {
      toast.success("Account created successfully!");
      setSubmitted(true);
    }
  };
  return (
    <ProfileAppearance
      header="Create an account"
      headerDescription="Your personal informations"
      submitButtonContent="Continue"
      accountType="freelancer"
      skipAllowed
      handle={handleSignUp}
      change = {handleChange}
    >
      <InputField
        type="text"
        placeholder="First Name"
        name="firstName"
        register={register}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setHandleChange({ ...handleChange, firstName: e.target.value })
        }
        value={handleChange.firstName}
      />
      {errors.firstName && (
        <div className="text-red-500 col-span-full  text-sm w-full">
          {errors.firstName.message}
         
        </div>
      )}

      <InputField
        type="text"
        placeholder="Last Name"
        name="lastName"
        register={register}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setHandleChange({ ...handleChange, lastName: e.target.value })
        }
        value={handleChange.lastName}
      />
      {errors.lastName && (
        <div className="text-red-500 col-span-full  text-sm w-full">
          {errors.lastName.message}
        </div>
      )}

      <InputField
        type="email"
        placeholder="Email"
        name="email"
        register={register}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setHandleChange({ ...handleChange, email: e.target.value })
        }
        value={handleChange.email}
      />
      {errors.email && (
        <div className="text-red-500 col-span-full  text-sm w-full">
          {errors.email.message}
        </div>
      )}

      <InputField
        type="password"
        placeholder="Password"
        name="password"
        register={register}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setHandleChange({ ...handleChange, password: e.target.value })
        }
        value={handleChange.password}
      />
      {errors.password && (
        <div className="text-red-500 col-span-full text-sm w-full">
          {errors.password.message}
        </div>
      )}
    </ProfileAppearance>
  );
}

