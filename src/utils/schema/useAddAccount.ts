import { z } from "zod";

const useAddAccountSchema = z.object({
  // checkInOutDevice: z.boolean().default(false).optional(),
  // deviceManagement: z.boolean().default(false).optional(),
  // accountManagement: z.boolean().default(false).optional(),
  // employeeManagement: z.boolean().default(false).optional(),
  // locationManagement: z.boolean().default(false).optional(),
  modules: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  emails: z
    .array(
      z.object({
        value: z.string().email({ message: "Please enter a valid Email." }),
      })
    )
    .optional(),
  accountName: z.string().min(1, { message: "Empty fields" }).max(255),
});

export default useAddAccountSchema;
