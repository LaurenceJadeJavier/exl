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
import {
  useRegisterDeviceScheme,
  useRegistraterEmployeeSchema,
} from "@/utils/schema/useRegisterEmployee";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import useFormStore from "@/utils/zustand/registration/useRegistrationStore";

type formValues = z.infer<typeof useRegisterDeviceScheme>;

export default function RegisterDevice() {
  const formdataItems = useFormStore((state) => state.formdataItems);
  const setFormDataItems = useFormStore((state) => state.setFormDataItems);
  const router = useRouter();
  const form = useForm<formValues>({
    defaultValues: {
      deviceDescription: "",
      deviceName: "",
    },
    resolver: zodResolver(useRegisterDeviceScheme),
  });
  const handleSubmitValue = (data: any) => {
    setFormDataItems(data);
  };
  console.log(formdataItems, "items");
  return (
    <>
      <div className="border border-red-200 bg-[#FFFFFF] rounded-3xl w-[60rem] min-h-[30rem]">
        <div className="flex flex-col items-center text-center justify-center pt-6 space-y-2 h-auto">
          <Image src={exlLogo} alt="logo" width={80} />
          <div className=" flex flex-row gap-6 w-full">
            <div className=" flex flex-col  w-full text-left px-4 py-4  ">
              <span className="font-bold text-2xl">Register Device</span>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmitValue)}>
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
                    name="deviceDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-[#272829]">
                          Device Descriptions
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="w-full border h-full  border-[#C9C9C9] text-xs"
                          />
                        </FormControl>
                        <FormMessage className=" text-xs" />
                      </FormItem>
                    )}
                  />

                  <div className="w-full p-auto mt-4">
                    <Button className="w-full" variant={"default"}>
                      Submit
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
