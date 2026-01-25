export interface ProjectEntity {
  id: number;
  title: string;
  description: string;
  link: string;
  photo: string;
  category: string[];
  technologies: string[];
  createdAt: Date;
  // user: User; // We might not need the full user object on the frontend for this view, but keeping it optional just in case
}

export interface CreateProjectDto {
  title: string;
  description: string;
  link: string;
  photo: string;
  category: string[];
  technologies: string[];
}

export interface UpdateProjectDto extends Partial<CreateProjectDto> {}
