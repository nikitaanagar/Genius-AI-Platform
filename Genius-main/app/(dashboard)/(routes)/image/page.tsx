"use client";

import * as z from "zod";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Download, ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Loader } from "@/components/loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
//importing the things from .constants
import { amountOptions, formSchema, resolutionOptions } from "./constants";

const PhotoPage = () => {
  //don't know why use router
  const router = useRouter();
  //use state variable as photos that holds a string
  const [photos, setPhotos] = useState<string[]>([]);
  //set form that is type of useForm imported from react 
  //contains schema defind in formSchema in .constants
  const form = useForm<z.infer<typeof formSchema>>({
    //don't know but always used when we have a schema
    resolver: zodResolver(formSchema),
    //default values is nothing but defalut values
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
    },
  });
  
  const isLoading = form.formState.isSubmitting;
  //making a function named onSubmit and using schema formSchema
  //geting all values from the form 
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      //set photos link to null first
      setPhotos([]);
      //sending post request to /api/image which get values and send response 
      const response = await axios.post("/api/image", values);
       //by this we will get the url of image in a string
      const urls = response.data.map((image: { url: string }) => image.url);
      //setphots = urls
      setPhotos(urls);
    } catch (error: any) {
      if (error?.response?.status === 403) {
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      {/* nothing but a prop /hook */}
      <Heading
        title="Image Generation"
        description="Turn your prompt into an image."
        icon="ImageIcon"
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
      <div className="px-4 lg:px-8">
        <Form {...form}>
          <form
          //when we will submit it call onSubmit
            onSubmit={form.handleSubmit(onSubmit)}
            className="
              rounded-lg 
              border 
              w-full 
              p-4 
              px-3 
              md:px-6 
              focus-within:shadow-sm
              grid
              grid-cols-12
              gap-2
            "
          >
          
            <FormField
            //name prompt means value me prompt nam se jaega
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-6">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isLoading}
                      placeholder="A picture of a horse in Swiss alps"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-2">
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {amountOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="resolution"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-2">
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {resolutionOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <Button
              className="col-span-12 lg:col-span-2 w-full"
              type="submit"
              disabled={isLoading}
              size="icon"
            >
              Generate
            </Button>
          </form>
        </Form>
        {isLoading && (
          <div className="p-20">
            <Loader />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {photos.map((photo) => (
            <Card key={photo} className="rounded-lg overflow-hidden">
              <div className="relative aspect-square">
               <img src={photo}/>
              </div>
              <CardFooter className="p-2">
                <Button
                  onClick={() => window.open(photo)}
                  variant="secondary"
                  className="w-full"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;
