import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: Request) {
  try {
    const { message, noteContent } = await request.json();

    // Initialize the model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // Create a chat context that includes the note content
    const context = `You are a friendly study assistant helping with questions about the following educational content, which will be a module of some course:\n\n${noteContent}\n\n
    Please answer questions based on this content and anything related to it.
    Your responses should have good structure, use markdown. 
    Try to keep it concise.
    If you are asked any word meanings, you can answer them.
    If you are asked about anything non academic, Respond with "This chat is for questions related to this modules content only. If you are asking questions related to any other course or module, please do so in the relevant module chat or GraDex. If its something irrelevant, Padhle Bro :)"`;

    // Start a chat session
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: context }],
        },
        {
          role: 'model',
          parts: [{ text: 'I understand. I will help answer questions about this educational content.' }],
        },
      ],
    });

    // Get response from the model
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ response: text }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to process the chat request',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}