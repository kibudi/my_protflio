import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import Message from "@/models/Message";

export async function POST(req: Request) {
  try {
    const { name, email, content } = await req.json();

    if (!name || !email || !content) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const newMessage = await Message.create({ name, email, content });

    return NextResponse.json(
      { success: true, message: newMessage },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Error saving message:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
