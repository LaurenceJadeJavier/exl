import { create } from "zustand";

interface RegistrationState {
  employeeId: string;
  name: string;
  facilityName: string;
  number: string;
  email: string;
  deviceName: string;
  deviceDescription: string;
  setEmployeeId: (employeeId: string) => void;
  setName: (name: string) => void;
  setFacilityName: (facilityName: string) => void;
  setNumber: (number: string) => void;
  setEmail: (email: string) => void;
  setDeviceName: (deviceName: string) => void;
  setDeviceDescription: (deviceDescription: string) => void;
  reset: () => void;
}

export const useRegistrationStore = create<RegistrationState>((set) => ({
  employeeId: "",
  name: "",
  facilityName: "",
  number: "",
  email: "",
  deviceName: "",
  deviceDescription: "",

  setEmployeeId: (employeeId) => set({ employeeId }),
  setName: (name) => set({ name }),
  setFacilityName: (facilityName) => set({ facilityName }),
  setNumber: (number) => set({ number }),
  setEmail: (email) => set({ email }),
  setDeviceName: (deviceName) => set({ deviceName }),
  setDeviceDescription: (deviceDescription) => set({ deviceDescription }),

  // Function to reset all fields
  reset: () =>
    set({
      employeeId: "",
      name: "",
      facilityName: "",
      number: "",
      email: "",
      deviceName: "",
      deviceDescription: "",
    }),
}));
