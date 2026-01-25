import { PortfolioDto } from "@/utils/types/validation/user";
import api, { errorHandler } from "../api";

export const createPortfolio = async (dto: PortfolioDto, file?: File) => {
  const formData = new FormData();
  formData.append("mobile", dto.mobile);
  formData.append("description", dto.description);
  formData.append("location", dto.location);
  if (dto.portfolioLink) formData.append("portfolioLink", dto.portfolioLink);
  if (file) formData.append("photo", file);

  try {
    const response = await api.post("/portfolio/create", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error: any) {
    return errorHandler(error);
  }
};

export const getPortfolio = async (id: number) => {
  try {
    const response = await api.get("portfolio/" + id);
    return response.data as { dto: PortfolioDto; photo: string };
  } catch (error: any) {
    return errorHandler(error);
  }
};

export const updatePortfolio = async (dto?: PortfolioDto, file?: File) => {
  const formData = new FormData();
  if(dto?.mobile)
    formData.append("mobile", dto.mobile);
  
  if(dto?.description)
    formData.append("description", dto.description);
  
  if(dto?.location)
    formData.append("location", dto.location);
  
  if (dto?.portfolioLink) 
    formData.append("portfolioLink", dto.portfolioLink);
  if (file) 
    formData.append("file", file);

  try {
    const response = await api.patch("/portfolio", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error: any) {
    return errorHandler(error);
  }
};
