import * as z from "zod";
//zod is nothing but a schema
//export means we are exporting the formSchema from here

export const formSchema = z.object({
  //the propmp i will pass will be a string and have min 1 word otherwise a message 
  //and the best thing is the value is goes with name called prompt from page.tsx to api
  prompt: z.string().min(1, {
    message: "Photo prompt is required"
  }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
});
//exporting amount for list named amountOption with value and label 
export const amountOptions = [
  {
    value: "1",
    label: "1 Photo"
  },
  {
    value: "2",
    label: "2 Photos"
  },
  {
    value: "3",
    label: "3 Photos"
  },
  {
    value: "4",
    label: "4 Photos"
  },
  {
    value: "5",
    label: "5 Photos"
  }
];
//same as amount we are exporting resolutionopetion
export const resolutionOptions = [
  {
    value: "256x256",
    label: "256x256",
  },
  {
    value: "512x512",
    label: "512x512",
  },
  {
    value: "1024x1024",
    label: "1024x1024",
  },
];
