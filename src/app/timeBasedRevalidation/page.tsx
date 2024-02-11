import style from "./TimeBasedRevalidation.module.scss";
import {H2} from "@/components/H2/H2";
import {Suspense} from "react";
import {CharactersList} from "@/app/timeBasedRevalidation/CharactersList";

const TimeBasedRevalidationPage = () => {

    return (
        <div className={style.timeBasedRevalidation}>
            <H2 label="Time-based Revalidation"/>

            <div className={style.charactersListWrapper}>

                <Suspense fallback={<p>Loading</p>}>
                    <CharactersList/>
                </Suspense>

            </div>


        </div>
    )
}
export default TimeBasedRevalidationPage