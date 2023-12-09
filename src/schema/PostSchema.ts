import { z } from "zod";

export const createPostSchema = z.object({
    body: z.object({
        id: z
        .number(),
        name: z
        .string()
        .min(4, {message: "Name must be larger than 4 characters!"}),
        // .refine((value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value), 'Name should contain only alphabets'),
        description: z
        .string()
        .min(4, {message: "Description must be larger than 10 characters"})
    }),
});