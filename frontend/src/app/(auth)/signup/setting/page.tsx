'use client'
import { getProfile } from "@/api/services/user";
import AccountCreated from "@/components/auth/signup/shared/AccountCreated";
import StepOne from "@/components/auth/signup/shared/StepOne";
import ChooseSkills from "@/components/auth/signup/work/ChooseSkills";
import ProfileAppearance from "@/components/Auth/signup/work/ProfileAppearance";
import ProfileFinished from "@/components/auth/signup/work/ProfileFinished";
import { InputField } from "@/components/user-space/InputField";
import { Validation } from "@/components/user-space/validation";
import { PortfolioDto, portfolioSchema, SignUpDto } from "@/utils/types/validation/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { sign } from "crypto";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function SignUpFreelancerPage() {
    const [profile, setProfile] = useState<SignUpDto>({
        firstName: "",
        lastName: "",
        email: "",
        role: "freelancer",
    });
    const [portfolio, setPortfolio] = useState<PortfolioDto>({
        mobile: '',
        description: '',
        location: '',
        photo: undefined,
        portfolioLink: undefined,
    });
     const {
          control,
          handleSubmit,
          formState: { errors },
        } = useForm({
          resolver: zodResolver(portfolioSchema),
          mode: "onChange",
        });
           const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    setPortfolio({ ...portfolio, photo: file });
  }
};
    useEffect(()=>{
        const fetchProfile = async (): Promise<void> => {
    
        const result = await getProfile();
    if ((result as any).error) {
      toast.error(`Can't get profile: ${(result as any).error}`);
      console.log((result as any).error);
    } else {
         setProfile(result as SignUpDto);
      
    }
  };
  fetchProfile();
    }, [])
    return <ProfileAppearance header="Setting up your profile" headerDescription="Your profile appearance" submitButtonContent="Finish" accountType="freelancer" skipAllowed >
        <div className="col-span-full flex items-center gap-5 ">
                            <div className="group rounded-full overflow-hidden relative border-1 border-[oklch(from_var(--color-black)_l_c_h_/_.1)]">
                                <Image
                                    src={"/profile/plus-icon.png"}
                                    alt=""
                                    width={60}
                                    height={60}
                                    className="absolute left-1/2 top-1/2 -translate-1/2 z-1 opacity-0 group-hover:opacity-100 duration-300 transition-opacity"
                                />
                                <input
                                    type="file"
                                    onChange={(e : ChangeEvent<HTMLInputElement>) => {
                                        handleUpload(e);
                                    }}
                                    id="profile-picture"
                                    accept="image/*"
                                    name="profile-picture"
                                    className="absolute w-full h-full rounded-full opacity-0 z-1 cursor-pointer"
                                />
                                <Image
                                    src={(image as string) ?? "/profile/profile-pic.png"}
                                    alt="Profile picture"
                                    width={120}
                                    height={120}
                                    className="size-[120px] max-sm:size-[90px] group-hover:blur-xs duration-300 transition-all"
                                />
                            </div>
            
                            <div className="flex flex-col gap-1">
                                <span className="font-primary font-bold text-2xl">
                                    {profile.firstName} 
                                </span>
                                <span className="text-xl">{profile.lastName}</span>
                            </div>
                        </div>
            
                       <InputField type="text" placeholder="description" name="description" control={control} onChange={(e : ChangeEvent<HTMLInputElement>) => setPortfolio({...portfolio, description: e.target.value})}></InputField>
                       <Validation error={errors.description}></Validation>
                       <InputField type="text" placeholder="portfolio link" name="portfolioLink" control={control} onChange={(e : ChangeEvent<HTMLInputElement>) => setPortfolio({...portfolio, portfolioLink: e.target.value})}></InputField>
                       <Validation error={errors.portfolioLink}></Validation>
                       <div className="col-span-full flex gap-5 w-full">
 <div className="flex gap-1 flex-col">
     <InputField
    className="w-full"
    type="text"
    placeholder="location"
    name="location"
    control={control}
    onChange={(e: ChangeEvent<HTMLInputElement>) =>
      setPortfolio({ ...portfolio, location: e.target.value })
    }
  />
  <Validation error={errors.location}></Validation>
 </div>
  <div className="flex gap-1 flex-col">
    <InputField
    className="w-full"
    type="text"
    placeholder="mobile"
    name="mobile"
    control={control}
    onChange={(e: ChangeEvent<HTMLInputElement>) =>
      setPortfolio({ ...portfolio, mobile: e.target.value })
    }
  />
  <Validation error={errors.mobile}></Validation>
  </div>
</div>

                       
    </ProfileAppearance>
}

/**
   mobile: '',
        description: '',
        location: '',
        photo: undefined,
        portfolioLink: undefined,
 */