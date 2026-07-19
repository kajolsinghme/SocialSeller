import {z} from 'zod';

export const signUpSchema = z.object({
    name: z.string().min(3, "Name is required"),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(3, "Password must be at least 3 characters")
})

export const loginSchema = z.object({
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(1, "Password is required")
})