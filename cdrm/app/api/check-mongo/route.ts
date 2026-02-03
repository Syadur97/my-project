import clientPromise, { dbName } from "../../../lib/mongo";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    await db.command({ ping: 1 });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("MongoDB ping failed", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
