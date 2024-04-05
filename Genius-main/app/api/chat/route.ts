import OpenAI from 'openai';
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Stream } from 'openai/streaming.mjs';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
//here we are using post request to get the request of message
export async function POST(req: Request) {
  
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }
  
    const responce = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [{role: "system", content:"You are a conversation generator "  +  messages[messages.length-1].content}],
    });
    
return NextResponse.json(responce.choices[0].message.content)

  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
function OpenAIStream(responce: Stream<OpenAI.Chat.Completions.ChatCompletionChunk>) {
  throw new Error('Function not implemented.');
}

function newStreamingTextResponce(stream: void) {
  throw new Error('Function not implemented.');
}

