import { comicsProps } from "@/types/typeProps";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const { type, page } = await req.json()

    try {
        const res = await fetch(`https://comics-api.vercel.app/genres/${type}${page ? `?page=${page}` : ''}`, {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            }
        })
        const { comics, total_pages, current_page } = await res.json()
        return NextResponse.json({ comics, total_pages, current_page })
    } catch (error) {
        console.log("Invalited Error - ", error);
    }
}