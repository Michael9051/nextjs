import { z } from "zod";

export const FormDataSchema = z.object({
    name: z
        .string()
        .nonempty("Name is required"),
    message: z
        .string()
        .nonempty("Message is required")
        .min(6, { message: "Message must be at least 6 characters long" }),
});

export const ContactFormSchema = z.object({
    name: z
        .string()
        .nonempty("Name is required"),
    email: z
        .string()
        .email("Invalid email address")
        .nonempty("Email is required"),
    message: z
        .string()
        .nonempty("Message is required")
        .min(6, { message: "Message must be at least 6 characters long" }),
});
