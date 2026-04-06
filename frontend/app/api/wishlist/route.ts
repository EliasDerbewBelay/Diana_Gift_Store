import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { user } = session;

    let wishlist = await prisma.wishlist.findUnique({
      where: { userId: user.id },
      include: { items: true },
    });

    if (!wishlist) {
      wishlist = await prisma.wishlist.create({
        data: { userId: user.id },
        include: { items: true },
      });
    }

    return NextResponse.json(wishlist);
  } catch (error) {
    console.error("Wishlist GET error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      console.warn("Wishlist POST: Unauthorized attempt");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { user } = session;
    const body = await req.json();
    console.log("Wishlist POST body:", body);

    const { productId } = body;
    const pId = Number(productId);

    if (isNaN(pId)) {
      console.error("Wishlist POST: Invalid Product ID:", productId);
      return NextResponse.json({ error: "Invalid Product ID" }, { status: 400 });
    }

    // Get or create wishlist
    let wishlist = await prisma.wishlist.findUnique({
      where: { userId: user.id },
    });

    if (!wishlist) {
      console.log("Creating new wishlist for user:", user.id);
      wishlist = await prisma.wishlist.create({
        data: { userId: user.id },
      });
    }

    // Check if item already exists
    const existingItem = await prisma.wishlistItem.findFirst({
      where: {
        wishlistId: wishlist.id,
        productId: pId,
      },
    });

    if (existingItem) {
      console.log("Removing item from wishlist:", existingItem.id);
      // Toggle off (remove)
      await prisma.wishlistItem.delete({
        where: { id: existingItem.id },
      });
      return NextResponse.json({ success: true, removed: true });
    }

    // Create new item
    console.log("Adding product to wishlist:", pId);
    const newItem = await prisma.wishlistItem.create({
      data: {
        wishlistId: wishlist.id,
        productId: pId,
      },
    });

    return NextResponse.json({ success: true, ...newItem, removed: false });
  } catch (error: any) {
    console.error("Wishlist POST error:", error);
    return NextResponse.json({ success: false, error: error.message || "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const itemId = searchParams.get("itemId");

    if (!itemId) {
      return NextResponse.json({ error: "Item ID is required" }, { status: 400 });
    }

    // Verify it belongs to the user's wishlist
    const wishlist = await prisma.wishlist.findUnique({
      where: { userId: session.user.id },
    });

    if (!wishlist) {
      return NextResponse.json({ error: "Wishlist not found" }, { status: 404 });
    }

    const item = await prisma.wishlistItem.findFirst({
      where: {
        id: itemId,
        wishlistId: wishlist.id,
      },
    });

    if (!item) {
      return NextResponse.json({ error: "Item not found in your wishlist" }, { status: 404 });
    }

    await prisma.wishlistItem.delete({
      where: { id: itemId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Wishlist DELETE error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
