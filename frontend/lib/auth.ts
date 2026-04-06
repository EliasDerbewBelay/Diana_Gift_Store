import { betterAuth } from "better-auth";
import { prismaAdapter } from "@better-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
    },
    // Adding roles and admin support
    plugins: [
        admin()
    ],
    // Map the role field from the database
    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: "USER"
            }
        }
    }
});
