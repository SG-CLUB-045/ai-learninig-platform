import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {

    const {email,name}=await req.json();

    // if user alreasy exists
    const user=await db.select().from(usersTable).where(eq(usersTable.email, email));

    // if user not existss
    if(user?.length==0){
        const newuser= await db.insert(usersTable).values({
            email:email,
            name:name
        }).returning(usersTable);
        return NextResponse.json(newuser[0]);
    }

    return NextResponse.json(user[0]);
}