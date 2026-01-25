"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ProjectEntity } from "@/utils/types/ProjectEntity";
import { getProjects, deleteProject } from "@/api/rest/services/project";
import { ProjectCard } from "@/components/user-space/shared/projects/ProjectCard";
import { ProjectModal } from "@/components/user-space/shared/projects/ProjectModal";
import { useUserStore } from "@/store/store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from "@/utils/types/validation/project";

export default function Account() {
  const id = useUserStore((state) => state.id);
  const [projects, setProjects] = useState<ProjectEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectEntity | null>(
    null
  );
 

  const fetchProjects = async () => {
    setLoading(true);
    const res = await getProjects(id!);
    if (Array.isArray(res)) {
      setProjects(res);
    } else {
      console.error("Failed to fetch projects", res);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreate = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const handleEdit = (project: ProjectEntity) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      const res = await deleteProject(id);
      if (res && !res.error) {
        toast.success("Project deleted");
        fetchProjects();
      } else {
        toast.error(res?.error || "Failed to delete project");
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProject(null);
  };

  const handleSuccess = () => {
    fetchProjects();
    handleCloseModal();
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl col-span-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
          <p className="text-gray-500 mt-1">
            Manage your portfolio projects here.
          </p>
        </div>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
        >
          <span className="text-xl leading-none">+</span> Add New Project
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-300">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No projects yet
          </h3>
          <p className="text-gray-500 mb-6">
            Start building your portfolio by adding your first project.
          </p>
          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-white border cursor-pointer border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Create Project
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(25%,1fr))] gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={editingProject}
        onSuccess={handleSuccess}
      />
    </div>
  );
}
