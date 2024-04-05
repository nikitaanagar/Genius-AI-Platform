"use client"
import { Axis3DIcon, MessageSquare } from "lucide-react";

import { useRouter } from "next/navigation";
import * as z from "zod";
import { Heading } from "@/components/Heading";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { useState } from "react";
import { useChat } from 'ai/react';


const Conversation = () => {
 
  const {input, handleInputChange,handleSubmit,isLoading,messages} = useChat();
      
  return (
    <div>
      <Heading
      title="Conversation"
      description="Most Advanced Ai conversation model"
      icon="Code"
      iconColor="text-violet-500"
      bgColor="bg-violet-500/10"/>

<div className="px-4 lg:px-8">
  <div>
    {/* ...form helps to use submit, register, etc */}
    <form 
      onSubmit={handleSubmit}
      className="col-span-12 lg:col-span-10 rounder-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
    >
      <Input
        className="col-span-12 md:col-span-6 lg:col-span-8 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
        disabled={isLoading}
        placeholder="How do I go to college without going there"
        value={input}
        onChange={handleInputChange}
      />
      
      <Button className="col-span-12 md:col-span-6 lg:col-span-4" disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Generate'}
      </Button>
    </form>

    <div className="flex flex-col gap-y-4">
    {messages.map((message, index) => (
  <div key={index} className="bg-gray-200 p-3 rounded-md">
    <p className="text-sm">
      <span className="font-semibold">{index % 2 === 0 ? 'User' : 'Answer'}:</span> {message.content}
    </p>
  </div>
))}
</div>

  </div>
</div>

    </div>
    
  );
}

export default Conversation






