import { create } from "zustand";

import { z } from "zod";
import {
  useRegisterDeviceScheme,
  useRegistraterEmployeeSchema,
} from "@/utils/schema/useRegisterEmployee";

type RegisterDevice = z.infer<typeof useRegisterDeviceScheme>;
type useRegisterEmployee = z.infer<typeof useRegistraterEmployeeSchema>;

export type Forms = RegisterDevice & useRegisterEmployee;

interface FormState {
  formdataItems: Forms;
  setFormDataItems: (value: Forms) => void;
}

const useFormStore = create<FormState>((set) => ({
  formdataItems: {
    number: "",
    email: "",
    employeeId: "",
    name: "",
    facilityName: "",
    deviceDescription: "",
    deviceName: "",
  },
  // setFormDataItems: (value) => set({ formdataItems: value }),
  setFormDataItems: (newState: Forms) =>
    set((oldState) => ({
      ...oldState,
      formdataItems: {
        ...oldState.formdataItems,
        ...newState,
      },
    })),
}));

export default useFormStore;
