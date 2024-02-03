import {NextRequest, NextResponse} from "next/server";
import connectDB from "@/lib/db";
import Items from "@/models/items";
export async function GET(req: NextRequest, res: NextResponse) {
    await connectDB();
    try {
        const items = await Items.find({});
        return NextResponse.json({items: items}, {status: 200});
    } catch (error) {
        console.error('Error fetching items:', error);
        NextResponse.json({ error: 'Internal Server Error' }, {status: 200});
    }
}
