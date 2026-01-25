"use client";
import ProfileAppearance from "@/components/Auth/signup/work/ProfileAppearance";
import { InputField } from "@/components/user-space/InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { SignUpDto, signUpSchema } from "@/utils/types/validation/user";
import { signUp } from "@/api/rest/services/auth";
import { toast } from "react-hot-toast";
import { useUserStore } from "@/store/store";
import { useRouter } from "next/navigation";

export default function SignUpFreelancerPage() {
  const router = useRouter();
  const role = useUserStore((state) => state.role);
  const [submitted, setSubmitted] = useState(false);
  const {
    control,
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
    role: role,
  });
  const handleSignUp = async (data: SignUpDto): Promise<void> => {
    const valid = signUpSchema.safeParse(data);
    if (!valid.success) {
      toast.error("Please fill all fields correctly.");
      return;
    }
    const result = await signUp(handleChange);
    if ((result as any).error) {
      toast.error(`Signup failed: ${(result as any).error}`);
    } else {
      toast.success("Account created successfully!");
      router.push("/login");
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
      change={handleChange}
    >
      <InputField
        type="text"
        placeholder="First Name"
        name="firstName"
        control={control}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setHandleChange({ ...handleChange, firstName: e.target.value })
        }
      />
      {errors.firstName && (
        <div className="text-red-500 absolute mt-[68px]  text-sm ">
          {errors.firstName.message}
        </div>
      )}

      <InputField
        type="text"
        placeholder="Last Name"
        name="lastName"
        control={control}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setHandleChange({ ...handleChange, lastName: e.target.value })
        }
      />
      {errors.lastName && (
        <div className="text-red-500 absolute mt-[160px]  text-sm ">
          {errors.lastName.message}
        </div>
      )}

      <InputField
        type="email"
        placeholder="Email"
        name="email"
        control={control}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setHandleChange({ ...handleChange, email: e.target.value })
        }
      />
      {errors.email && (
        <div className="text-red-500 absolute mt-[252px]  text-sm ">
          {errors.email.message}
        </div>
      )}

      <InputField
        type="password"
        placeholder="Password"
        name="password"
        control={control}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setHandleChange({ ...handleChange, password: e.target.value })
        }
      />
      {errors.password && (
        <div className="text-red-500 absolute mt-[346px]  text-sm ">
          {errors.password.message}
        </div>
      )}
    </ProfileAppearance>
  );
}
