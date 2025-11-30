import api, { errorHandler } from "../api";
import { SignInDto, SignUpDto } from "@/utils/types/validation/schemas";

export const signIn = async (dto: SignInDto) => {
  try {
    const response = await api.post("/auth/signin", dto);
    return response.data;
  } catch (error: any) {
    return errorHandler(error);
  }
};

export const signUp = async (dto: SignUpDto) => {
  try {
    const response = await api.post("/auth/signup", dto);
    return response.data;
  } catch (error: any) {
    return errorHandler(error);
  }
};

export const googleAuth = async () => {
  try {
    const response = await api.get("/auth/google");
    return response.data;
  } catch (error: any) {
    return errorHandler(error);
  }
};

export const googleAuthCallback = async () => {
  try {
    const response = await api.get(`/auth/google/callback`);
    return response.data;
  } catch (error: any) {
    return errorHandler(error);
  }
};

export const forgetPassword = async () => {
  try {
    const response = await api.post(`/auth/forgetPassword`);
    return response.data;
  } catch (error: any) {
    return errorHandler(error);
  }
};

export const resetPassword = async () => {
  try {
    const response = await api.post(`/auth/resetPassword`);
  } catch (error: any) {
    return errorHandler(error);
  }
};

export const signOut = async () => {
  try {
    const response = await api.post(`/auth/logout`);
  } catch (error: any) {
    return errorHandler(error);
  }
};

export const refreshAccessToken = async () => {
  try {
    const response = await api.get(`/auth/refresh`);
  } catch (error: any) {
    return errorHandler(error);
  }
};
