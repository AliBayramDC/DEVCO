"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import * as z from "zod";

import { Check, Computer, ScreenShare, Share, Smile } from "lucide-react";

import Image from "next/image";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

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

import { useToast } from "@/components/ui/use-toast";

import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  ad: z.string(),
  soyad: z.string(),
  email: z.string().email(),
  telim: z.enum([
    "MS Excel Ekspert",
    "Data Analitika",
    "Excel Peşəkar",
    "MS Excel Başlanğıc",
    "Bank üzrə Attestasiya təlimi",
  ]),
  
});

type FormValues = {
  ad: string;
  soyad: string;
  email: string;
  telim:
    | "MS Excel Ekspert"
    | "Data Analitika"
    | "Excel Peşəkar"
    | "MS Excel Başlanğıc"
    | "Bank üzrə Attestasiya təlimi";
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      ad: "",
      soyad: "",
      email: "",
      telim: "Data Analitika",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
      className="md:pb-20 md:flex justify-between md:p-28 bg-[#111019] h-full"
    >
      {!submitted ? (
        <div className="md:w-1/3 font-medium px-10">
          <div className="md:text-[80px] text-[45px] pt-16 md:pt-0 leading-tight text-[#f1f0f3]">
            Müraciət Et
          </div>
          <div
            className="
                    text-2xl
                    md:text-3xl
                    py-10
                    text-[#bbb6c6]
                    font-light
                    leading-relaxed
                    "
          >
          </div>

          <div className="flex flex-col space-y-6 pb-20">
            <div className="flex gap-6 items-center">
              <div className="bg-[#eff0ff] p-4 items-center justify-center flex rounded-full">
                <Check className="text-4xl text-[#4b42ad]" />
              </div>
              <div className="md:text-xl text-[#eff0ff] font-light">
                Data Analitika
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <div className="bg-[#eff0ff] p-4 items-center justify-center flex rounded-full">
                <Check className="text-4xl text-[#4b42ad]" />
              </div>
              <div className="md:text-xl text-[#eff0ff] font-light">
              Bank üzrə attestasiya təlimi
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <div className="bg-[#eff0ff] p-4 items-center justify-center flex rounded-full">
                <Check className="text-4xl text-[#4b42ad]" />
              </div>
              <div className="md:text-xl text-[#eff0ff] font-light">
              Excel &apos;Ekspert&apos;
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="bg-[#eff0ff] p-4 items-center justify-center flex rounded-full">
                <Check className="text-4xl text-[#4b42ad]" />
              </div>
              <div className="md:text-xl text-[#eff0ff] font-light">
              Excel &apos;Peşəkar&apos;

              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="bg-[#eff0ff] p-4 items-center justify-center flex rounded-full">
                <Check className="text-4xl text-[#4b42ad]" />
              </div>
              <div className="md:text-xl text-[#eff0ff] font-light">
              Excel &apos;Başlanğıc&apos; 

              </div>
            </div>
           

            
          </div>
        </div>
      ) : (
        <div className="
        text-4xl 
        md:text-6xl 
        my-40 
        text-[#eff0ff] 
        items-center 
        justify-center 
        text-center 
        px-10 
        mx-auto
        ">
            <div>
                {" "}
                Müraciət etdiyiniz üçün təşəkkürlər. Tezliklə sizə geri dönüləcək.
                {" "}
                </div>
                <div className="mx-auto items-center justify-center flex py-40">
                    <Smile className=" text-[#4b42ad]" size={100} />
                </div>
            </div>
      )}

            <Form {...form}>
                {!submitted ? (
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="
                        md:w-1/2 
                        space-y-6 
                        border 
                        p-10 
                        md:p-20
                        md:rounded-[60px]
                        bg-white
                        sm:overflow-hidden
                        h-1/2
                        "
                        >
                            <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem className="items-center justify-center space-y-4 w-full">
                                    <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                         EMAIL *
                                    </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                </FormItem>
                            )}
                            />

                        <FormField
                            control={form.control}
                            name='ad'
                            render={({ field }) => (
                                <FormItem className="items-center justify-center space-y-4 w-full">
                                    <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                        AD *
                                    </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                </FormItem>
                            )}
                            />

                        <FormField
                            control={form.control}
                            name='soyad'
                            render={({ field }) => (
                                <FormItem className="items-center justify-center space-y-4 w-full">
                                    <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                        SOYAD *
                                    </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                </FormItem>
                            )}
                            />

                            <FormField
                            control={form.control}
                            name='telim'
                            render={({ field }) => (
                                <FormItem className="items-center justify-center space-y-4 w-full">
                                    <FormLabel className="w-60 text-xs md:text-sm pt-4 text-[#6c6684] font-medium">
                                        TƏLİM *
                                    </FormLabel>
                                    <Select 
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Təlim Seç" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                    
                                            <SelectItem value="MS Excel Expert">MS Excel &apos;Ekspert&apos;</SelectItem>
                                            <SelectItem value="MS Excel Peşəkar">MS Excel &apos;Peşəkar&apos;</SelectItem>
                                            <SelectItem value="Data Analitika">Data Analitika</SelectItem>
                                            <SelectItem value="MS Excel Başlanğıc">MS Excel &apos;Başlanğıc&apos;</SelectItem>
                                            <SelectItem value="Bank üzrə Attestasiya təlimi">Bank üzrə Attestasiya təlimi</SelectItem>
                                    
                                         

                                        </SelectContent>

                                    </Select>
                                  
                                </FormItem>
                            )}
                            />

                         

                           <div className="flex items-center gap-4">
                            <Button type="submit" className="
                            text-md
                            font-light
                            rounded-[40px]
                            border-4
                            border-indigo-400/90
                            p-6
                            bg-[#565add]
                            hover:scale-110
                            transition-all
                            duration-300
                            shadow-md
                        hover:shadow-indigo-300
                            "
                            disabled={loading}
                            onClick={() => form.handleSubmit(onSubmit)}
                            >
                                Göndər

                            </Button>

                           </div>
                        
                      
                        </form>
                ) : (
                    <>
                    </>
                )}
            </Form>

    </div>
  );
}
