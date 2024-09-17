import { z } from "zod";

const useAddDeviceSchema = z.object({
  employeeId: z.string().min(1, { message: "Empty input" }),
  employeeName: z.string().min(1, { message: "Empty input" }),
  date: z.string().optional(),
  deviceName: z.string().min(1, { message: "Empty input" }),
  deviceModel: z.string().min(1, { message: "Empty input" }),
  deviceType: z.string().min(1, { message: "Empty input" }),
});
export default useAddDeviceSchema;
