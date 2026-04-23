import jwt from "jsonwebtoken";
import { randomUUID } from "crypto";

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (process.env.NODE_ENV === "production" && !secret) {
    throw new Error("JWT_SECRET must be set in production");
  }
  return secret ?? "nihonsphere-dev-secret";
}

export type AuthPayload = {
  email: string;
  level: string;
};

export function createJwt(payload: AuthPayload) {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: "7d", jwtid: randomUUID() });
}

export function verifyJwt(token: string): AuthPayload | null {
  try {
    return jwt.verify(token, getJwtSecret()) as AuthPayload;
  } catch {
    return null;
  }
}
