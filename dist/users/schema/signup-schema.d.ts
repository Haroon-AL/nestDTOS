import * as z from 'zod';
export declare const signupSchema: z.ZodObject<{
    name: z.ZodString;
    username: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    cnfpassword: z.ZodString;
    DOJ: z.ZodDate;
}, z.core.$strip>;
