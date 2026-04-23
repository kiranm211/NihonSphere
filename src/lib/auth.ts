import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ?? "nihonsphere-dev-secret";

export type AuthPayload = {
  email: string;
  level: string;
};

export function createJwt(payload: AuthPayload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyJwt(token: string): AuthPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AuthPayload;
  } catch {
    return null;
  }
}
