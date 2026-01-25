import api, { errorHandler } from "../api";
import {
  ProjectEntity,
  CreateProjectDto,
  UpdateProjectDto,
} from "@/utils/types/ProjectEntity";

export const getProjects = async (id?: number) => {
  try {
    const url = id ? `project/user/${id}` : "project";
    const response = await api.get<ProjectEntity[]>(url);
    return response.data;
  } catch (error: any) {
    return errorHandler(error);
  }
};

export const createProject = async (data: CreateProjectDto, file?: File) => {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("link", data.link);

  // Handle arrays
  if (Array.isArray(data.category)) {
    data.category.forEach((cat) => formData.append("category", cat));
  }
  if (Array.isArray(data.technologies)) {
    data.technologies.forEach((tech) => formData.append("technologies", tech));
  }

  if (file) {
    formData.append("photo", file);
  }

  try {
    const response = await api.post<ProjectEntity>("project/add", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error: any) {
    return errorHandler(error);
  }
};

export const updateProject = async (
  id: number,
  data: UpdateProjectDto,
  file?: File
) => {
  const formData = new FormData();
  if (data.title) formData.append("title", data.title);
  if (data.description) formData.append("description", data.description);
  if (data.link) formData.append("link", data.link);

  if (Array.isArray(data.category)) {
    data.category.forEach((cat) => formData.append("category", cat));
  }
  if (Array.isArray(data.technologies)) {
    data.technologies.forEach((tech) => formData.append("technologies", tech));
  }

  if (file) {
    formData.append("file", file);
  }

  try {
    const response = await api.patch<ProjectEntity>(`project/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error: any) {
    return errorHandler(error);
  }
};

export const deleteProject = async (id: number) => {
  try {
    const response = await api.delete(`project/${id}`);
    return response.data;
  } catch (error: any) {
    return errorHandler(error);
  }
};
