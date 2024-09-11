import { z } from "zod";

const useLoginSchema = z.object({
  username: z.string().email({ message: "invalid Email" }),
  userpassword: z.string().min(3, { message: "Empty fields" }).max(255),
});

export default useLoginSchema;
