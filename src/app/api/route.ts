import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server"; // Use server-side auth
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const authData = await auth(); // Await auth() to get the user data
    const userId = authData?.userId; // Extract userId properly
    

    if (!userId) {
      return new NextResponse("User Not Authenticated", { status: 401 });
    }

    const { title, description, templateUsed } = await req.json();

    const createNewDoc = await db.aIOutput.create({
      data: {
        userId,
        title,
        description,
        templateUsed,
      },
    });

    await revalidatePath("/");

    return NextResponse.json(createNewDoc, { status: 200 });
  } catch (error) {
    console.error("POST, NEW DOC ERROR:", error);
    return new NextResponse("POST, NEW DOC ERROR", { status: 500 });
  }
}
