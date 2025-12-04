import { z } from "zod";
import { id } from "zod/locales";

export const signUpSchema = z.object({
  id: z.number().optional(),
  firstName: z
    .string()
    .min(2, "First name is required")
    .max(50, "First name is too long"),

  lastName: z
    .string()
    .min(2, "Last name is required")
    .max(50, "Last name is too long"),

  email: z.email("Email must be valid"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/(?=.*[A-Z])/, "Password must contain at least one uppercase letter")
    .regex(/(?=.*[0-9])/, "Password must contain at least one number")
    .optional(),

  role: z.enum(
    ["client", "admin", "freelancer"],
    "Role must be client, admin, or freelancer",
  ),
});

export type SignUpDto = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  email: z.email("Email must be valid"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/(?=.*[A-Z])/, "Password must contain at least one uppercase letter")
    .regex(/(?=.*[0-9])/, "Password must contain at least one number"),
});
export type SignInDto = z.infer<typeof signInSchema>;

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

export const portfolioSchema = z.object({
  mobile: z
    .string()
    .min(10, "Mobile number is required")
    .max(15, "Mobile number is too long"),


  description: z
    .string()
    .min(10, "Description is required")
    .max(500, "Description is too long"),

  location: z
    .string()
    .min(2, "Location is required")
    .max(100, "Location is too long"),

  portfolioLink: z.url("Portfolio link must be a valid URL").optional(),
});

export type PortfolioDto = z.infer<typeof portfolioSchema>;
