import { z } from "zod";

const useFacilitiesSchema = z.object({
  facilityName: z.string().min(1, { message: "Required to select" }),
});

export default useFacilitiesSchema;
