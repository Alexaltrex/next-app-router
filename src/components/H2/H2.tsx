import {FC} from "react";
import style from "./H2.module.scss"
import {clsx} from "clsx";
import {softMarshmallow} from "@/assets/fonts/fonts";

interface IH2 {
    label: string
    className?: any
}

export const H2: FC<IH2> = ({
                                label,
                                className
                            }) => {
    return (
        <h2 className={clsx(
            softMarshmallow.className,
            style.h2,
            Boolean(className) && className
        )}>
            {label}
        </h2>
    )
}