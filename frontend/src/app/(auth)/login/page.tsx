"use client";
import { signIn } from "@/api/services/auth";
import AuthButton from "@/components/Auth/AuthButton";
import { InputField } from "@/components/user-space/InputField";
import { Validation } from "@/components/user-space/validation";
import { SignInDto, signInSchema } from "@/utils/types/validation/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const [handleChange, setHandleChange] = useState<SignInDto>({
    email: "",
    password: "",
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
  });
  const router = useRouter();
  const handleSignUp = async (): Promise<void> => {
    const valid = signInSchema.safeParse(handleChange);
    if (!valid.success) {
      toast.error("Please fill all fields correctly.");
      return;
    }
    const result = await signIn(handleChange);
    if ((result as any).error) {
      toast.error(`Login failed: ${(result as any).error}`);
    } else {
      toast.success("Logged in successfully!");
      router.push("signup/setting");
    }
  };

  return (
    <div className="h-screen w-full">
      <div className="bg-white w-[50%] shadow-[0_0_27px_rgba(0,0,0,0.08)] max-lg:w-full h-full rounded-[0_36px_36px_0] max-lg:rounded-none flex flex-col items-center relative">
        <Link
          href="/freelancer"
          className="text-sm font-primary font-bold text-black opacity-20 absolute top-7 right-7 max-sm:hidden"
        >
          Back
        </Link>
        <div className="w-[400px] pt-[140px] max-sm:pt-[100px] max-sm:w-full max-sm:px-3.5">
          <div className="flex flex-col items-center mb-[52px] text-center">
            <h1>Welcome!</h1>
            <p className="opacity-60 text-[18px] max-sm:text-sm">
              Sign in to continue to WorkWave.
            </p>
          </div>

          <div className="flex flex-col gap-6 max-sm:gap-4 mb-2.5">
            <InputField
              type="email"
              placeholder="enter you email"
              name="email"
              control={control}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setHandleChange({ ...handleChange, email: e.target.value })
              }
            ></InputField>
            <Validation error={errors.email}></Validation>
            <InputField
              type="password"
              placeholder="enter your password"
              name="password"
              control={control}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setHandleChange({ ...handleChange, password: e.target.value })
              }
            ></InputField>
            <Validation error={errors.password}></Validation>
            <button className="big-button" onClick={() => handleSignUp()}>
              Log in
            </button>
          </div>

          <div className="flex justify-between text-black text-sm">
            <Link
              href=""
              className="opacity-50 hover:opacity-100 duration-200 transition-opacity"
            >
              New to WorkWave?
            </Link>
            <Link
              href=""
              className="opacity-50 hover:opacity-100 duration-200 transition-opacity"
            >
              Forgot password?
            </Link>
          </div>

          <div className="flex gap-3.5 items-center opacity-20 my-8">
            <hr className="w-full" />
            <p className="font-medium">Or</p>
            <hr className="w-full" />
          </div>
          <div className="relative  h-16  flex justify-center items-center w-full">
            <AuthButton platform="google" className="" />
          </div>
        </div>
      </div>
      <div className="h-full absolute right-0 top-0 -z-[1] max-lg:hidden">
        <Image
          src="/login-bg.png"
          width={2000}
          height={1500}
          alt="Login background"
          className="h-full w-full object-cover object-right min-w-full min-h-[460px]"
        />
      </div>
    </div>
  );
}
