import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {

    const { email, name } = await req.json();
    // Check if user already exists
    const users = await db.select().from(usersTable).where(eq(usersTable.email, email));

    // If user does not exist, create a new user
    if (users.length === 0) {
        const newUser = await db.insert(usersTable).values({
            email: email,
            name: name
        }).returning(usersTable);
        console.log(newUser);
        return NextResponse.json(newUser);
    }

    return NextResponse.json(users[0]);
}