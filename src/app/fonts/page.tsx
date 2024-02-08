import style from "./fonts.module.scss";
import {clsx} from "clsx";
import {montserrat, roboto} from "@/constants/fonts";

const FontsPage = () => {
    return (
        <div className={clsx(
            style.fonts,
            roboto.className
        )}>
            <h2>Fonts Page</h2>
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