'use client';
import useSWR from "swr";
import {useEffect} from "react";
// import {useMiniApp} from "@tma.js/sdk-react";
import {fetcher} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";



export default function Home() {
    const { data, isValidating} = useSWR('/api/categories', fetcher);
    // const miniApp = useMiniApp();

    useEffect(() => {
        // miniApp.ready();
    }, []);

    return (
        <div>
            {isValidating && (
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Loading...</h1>
                </div>
            )}

            <div className={"grid grid-cols-2 gap-4 p-2 items-center justify-center"}>

                {!isValidating && data && data.items.map((category: any) => (
                    <Link href={`/category/${category.name}`} key={category._id}>
                        <Card className={"py-2 rounded-xl"}>
                            <CardContent>
                                <Image src={category.imageURL} alt={category.name} width={250} height={250}/>
                            </CardContent>
                            <CardFooter className={"text-center justify-center"}>
                                {category.displayName}
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>

        </div>
    );
}
