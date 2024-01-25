import { connectToDatabase } from '@/lib/db';
import {NextApiRequest, NextApiResponse} from "next";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { db } = await connectToDatabase();

    const collection = db.collection('items');
    const products = await collection.find().toArray();

    return NextResponse.json({products: products}, {status: 200});
}
