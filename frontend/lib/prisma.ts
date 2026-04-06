import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Detect and discard stale global instances (prevents 'model undefined' after schema changes)
const existingPrisma = globalForPrisma.prisma;
const isStale = existingPrisma && !("cart" in existingPrisma);

export const prisma =
  (existingPrisma && !isStale) ? existingPrisma :
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
