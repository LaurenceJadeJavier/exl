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

type formValues = z.infer<typeof useRegistraterEmployeeSchema>;

export default function RegisterEmployee() {
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
  const handleSubmitValue = (data: formValues) => {
    console.log(data);
  };
  return (
    <>
      <div className=" border border-red-200 bg-[#FFFFFF] rounded-3xl">
        <div className="flex flex-col items-center text-center justify-center pt-6 space-y-4">
          <Image src={exlLogo} alt="logo" width={80} />
          <div className=" flex flex-row">
            <div className=" flex flex-col">
              <text>Register Device</text>
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
                  <div>
                    <Button variant={"outline"}>Submit</Button>
                  </div>
                </form>
              </Form>
            </div>
            <div>
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
