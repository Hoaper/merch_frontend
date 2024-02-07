'use client';
import useSWR from "swr";
import {useEffect} from "react";
// import {useMiniApp} from "@tma.js/sdk-react";
import {fetcher} from "@/lib/utils";
import Categories from "@/models/categories";
import Image from "next/image";
import Link from "next/link";
import categories from "@/models/categories";



export default function Home() {
    const { data, isValidating} = useSWR('/api/categories', fetcher);
    // const miniApp = useMiniApp();

    useEffect(() => {
        // miniApp.ready();
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            {isValidating && (
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Loading...</h1>
                </div>
            )}

            <div className={"grid grid-cols-3 gap-4 p-2 items-center justify-center"}>
                {!isValidating && data && data.items.map((category: any) => (
                    <Link href={`/category/${category._id}`} key={category._id} className={"border-2 rounded-xl p-2 items-center justify-center"}>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <Image src={category.imageURL} alt={category.name} width={250} height={250}/>
                            <div className={" uppercase font-bold w-full text-center py-1"}>
                                {category.displayName}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </main>
    );
}
