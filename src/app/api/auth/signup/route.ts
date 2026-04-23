import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { createJwt } from "@/lib/auth";
import { users } from "@/lib/user-store";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, level = "N5" } = body;

  if (!email || !password) {
    return NextResponse.json({ error: "email and password are required" }, { status: 400 });
  }

  if (users.has(email)) {
    return NextResponse.json({ error: "user already exists" }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  users.set(email, { passwordHash, level });

  const token = createJwt({ email, level });
  return NextResponse.json({ token, user: { email, level } }, { status: 201 });
}
