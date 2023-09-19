import { comicsProps } from "@/types/typeProps";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const { query } = await req.json()

    try {
        const res = await fetch(`https://comics-api.vercel.app//search-suggest?q=${query}`, {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            }
        })
        const { comics } = await res.json()

        return NextResponse.json(comics)
    } catch (error) {
        console.log("Invalited Error - ", error);
    }
}