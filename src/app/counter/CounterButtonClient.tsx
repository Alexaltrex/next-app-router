"use client"
import style from "./CounterPage.module.scss"
import {useState} from "react";


export const CounterButtonClient = () => {
    const [count, setCount] = useState(1);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}
            >
                +1
            </button>
            <div className={style.boxes}>
                {
                    Array.from({length: count}, (_, key) => key).map(el => (
                        <div key={el}
                             className={style.box}
                        />
                    ))
                }
            </div>
        </div>

    )
}