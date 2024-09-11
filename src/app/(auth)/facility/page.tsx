"use client";
import landing from "@assets/images/landing2.png";
import Image from "next/image";
import exlLogo from "@assets/images/exlLogo.png";
import { z } from "zod";
import useFacilitiesSchema from "@/utils/schema/useFacilities";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
type formValues = z.infer<typeof useFacilitiesSchema>;

export default function SelectFacilities() {
  const router = useRouter();
  const form = useForm<formValues>({
    defaultValues: {
      facilityName: "",
    },
    resolver: zodResolver(useFacilitiesSchema),
  });
  const handleSubmitValue = (data: formValues) => {
    console.log(data);
    router.push("/checkin-out-device");
  };

  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-full"
        style={{ backgroundImage: `url(${landing.src})` }}
      >
        <div className="flex items-center justify-center h-full">
          {/* Remove fixed height to make it more flexible */}
          <div className="w-[34rem] bg-white rounded-3xl p-2  pb-6">
            <div className="flex flex-col items-center text-center justify-center pt-2">
              <Image src={exlLogo} alt="logo" width={80} />
              <div>
                <h1 className="flex flex-col text-md text-lg font-bold">
                  Welcome!
                </h1>
                <p className="text-xs">Enter your credentials to Sign In</p>
              </div>
              <div className="w-full px-auto flex flex-col gap-2">
                <div className="w-[70%] justify-center mx-auto text-left">
                  <div className="w-full">
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(handleSubmitValue)}
                        className="space-y-6 w-full"
                      >
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
                        <div>
                          <Button className="w-full" type="submit">
                            Proceed
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
