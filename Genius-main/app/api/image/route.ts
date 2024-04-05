import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import    OpenAI  from "openai";

//conetion
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
//this syntex is for post request
export async function POST(
  req: Request
) {
  try {
    //geting data using post including the prompt
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 });
    }

    

    const response = await openai.images.generate({
        model: "dall-e-2",
        prompt,
    });
    

   console.log(response.data);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log('[IMAGE_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};