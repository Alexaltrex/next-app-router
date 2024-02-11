"use client"

import {H2} from "@/components/H2/H2";
import {CounterButton} from "@/app/counter/CounterButton";
import {FC} from "react";
import style from "./CounterPage.module.scss";
import {CounterButtonClient} from "@/app/counter/CounterButtonClient";

const CounterPage: FC<{
    searchParams?: {
        count?: string
    }
}> = ({searchParams}) => {
    const count = Number(searchParams?.count) || 1;
    console.log(count)

    return (
        <div className={style.counterPage}>
            <H2 label="Counter"/>
            {/*<CounterButton/>*/}
            {/*<div className={style.boxes}>*/}
            {/*    {*/}
            {/*        Array.from({length: count}, (_, key) => key).map(el => (*/}
            {/*            <div key={el}*/}
            {/*                 className={style.box}*/}
            {/*            />*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</div>*/}

            <CounterButtonClient/>
        </div>
    )
}
export default CounterPage