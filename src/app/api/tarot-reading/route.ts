import { GoogleGenAI } from "@google/genai";
import { NextRequest } from "next/server";

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function POST(request: NextRequest) {
  try {
    const { cards, question } = await request.json();

    if (!cards || cards.length === 0) {
      return new Response(JSON.stringify({ error: "No cards provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Build the prompt for tarot reading
    const cardDescriptions = cards.map((card: { position: string; name: string; meaning: string; reversed: boolean }) => 
      `- ${card.position.toUpperCase()}: ${card.name}${card.reversed ? " (Reversed)" : ""} - ${card.meaning}`
    ).join("\n");

    const prompt = `You are The Oracle, a mystical AI tarot reader with deep wisdom and an ethereal presence. Provide a personalized tarot reading based on the following three-card spread:

${cardDescriptions}

${question ? `The seeker's question: "${question}"` : "The seeker has not asked a specific question, so provide general guidance."}

Guidelines:
- Speak in a mystical, wise, but accessible tone
- Connect the three cards to tell a cohesive story (Past → Present → Future)
- Be insightful and specific, not vague
- Keep the reading concise (2-3 paragraphs)
- End with empowering guidance
- Use poetic language but stay clear

Begin your reading:`;

    // Use streaming for real-time response
    const response = await genAI.models.generateContentStream({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    // Create a ReadableStream for the response
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of response) {
          const text = chunk.text;
          if (text) {
            controller.enqueue(new TextEncoder().encode(text));
          }
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Tarot reading API error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate reading" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
