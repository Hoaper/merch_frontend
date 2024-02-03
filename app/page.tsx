'use client';
import useSWR from "swr";

const fetcher = async (url: string) => {
    const response = await fetch(url);
    return await response.json();
};

export default function Home() {
    const { data, isValidating} = useSWR('/api/get_items', fetcher);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            {isValidating && (
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Loading...</h1>
                </div>
            )}

            <div className={"grid grid-cols-3 gap-4 p-2 items-center justify-center"}>
                {!isValidating && data && data.items.map((product: any) => (
                    <div key={product.id} className={"border-2 rounded-xl p-2 items-center justify-center"}>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{product.name}</h1>
                            <p className="text-xl">{product.description}</p>
                            <p className="text-xl">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>

        </main>
    );
}
