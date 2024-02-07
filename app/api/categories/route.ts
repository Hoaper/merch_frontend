import {NextRequest, NextResponse} from "next/server";
import connectDB from "@/lib/db";
import Items from "@/models/items";
import Categories from "@/models/categories";
export async function GET(req: NextRequest, res: NextResponse) {
    await connectDB();
    try {
        const items = await Categories.find({});
        return NextResponse.json({items: items}, {status: 200});
    } catch (error) {
        console.error('Error fetching items:', error);
        NextResponse.json({ error: 'Internal Server Error' }, {status: 500});
    }
}
