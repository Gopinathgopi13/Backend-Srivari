import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email()
    .transform((val) => val.toLocaleLowerCase()),
  password: z.string().min(8, "Password must be minimum 8 characters"),
});
