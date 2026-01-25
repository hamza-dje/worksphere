import api, { errorHandler } from "../api";
export const getMessages = async () => {
  try {
    const response = await api.get(`conversation/messages`); 
    return response.data;
  } catch (error: any) {
    return errorHandler(error);
  }
}