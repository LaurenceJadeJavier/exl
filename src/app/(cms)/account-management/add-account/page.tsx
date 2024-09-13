"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormDescription,
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import useAddAccountSchema from "@/utils/schema/useAddAccount";
import addField from "@assets/images/addField.png";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

type ProfileFormValues = z.infer<typeof useAddAccountSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  modules: [],
  emails: [{ value: " " }],
  accountName: "",
};

export default function AddAccount() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(useAddAccountSchema),
    defaultValues,
    mode: "onChange",
  });

  const { fields, append } = useFieldArray({
    name: "emails",
    control: form.control,
  });

  function onSubmit(data: ProfileFormValues) {
    console.log(data);
  }

  const items = [
    {
      id: "checkInOut",
      label: "Check In / Check Out Device",
    },
    {
      id: "deviceManagement",
      label: "Device Management",
    },
    {
      id: "accountManagement",
      label: "Account Management",
    },
    {
      id: "employeeManagement",
      label: "Employees Management",
    },
    {
      id: "locationManagement",
      label: "Location Management",
    },
  ] as const;

  return (
    <div className="flex items-center w-full px-20 py-16">
      <div className="border border-gray-300 w-full max-w-4xl m-auto rounded-3xl p-12 shadow-lg">
        <h1 className="text-2xl font-bold mb-8">Add Facility</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="accountName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Name</FormLabel>
                  <FormControl>
                    <Input className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="">
              {fields.map((field, index) => (
                <div className=" flex flex-row  ">
                  <div className="w-[100%]">
                    <FormField
                      control={form.control}
                      key={field.id}
                      name={`emails.${index}.value`}
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel className={cn(index !== 0 && "sr-only")}>
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex justify-center items-center my-2  ">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="m-auto"
                      onClick={() => append({ value: "" })}
                    >
                      <Image
                        src={addField}
                        alt="addField"
                        width={20}
                        className="m-auto"
                      />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <FormField
              control={form.control}
              name="modules"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Access Modules</FormLabel>
                  </div>
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="modules"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                // Update form value with the module ID
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-4">
              <Button type="submit">Update profile</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
