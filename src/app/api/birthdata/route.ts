// src/app/api/birthdata/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const birthSchema = z.object({
  date: z.string(),
  place: z.string().min(1),
  timezone: z.string().min(1),
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = birthSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid data." }, { status: 400 });
    }

    const { date, place, timezone, email } = parsed.data;

    // Look up the user by email
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found." },
        { status: 404 },
      );
    }

    // Upsert one BirthData per user (change later if you move to multiple profiles)
    const birth = await prisma.birthData.upsert({
      where: { userId: user.id },
      update: {
        date: new Date(date),
        place,
        timezone,
      },
      create: {
        userId: user.id,
        date: new Date(date),
        place,
        timezone,
      },
    });

    return NextResponse.json(birth, { status: 200 });
  } catch (error) {
    console.error("BirthData error:", error);
    return NextResponse.json(
      { error: "Failed to save birth data." },
      { status: 500 },
    );
  }
}
