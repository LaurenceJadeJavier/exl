"use client";
import registerEmployeeImage from "@assets/images/registerVector.png";
import Image from "next/image";
import exlLogo from "@assets/images/exlLogo.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useRegistraterEmployeeSchema } from "@/utils/schema/useRegisterEmployee";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import useFormStore from "@/utils/zustand/registration/useRegistrationStore";

type formValues = z.infer<typeof useRegistraterEmployeeSchema>;

export default function RegisterEmployee() {
  const router = useRouter();
  const setFormDataItems = useFormStore((state) => state.setFormDataItems);

  const form = useForm<formValues>({
    defaultValues: {
      email: "",
      employeeId: "",
      facilityName: "",
      name: "",
      number: "",
    },
    resolver: zodResolver(useRegistraterEmployeeSchema),
  });
  const handleSubmitValue = (values: any) => {
    setFormDataItems(values);
    console.log(values, "register device");

    router.push("/register-device");
  };
  return (
    <>
      <div className="border border-red-200 bg-[#FFFFFF] rounded-3xl w-[60rem] min-h-[30rem]">
        <div className="flex flex-col items-center text-center justify-center pt-6 space-y-2 h-auto">
          <Image src={exlLogo} alt="logo" width={80} />
          <div className=" flex flex-row gap-6 w-full">
            <div className=" flex flex-col  w-full text-left px-4 py-4  ">
              <span className="font-bold text-2xl">Register Employee</span>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmitValue)}>
                  <FormField
                    control={form.control}
                    name="employeeId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-[#272829]">
                          Employee ID
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full border border-[#C9C9C9] text-xs"
                          />
                        </FormControl>
                        <FormMessage className=" text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-[#272829]">
                          Employee Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full border border-[#C9C9C9] text-xs"
                          />
                        </FormControl>
                        <FormMessage className=" text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="facilityName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-[#272829]">
                          Facility Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full border border-[#C9C9C9] text-xs"
                          />
                        </FormControl>
                        <FormMessage className=" text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-[#272829]">
                          Contact Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full border border-[#C9C9C9] text-xs"
                          />
                        </FormControl>
                        <FormMessage className=" text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-[#272829]">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full border border-[#C9C9C9] text-xs"
                          />
                        </FormControl>
                        <FormMessage className=" text-xs" />
                      </FormItem>
                    )}
                  />
                  <div className="w-full p-auto mt-4">
                    <Button className="w-full" variant={"default"}>
                      Next
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
            <div className="w-full m-auto ">
              <Image
                src={registerEmployeeImage}
                alt="registerEmployees"
                width={350}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
