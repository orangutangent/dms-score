import { PrismaClient } from "../../prisma/generated/prisma"; // Changed back to named import

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

console.log("DATABASE_URL from process.env:", process.env.DATABASE_URL);

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
