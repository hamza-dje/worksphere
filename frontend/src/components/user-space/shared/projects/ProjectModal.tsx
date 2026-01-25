import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { ProjectEntity, CreateProjectDto } from "@/utils/types/ProjectEntity";
import { createProject, updateProject } from "@/api/rest/services/project";
import { InputField } from "@/components/user-space/InputField";
import { projectSchema, ProjectFormValues } from "@/utils/types/validation/project";
import { Validation } from "../../validation";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectEntity | null;
  onSuccess: () => void;
}

export const ProjectModal = ({
  isOpen,
  onClose,
  project,
  onSuccess,
}: ProjectModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      link: "",
      category: "",
      technologies: "",
    },
    mode: "onChange",
  });
  useEffect(() => {
    if (isOpen) {
      setSelectedFile(null);
      if (project) {
        reset({
          title: project.title,
          description: project.description,
          link: project.link,
          category: project.category.join(", "),
          technologies: project.technologies.join(", "),
        });
      } else {
        reset({
          title: "",
          description: "",
          link: "",
          category: "",
          technologies: "",
        });
      }
    }
  }, [isOpen, project, reset]);

  const onSubmit = async (data: ProjectFormValues) => {
    setIsSubmitting(true);
    try {
      const payload: CreateProjectDto = {
        ...data,
        photo: "", // Photo is handled via file upload
        category: data.category.split(",").map((s) => s.trim()).filter(Boolean),
        technologies: data.technologies
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      };

      if (project) {
        const res = await updateProject(project.id, payload, selectedFile || undefined);
        if ((res as any).error) throw new Error((res as any).error);
        toast.success("Project updated successfully");
      } else {
        const res = await createProject(payload, selectedFile || undefined);
        if ((res as any).error) throw new Error((res as any).error);
        toast.success("Project created successfully");
      }
      onSuccess();
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">
            {project ? "Edit Project" : "Add New Project"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1 flex flex-col">
              <label className="text-sm font-medium text-gray-700">Title</label>
              <InputField
                type="text"
                placeholder="Project Title"
                name="title"
                control={control}
                className="text-sm text-gray-700 placeholder:text-sm"
              />
             <Validation error={errors.title}></Validation>
            </div>

            <div className="space-y-1 flex flex-col justify-center">
              <label className="text-sm font-medium text-gray-700">
                Project Link
              </label>
              <InputField
                type="text"
                placeholder="https://..."
                name="link"
                control={control}
                className="text-sm text-gray-700 placeholder:text-sm"
              />
                <Validation error={errors.link}></Validation>
            </div>
          </div>

          

          <div className="space-y-1 flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Description
            </label>
            <InputField
              type="text"
              placeholder="Describe your project..."
              name="description"
              control={control}
              className="text-sm text-gray-700 placeholder:text-sm"
            />
            <Validation error={errors.description}></Validation>
          </div>

          <div className="space-y-1 flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Categories (comma separated)
            </label>
            <InputField
              type="text"
              placeholder="Web, Mobile, AI..."
              name="category"
              control={control}
              className="text-sm text-gray-700 placeholder:text-sm"
            />
           <Validation error={errors.category}></Validation>
          </div>

          <div className="space-y-1 flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Technologies (comma separated)
            </label>
            <InputField
              type="text"
              placeholder="React, Node.js, Python..."
              name="technologies"
              control={control}
              className="text-sm text-gray-700 placeholder:text-sm"
            />
           <Validation error={errors.technologies}></Validation>
          </div>

           <div className="space-y-2 flex-col flex">
               <label className="text-sm font-medium text-gray-700">
                 Project Photo
               </label>
               <div className="flex items-center gap-4">
                 <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                   <span className="text-sm text-gray-600">Choose File</span>
                   <input
                     type="file"
                     accept="image/*"
                     className="hidden"
                     onChange={(e) => {
                       if (e.target.files?.[0]) {
                         setSelectedFile(e.target.files[0]);
                       }
                     }}
                     
                   />
                 </label>
                 <span className="text-sm text-gray-500">
                   {selectedFile ? selectedFile.name : "No file chosen"}
                 </span>
               </div>
             </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-700 cursor-pointer transition-colors disabled:opacity-50"
            >
              {isSubmitting
                ? "Saving..."
                : project
                ? "Update Project"
                : "Create Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
