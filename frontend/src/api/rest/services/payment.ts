import api, { errorHandler } from "../api";

export const createPaymentAccount = async (userId : number) => {
  try {
    const response = await api.post("/offer/payment/account/"+userId);
    return response.data;
  } catch (error: any) {
    errorHandler(error);
  }
}