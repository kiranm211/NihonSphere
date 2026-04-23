import { NextResponse } from "next/server";

const bookmarks = new Set<string>();

export async function GET() {
  return NextResponse.json({ bookmarks: Array.from(bookmarks) });
}

export async function POST(request: Request) {
  const body = await request.json();
  const id = String(body.id ?? "").trim();

  if (!id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }

  if (bookmarks.has(id)) {
    bookmarks.delete(id);
  } else {
    bookmarks.add(id);
  }

  return NextResponse.json({ bookmarks: Array.from(bookmarks) });
}
