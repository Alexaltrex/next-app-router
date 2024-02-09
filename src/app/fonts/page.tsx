import style from "./fonts.module.scss";
import {clsx} from "clsx";
import {montserrat, roboto} from "@/assets/fonts/fonts";
import {H2} from "@/components/H2/H2";

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Fonts',
}

const FontsPage = () => {
    return (
        <div className={clsx(
            style.fontsPage,
            roboto.className
        )}>
            <H2 label="Fonts"/>

            <div className={style.texts}>
                <p className={style.fw400}>Roboto 400</p>
                <p className={style.fw400_italic}>Roboto 400 italic</p>
                <p className={style.fw500}>Roboto 500</p>
                <p className={style.fw700}>Roboto 700</p>
                <p className={clsx(montserrat.className, style.fw400)}>Montserrat 400</p>
                <p className={clsx(montserrat.className, style.fw400_italic)}>Montserrat 400 italic</p>
                <p className={clsx(montserrat.className, style.fw500)}>Montserrat 500</p>
                <p className={clsx(montserrat.className, style.fw600)}>Montserrat 600</p>
            </div>


        </div>
    )
}
export default FontsPage