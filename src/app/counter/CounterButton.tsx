"use client"

import {usePathname, useSearchParams, useRouter} from "next/navigation";

export const CounterButton = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const onClick = () => {
        const params = new URLSearchParams(searchParams)

        const count = Number(searchParams.get("count")) || 1;
        params.set("count", String(count + 1));
        router.replace(pathname + "?" + params.toString())
    }
    return (
        <button onClick={onClick}
        >
            +1
        </button>
    )
}