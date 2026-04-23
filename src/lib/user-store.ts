import bcrypt from "bcryptjs";

export const users = new Map<string, { passwordHash: string; level: string }>([
  ["demo@nihonsphere.app", { passwordHash: bcrypt.hashSync("demo1234", 10), level: "N5" }],
]);
