import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { createJwt } from "@/lib/auth";
import { users } from "@/lib/user-store";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: "email and password are required" }, { status: 400 });
  }

  const existing = users.get(email);
  if (!existing || !(await bcrypt.compare(password, existing.passwordHash))) {
    return NextResponse.json({ error: "invalid credentials" }, { status: 401 });
  }

  const token = createJwt({ email, level: existing.level });
  return NextResponse.json({ token, user: { email, level: existing.level } });
}
