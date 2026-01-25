"use client";
import { getOffers } from "@/api/rest/services/offer";
import ClientNeedCard from "@/components/ClientNeedCard";
import FilterBar from "@/components/navbar/authenticated/FilterBar";
import { OfferDto } from "@/utils/types/validation/offer";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function HomePage() {
  const [offers, setOffers] = useState<OfferDto[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchOffers = async () => {
      try {
        const offersResult = await getOffers();
        setOffers(offersResult as OfferDto[]);
      } catch (error: any) {
        toast.error(`Can't get offers: ${error.message}`);
      }
    };
    fetchOffers();
  }, []);

  if (!mounted) return null; 

  return (
    <>
      <FilterBar />
      <div className="w-[1100px] max-xl:w-[900px] max-lg:w-full max-lg:px-8 max-md:px-2 mx-auto mt-10">
        {offers && offers.map((offer) => (
          <ClientNeedCard key={offer.id} user={offer.user} service={offer.service} price={offer.price} category={offer.category} technologies={offer.technologies} createdAt={offer.createdAt} description={offer.description} photo={offer.user?.portfolio?.photo} id = {offer.id} />
        ))}
      </div>
    </>
  );
}
