import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EditProfileFormValues, editProfileSchema, PortfolioDto, SignUpDto } from "@/utils/types/validation/user";
import { InputField } from "../user-space/InputField";
import { updateProfile } from "@/api/rest/services/user";
import { updatePortfolio } from "@/api/rest/services/portfolio";
import toast from "react-hot-toast";
import { Validation } from "../user-space/validation";



interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: SignUpDto;
  portfolio: PortfolioDto;
  onUpdate: () => void;
}

export default function EditProfileModal({
  isOpen,
  onClose,
  profile,
  portfolio,
  onUpdate,
}: EditProfileModalProps) {
    
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

   const {
     control,
     handleSubmit,
     reset,
     formState: { errors },
   } = useForm({
     resolver: zodResolver(editProfileSchema),
     mode: "onChange",
   });
   useEffect(() => {
  if (!isOpen) return;

  reset({
    firstName: profile.firstName ?? "",
    lastName: profile.lastName ?? "",
    mobile: portfolio.mobile ?? "",
    description: portfolio.description ?? "",
    location: portfolio.location ?? "",
    portfolioLink: portfolio.portfolioLink ?? "",
  });
}, [profile, portfolio, isOpen, reset]);
   const onSubmit = async (data: EditProfileFormValues) => {
     setIsLoading(true);
     try {
       // Update Profile
       const profileUpdate = await updateProfile({
         firstName: data.firstName,
         lastName: data.lastName,
       });
       

       if ((profileUpdate as any).error) {
         toast.error(`Profile update failed: ${(profileUpdate as any).error}`);


       }

       // Update Portfolio
       const portfolioDto: PortfolioDto = {
         mobile: data.mobile,
         description: data.description,
         location: data.location,
         portfolioLink: data.portfolioLink || undefined,
       };

       const portfolioUpdate = await updatePortfolio(
         portfolioDto,
         selectedFile || undefined
       );

       if ((portfolioUpdate as any).error) {
         throw new Error((portfolioUpdate as any).error);
       }

       toast.success("Profile updated successfully");
       onUpdate();
       onClose();
     } catch (error: any) {
       toast.error(error.message || "Failed to update profile");
     } finally {
       setIsLoading(false);
     }
   };

   if (!isOpen) return null;
    

   return (
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
       <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
         <div className="p-6 md:p-8">
           <div className="flex justify-between items-center mb-6">
             <h2 className="text-2xl font-bold text-[var(--color-black)] font-[family-name:var(--font-primary)]">
               Edit Profile
             </h2>
             <button
               onClick={onClose}
               className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
             >
               <svg
                 className="w-6 h-6"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   d="M6 18L18 6M6 6l12 12"
                 />
               </svg>
             </button>
           </div>

           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
             {/* Personal Info */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="space-y-2 flex-col flex">
                 <label className="text-sm font-medium text-gray-700">
                   First Name
                 </label>
                 <InputField
                   type="text"
                   placeholder="First Name"
                   name="firstName"
                   control={control}
                  
                   className="text-sm text-gray-700"
                 />
                 <Validation error={errors.firstName}></Validation>
               </div>
               <div className="space-y-2 flex-col flex">
                 <label className="text-sm font-medium text-gray-700">
                   Last Name
                 </label>
                 <InputField
                   type="text"
                   placeholder="Last Name"
                   name="lastName"
                   control={control}
                  
                   className="text-sm text-gray-700"
                 />
                 <Validation error={errors.lastName}></Validation>
               </div>
             </div>

             {/* Contact Info */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="space-y-2 flex-col flex">
                 <label className="text-sm font-medium text-gray-700">
                   Mobile
                 </label>
                 <InputField
                   type="tel"
                   placeholder="Mobile Number"
                   name="mobile"
                   control={control}
                  
                   className="text-sm text-gray-700"
                 />
                 <Validation error={errors.mobile}></Validation>
               </div>
               <div className="space-y-2 flex-col flex">
                 <label className="text-sm font-medium text-gray-700">
                   Location
                 </label>
                 <InputField
                   type="text"
                   placeholder="City, Country"
                   name="location"
                   control={control}
                   
                   
                 className="text-sm text-gray-700"

                 />
                 <Validation error={errors.location}></Validation>
               </div>
             </div>

             {/* Portfolio Link */}
             <div className="space-y-2 flex-col flex">
               <label className="text-sm font-medium text-gray-700">
                 Portfolio Link
               </label>
               <InputField
                 type="url"
                 placeholder="https://your-portfolio.com"
                 name="portfolioLink"
                 control={control}
                
                 className="text-sm text-gray-700"
               />
               <Validation error={errors.portfolioLink}></Validation>
             </div>

             {/* Description */}
             <div className="space-y-2 flex-col flex">
               <label className="text-sm font-medium text-gray-700">
                 About Me
               </label>
               <InputField
                 type="text"
                 placeholder="Tell us about yourself..."
                 name="description"
                 control={control}
                
                 className="text-sm text-gray-700"
               />
               {/* Manual Controller for Textarea since InputField is only input */}

               <Validation error={errors.description}></Validation>
             </div>

             {/* Photo Upload */}
             <div className="space-y-2 flex-col flex">
               <label className="text-sm font-medium text-gray-700">
                 Profile Photo
               </label>
               <div className="flex items-center gap-4">
                 <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                   <span className="text-sm text-gray-600">Choose File</span>
                   <input
                     type="file"
                     accept="image/*"
                     className="hidden"
                     onChange={(e) => {
                       if (e.target.files?.[0]) {
                         setSelectedFile(e.target.files[0]);
                       }
                     }}
                     
                   />
                 </label>
                 <span className="text-sm text-gray-500">
                   {selectedFile ? selectedFile.name : "No file chosen"}
                 </span>
               </div>
             </div>

             {/* Actions */}
             <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
               <button
                 type="button"
                 onClick={onClose}
                 className="px-6 py-2 cursor-pointer rounded-xl text-gray-600 font-medium hover:bg-gray-100 transition-colors"
                 disabled={isLoading}
               >
                 Cancel
               </button>
               <button
                 type="submit"
                 className="px-6 cursor-pointer py-2 rounded-xl bg-[var(--color-green)] text-white font-medium hover:bg-[var(--color-dark-green)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                 disabled={isLoading}
               >
                 {isLoading ? (
                   <>
                     <svg
                       className="animate-spin h-4 w-4 text-white"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 24 24"
                     >
                       <circle
                         className="opacity-25"
                         cx="12"
                         cy="12"
                         r="10"
                         stroke="currentColor"
                         strokeWidth="4"
                       ></circle>
                       <path
                         className="opacity-75"
                         fill="currentColor"
                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                       ></path>
                     </svg>
                     Saving...
                   </>
                 ) : (
                   "Save Changes"
                 )}
               </button>
             </div>
           </form>
         </div>
       </div>
     </div>
   );
}
