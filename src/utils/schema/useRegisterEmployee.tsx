import z from "zod";

export const useRegistraterEmployeeSchema = z.object({
  employeeId: z.string().min(1, { message: "Empty fields" }).max(10),
  name: z.string().min(1, { message: "required to fill this input" }).max(255),
  facilityName: z.string({
    required_error: "Please select an gender to display.",
  }),
  number: z
    .string()
    .regex(/^(09\d{9}|\+63\d{10})$/, { message: "invalid phone number" }),
  email: z.string().email({ message: "Invalid Email" }),
});

export const useRegisterDeviceScheme = z.object({
  deviceName: z
    .string()
    .min(1, { message: "required to fill this input" })
    .max(255),
  deviceDescription: z
    .string()
    .min(1, { message: "required to fill this input" })
    .max(255),
});
