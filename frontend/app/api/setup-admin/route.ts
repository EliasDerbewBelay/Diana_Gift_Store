import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const adminEmail = "admin@gmail.com";
  const adminPassword = "admin123!";

  try {
    // 1. Create the user using Better Auth
    const user = await auth.api.signUpEmail({
      body: {
        email: adminEmail,
        password: adminPassword,
        name: "Admin User",
      },
    });

    if (!user) {
      return NextResponse.json({ error: "Failed to create user" }, { status: 400 });
    }

    // 2. Promote to ADMIN role
    await prisma.user.update({
      where: { email: adminEmail },
      data: { role: "ADMIN" },
    });

    return NextResponse.json({ 
      success: true, 
      message: "Admin user created and promoted successfully",
      email: adminEmail
    });
  } catch (error: any) {
    console.error("Setup Admin Error:", error);
    
    // If user already exists, just promote them
    if (error.message?.includes("already exists") || error.code === "USER_ALREADY_EXISTS") {
        await prisma.user.update({
            where: { email: adminEmail },
            data: { role: "ADMIN" },
        });
        return NextResponse.json({ 
            success: true, 
            message: "User already existed and was promoted to ADMIN" 
        });
    }

    return NextResponse.json({ error: error.message || "An error occurred" }, { status: 500 });
  }
}
