import z from 'zod';

export const createDogSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    age: z.number().positive().int('Age must be a positive integer'),
    breed: z.string().min(1, 'Breed is required'),
  })
  .required();

export type CreateDogZodDto = z.infer<typeof createDogSchema>;
