import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ bookmarks: [], persistent: false });
}

export async function POST(request: Request) {
  const body = await request.json();
  const id = String(body.id ?? "").trim();

  if (!id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }

  return NextResponse.json({ bookmarks: [id], persistent: false });
}
