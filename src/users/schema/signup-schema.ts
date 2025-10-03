import * as z from 'zod';

export const signupSchema = z
  .object({
    name: z.string().min(3),
    username: z.string().min(3),
    email: z.email(),
    password: z
      .string()
      .min(8, { message: 'Must be a minimum of 8 characters.' }),

    cnfpassword: z
      .string()
      .min(8, { message: 'Must be a minimum of 8 characters.' }),

    DOJ: z.date(),
  })
  .refine((d) => d.password == d.cnfpassword, {
    error: 'passwords dont match',
  })
  .refine((d) => {
    let currDate = new Date();
    return d.DOJ < currDate;
  },{error: "date must be less than today"});
