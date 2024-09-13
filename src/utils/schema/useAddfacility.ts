import { z } from "zod";

const useAddFacilitySchema = z.object({
  facilityName: z.string().min(1, { message: "Empty input" }).max(255),
  facilityAddress: z.string().min(1, { message: "Empty input" }).max(255),
});

export default useAddFacilitySchema;
