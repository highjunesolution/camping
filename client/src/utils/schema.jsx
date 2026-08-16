import { z } from "zod";

const campingSchema = z.object({
  title: z.string().min(2, "Title must be more than 2 charator"),
  price: z.coerce.number(),
  description: z.string().max(50, "Description must be less than 50 charactor"),
  category: z.string(),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
  image: z.any(),
});

const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, "first name must be more than 2 charactor")
    .max(30, "first name must be less than 30 charactor"),
  lastName: z
    .string()
    .min(2, "first name must be more than 2 charactor")
    .max(30, "first name must be less than 30 charactor"),
});

export { campingSchema, profileSchema };
