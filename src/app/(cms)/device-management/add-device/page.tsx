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
import useAddDeviceSchema from "@/utils/schema/useAddDevice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
type formValues = z.infer<typeof useAddDeviceSchema>;
export default function useAddDevice() {
  const form = useForm<formValues>({
    defaultValues: {
      employeeId: "",
      employeeName: "",
      date: "",
      deviceName: "",
      deviceModel: "",
      deviceType: "",
    },
    resolver: zodResolver(useAddDeviceSchema),
  });
  const handleSubmitValue = (data: formValues) => {
    console.log(data);
  };
  return (
    <>
      <div className="flex items-center w-full px-20 py-16   ">
        <div className="border border-gray-300 w-full max-w-4xl m-auto rounded-3xl px-20 py-6 shadow-lg">
          <h1 className="text-2xl font-bold mb-2">Add Facility</h1>
          <h1 className="text-sm font-bold mb-2">Employee Information</h1>
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
                name="employeeName"
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
              <div className="mt-3">
                <h1 className="text-sm font-bold mb-2">Device Information</h1>
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-[#272829]">
                        Date
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled
                          // value={""}
                          className="w-full border border-[#C9C9C9] text-xs"
                        />
                      </FormControl>
                      <FormMessage className=" text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="deviceName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-[#272829]">
                        Device Name
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
                  name="deviceModel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-[#272829]">
                        Device Model
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
                  name="deviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-[#272829]">
                        Device Type
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
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  className="border border-[#E30613] text-[#E30613] hover:bg-[#F7F7F7] w-36"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="default"
                  className="bg-[#E30613] text-white hover:bg-[#C20510] w-40"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
