import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required").max(150, "Title too long"),
  description: z.string().min(1, "Description is required"),
  link: z.url("Invalid URL").max(255, "URL too long"),
  category: z.string().min(1, "At least one category required"),
  technologies: z.string().min(1, "At least one technology required"),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;
