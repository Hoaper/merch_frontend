'use client';
import React from 'react';
import useSWR from "swr";
import {fetcher} from "@/lib/utils";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

function Page({params}: { params: { name: string } }) {
    const { data, isValidating} = useSWR(`/api/get_items/${params.name}`, fetcher);

    React.useEffect(() => {

    }, [])

    return (
        <div>

            {isValidating && (
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Loading...</h1>
                </div>
            )}

            {data && data.items.map((item: any) => (
                <Link href={`/items/${item._id}`} key={item._id}>
                    <Card className={"py-2 rounded-xl"}>
                        <CardContent>
                            <Image src={item.previewURL} alt={item.name} width={250} height={250}/>
                        </CardContent>
                        <CardFooter className={"text-center justify-center"}>
                            {item.name}
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </div>
    );
}

export default Page;