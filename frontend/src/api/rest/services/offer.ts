import { OfferDto } from "@/utils/types/validation/offer";
import api from "../api";
import {errorHandler} from "../api";

export const getOffers = async () => {
  try {
    const response = await api.get("/offer");
    return response.data as OfferDto[];
  } catch (error: any) {
    return errorHandler(error);
  }
};

export const enrolledOffer = async (offerId: number) => {
   try{
    const response = await api.patch(`/offer/enrolled/${offerId}`);
    return response.data;
   } catch (error: any) {
    return errorHandler(error);
  }
}
export const unenrolledOffer = async (offerId: number,userId : number) => {
  try{
   const response = await api.patch(`/offer/unenrolled/user/${offerId}/`+userId);
   return response.data;
  } catch (error: any) {
    return errorHandler(error);
  }
}

export const getEnrolledOffers = async(userId : number) => {
  try {
    const response = await api.get(`/offer/enrolled/user/`+userId);
    return response.data as OfferDto[];
  } catch (error: any) {
    return errorHandler(error);
  }
}

export const getAcceptedOffers = async(userId : number) => {
  try {
    const response = await api.get(`/offer/accepted/user/`+userId);
    return response.data as OfferDto[];
  } catch (error: any) {
    return errorHandler(error);
  }
}

export const getFinishedOffers = async(userId : number) => {
  try {
    const response = await api.get(`/offer/finished/user/`+userId);
    return response.data as OfferDto[];
  } catch (error: any) {
    return errorHandler(error);
  }
}