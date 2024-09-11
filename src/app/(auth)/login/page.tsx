"use client";
import { Button } from "@/components/ui/button";
import landing from "@assets/images/landing2.png";
import Image from "next/image";
import Link from "next/link";
import exlLogo from "@assets/images/exlLogo.png";
import { z } from "zod";
import useLoginSchema from "@/utils/schema/useLogin";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

type formValues = z.infer<typeof useLoginSchema>;

export default function Login() {
  const router = useRouter();
  const form = useForm<formValues>({
    defaultValues: {
      username: "",
      userpassword: "",
    },
    resolver: zodResolver(useLoginSchema),
  });

  const handleSubmitValue = (data: formValues) => {
    console.log(data);
    router.push("/facility");
  };

  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-full"
        style={{ backgroundImage: `url(${landing.src})` }}
      >
        <div className="flex items-center justify-center h-full">
          {/* Remove fixed height to make it more flexible */}
          <div className="w-[34rem] bg-white rounded-3xl p-2 pb-6">
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
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmitValue)}>
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs text-[#272829]">
                              Username
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
                        name="userpassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs text-[#272829]">
                              Password
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
                      <div className=" mt-4">
                        <Button className=" w-full">Sign In</Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
