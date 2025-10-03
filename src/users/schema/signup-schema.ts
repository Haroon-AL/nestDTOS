import * as z from 'zod';

export const signupSchema = z
  .object({
    name: z.string().min(3),
    username: z.string().min(3),
    email: z.email(),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
        'Password must be ≥8 characters, include uppercase, lowercase, number, and special char',
      ),
    cnfpassword: z.string(),
    DOJ: z.date(),
  })
  .refine((d) => d.password == d.cnfpassword, {
    error: 'passwords dont match',
  })
  .refine(
    (d) => {
      let currDate = new Date();
      return d.DOJ < currDate;
    },
    { error: 'date must be less than today' },
  );
