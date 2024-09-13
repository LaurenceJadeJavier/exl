"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from "@/components/ui/responsive-modal";
import { useRegistraterEmployeeSchema } from "@/utils/schema/useRegisterEmployee";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import success from "@assets/images/success.png";
import Image from "next/image";

type formValues = z.infer<typeof useRegistraterEmployeeSchema>;
export default function AddEmployee() {
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex items-center w-full px-20 py-16">
        <div className="border border-gray-300 w-full max-w-4xl m-auto rounded-3xl p-12 shadow-lg">
          <h1 className="text-2xl font-bold mb-8">Add Facility</h1>
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
                    <FormLabel>Select Facility</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Facility" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">
                          m@example.com
                        </SelectItem>
                        <SelectItem value="m@google.com">
                          m@google.com
                        </SelectItem>
                        <SelectItem value="m@support.com">
                          m@support.com
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
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
              <div className="flex justify-end gap-4 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  className="border border-[#E30613] text-[#E30613] hover:bg-[#f7f7f7]"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="default"
                  className="bg-[#E30613] text-white hover:bg-[#c20510]"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <ResponsiveModal open={isOpen}>
        <ResponsiveModalContent className="max-w-md p-6 mx-auto">
          <ResponsiveModalHeader className="text-center">
            <ResponsiveModalDescription>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16">
                  <Image src={success} alt="Success" width={64} height={64} />
                </div>
                <h1 className="text-xl font-bold text-[#272829]">
                  Employee Added Successfully
                </h1>
                <Button
                  className="bg-[#E30613] text-white w-full py-2 mt-4"
                  onClick={handleModalClose}
                >
                  Confirm
                </Button>
              </div>
            </ResponsiveModalDescription>
          </ResponsiveModalHeader>
        </ResponsiveModalContent>
      </ResponsiveModal>
    </>
  );
}
