import { z } from "zod";

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
  photo : z.string().optional(),
  totalAmount : z.number().optional(),
  thisMonthAmount : z.number().optional(),
  previousMonthAmount : z.number().optional(),
});


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
  portfolio : portfolioSchema.optional(),
  photo : z.string().optional(),
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


export type PortfolioDto = z.infer<typeof portfolioSchema>;


export const editProfileSchema = z.object({
  firstName: z.string().min(2, "Invalid first name").max(50),
  lastName: z.string().min(2, "Invalid last name").max(50),
  mobile: z.string().min(10, "Invalid mobile number").max(15),
  description: z.string().min(10, "Invalid description").max(500),
  location: z.string().min(2, "Invalid location").max(100),
  portfolioLink: z.url("Must be a valid URL").optional().or(z.literal("")),
});

export type EditProfileFormValues = z.infer<typeof editProfileSchema>;