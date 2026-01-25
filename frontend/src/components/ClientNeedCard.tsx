import Image from "next/image";
import OverlayButton from "./OverlayButton";
import { OfferDto } from "@/utils/types/validation/offer";
import { ca } from "zod/locales";
import toast from "react-hot-toast";
import { enrolledOffer } from "@/api/rest/services/offer";
import { useState } from "react";
import { useUserStore } from "@/store/store";
import { createPaymentAccount } from "@/api/rest/services/payment";

export default function ClientNeedCard({service , price , category, technologies, createdAt,description, user, photo , id}: OfferDto & { photo?: string }) {
  const [url , setUrl] = useState<string | null>(null);
  const userId = useUserStore((state) => state.id);
  function timeAgo(date: Date | undefined) {
  const now = new Date();
  if (!date) return "unknown time ago";
  const past = new Date(date);
  const diffMs = now.getTime() - past.getTime(); // difference in ms

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  if (diffHours > 0) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  if (diffMinutes > 0) return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
  return `just now`;
}
  const [error , setError] =  useState<string | null>(null);
  const enrolled = async (offerId : number) => {
      const result = await enrolledOffer(offerId)
      if((result as any).error){
        setError((result as any).error);    
    if(!userId) return console.log("user id is undefined");
    const reponse = await createPaymentAccount(userId)
    if((reponse as any).error){
      toast.error(`Can't create stripe account: ${(reponse as any).error}`);
      return;
    }
    setUrl(reponse);
        return toast.error(`user can't enrolled to this offer : ${(result as any).error}`);
      }
      toast.success("user enrolled to this offer successfully")
     }
  
  return (
    <div className="border-1 border-[oklch(from_var(--color-black)_l_c_h_/_0.1)] px-10 py-9 max-sm:p-6 md:px-[84px] md:py-[40px] rounded-[36px] mb-[50px]">
      <div className="flex justify-between gap-7">
        <h2 className="font-primary font-extrabold text-primary md:text-[28px]">
          {service}
        </h2>
        <span className="font-primary font-extrabold text-primary md:text-[28px] text-nowrap max-sm:hidden">
          ${price}
        </span>
        <div className="flex flex-col sm:hidden">
          <span className="font-primary font-extrabold text-primary text-nowrap -mb-1">
            
          </span>
          
        </div>
      </div>

      <div className="flex justify-between opacity-50 mb-[24px]">
        
        <span className="font-primary text-primary md:text-lg text-xs">
          {timeAgo(createdAt)} 
         
        </span>
      </div>

      <div className="flex flex-col max-sm:flex-col-reverse">
        <p className="text-xl max-md:text-sm max-md:tracking-wide text-black mb-[30px] md:leading-8">
          {description}
        </p>

        <div className="flex gap-[8px] flex-wrap mb-[20px] max-sm:mb-4 max-md:gap-1.5 w-3/5">
          {[...(technologies || []), ...(category || [])].map((skill, i) => (
            <span
              key={i}
              className="bg-[oklch(from_var(--color-primary)_l_c_h_/_0.15)] px-[18px] py-[10px] font-primary font-medium text-xs rounded-full max-md:text-[10px] max-md:px-3 max-md:py-1.5"
            >
              {skill}
            </span>
          ))}
        </div>
        
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-[18px] max-md:gap-2.5">
          <div className="" />
          {photo && (
            <div className="w-10 max-md:w-9 rounded-full overflow-hidden h-10 max-md:h-9 flex items-center justify-center">
              <Image src={photo} alt={`${user?.firstName} ${user?.lastName}`} width={40} height={40} className="rounded-full w-full h-full object-cover" />
            </div>
            )}
          <h3 className="font-primary text-[18px] max-md:text-sm">
            {user?.firstName} {user?.lastName}
          </h3>
        </div>

        <div className="flex gap-[18px] max-md:gap-2">
          <OverlayButton
         
            openOverlayButton={
              <button className="normal-button border-2 border-red bg-transparent opacity-30 hover:opacity-100 max-sm:py-0">
                <span className="max-sm:hidden font-primary font-bold text-red flex items-center gap-2">
                  Report
                  <div className="w-3.5 aspect-square rounded-full border-[1.5px] border-red h-fit relative">
                    <span className="text-red absolute left-[50%] top-[50%] -translate-[50%] font-extrabold text-[10px]">
                      !
                    </span>
                  </div>
                </span>
                <span className="sm:hidden font-extrabold text-red text-lg">
                  !
                </span>
              </button>
            }
            overlayContent={
              <textarea
                name="reason"
                placeholder="Reason why?"
                rows={4}
                className="resize-none w-full"
              />
            }
            cancelButtonContent="Cancel reporting!"
            confirmButton={
              <button className="normal-button bg-red">Report</button>
            }
          />
          {/* <BidDialogButton /> */}
          <OverlayButton
           
            openOverlayButton={
              <button className="normal-button" >Place a bid</button>
            }
            mainClassName="grid grid-cols-2 gap-5"
            overlayContent={
              <>
                <textarea
                  name="description"
                  className="resize-none col-span-2"
                  rows={3}
                  placeholder="Description"
                />
                <div className="relative">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Suggested price"
                    className="peer w-full not-placeholder-shown:font-primary not-placeholder-shown:font-bold"
                  />
                  <label
                    htmlFor="price"
                    className="peer-placeholder-shown:hidden font-primary font-bold absolute right-[18px] top-[50%] -translate-y-[50%] text-lg"
                  >
                    $
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    name="revision-fee"
                    id=""
                    placeholder="Revision fee"
                    className="peer w-full not-placeholder-shown:font-primary not-placeholder-shown:font-bold"
                  />
                  <label
                    htmlFor="revision-fee"
                    className="peer-placeholder-shown:hidden font-primary font-bold absolute right-[18px] top-[50%] -translate-y-[50%] text-lg"
                  >
                    %
                  </label>
                </div>
              </>
            }
            cancelButtonContent="Cancel editing!"
            confirmButton={
              <button className="normal-button max-sm:text-xs" onClick={()=>{id && enrolled(id)}}>
                Finish applying
              </button>
             
            }
            error = {error}
            url = {url}
          />
        </div>
      </div>
    </div>
  );
}
