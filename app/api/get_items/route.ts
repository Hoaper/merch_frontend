import {NextApiRequest, NextApiResponse} from "next";
import {NextResponse} from "next/server";
import connectDB from "@/lib/db";
import Items from "@/models/items";
export async function GET(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    try {
        const items = await Items.find({});
        return NextResponse.json({items: items}, {status: 200});
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
