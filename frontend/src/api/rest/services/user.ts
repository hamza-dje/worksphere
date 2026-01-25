import { Sign } from "crypto";
import api, { errorHandler } from "../api";
import { SignUpDto } from "@/utils/types/validation/user";

export const getProfile = async () => {
  try {
    const response = await api.get("user/profile");
    return response.data as SignUpDto;
  } catch (error: any) {
    return errorHandler(error);
  }
};

export const updateProfile = async (data: Partial<SignUpDto>) => {
  try {
    const response = await api.patch("user/update", data);
    return response.data;
  } catch (error: any) {
    return errorHandler(error);
  }
};
