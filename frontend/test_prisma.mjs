import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
prisma.user.findMany().then(r => console.log("SUCCESS")).catch(e => console.error("ERROR", e));
