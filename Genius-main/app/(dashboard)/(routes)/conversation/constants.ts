import* as z from "zod";

export const formSchema = z.object({
    prompt: z.string().min(1,{
        message:"Prompt is required"
    }),
});

//defines a zod schema for prompt 
//that if prompt have min 1 char
//else message prompt is required