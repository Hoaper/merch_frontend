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
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className={"text-6xl mb-4 font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient"}>
                AITU MERCH
            </div>

            {isValidating && (
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Loading...</h1>
                </div>
            )}

            <div className={"grid grid-cols-2 gap-4 p-2 items-center justify-center"}>

                {!isValidating && data && data.items.map((category: any) => (
                    <Link href={`/category/${category._id}`} key={category._id}>
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

        </main>
    );
}
