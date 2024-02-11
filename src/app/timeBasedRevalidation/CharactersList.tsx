import style from "./TimeBasedRevalidation.module.scss"
import {getCharacters} from "@/api/api";

export const CharactersList = async () => {
    const data = await getCharacters();

    return (
        <div className={style.charactersList}>
            {
                data.results.map(({name, id}) => (
                    <p key={id}>
                        {name}
                    </p>
                ))
            }
        </div>
    )
}