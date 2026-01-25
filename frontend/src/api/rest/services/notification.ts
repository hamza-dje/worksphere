import { notificationDto } from "@/utils/types/validation/notification";
import api, { errorHandler } from "../api";

export const getNotification = async (id : number) => {
  try {
    const response = await api.get(`notification/all/${id}`);
    return response.data as notificationDto;
  } catch (error: any) {
    return errorHandler(error);
  }
};