import clientPromise, { dbName } from "../../../lib/mongo"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection("contacts");

    const result = await collection.insertOne({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Message sent successfully", id: result.insertedId });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 }
    );
  }
}
