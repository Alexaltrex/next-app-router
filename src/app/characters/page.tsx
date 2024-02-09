import style from "./characters.module.scss";
import {H2} from "@/components/H2/H2";

import type { Metadata } from 'next'
import {IGetCharacters} from "@/types/character.types";

export const metadata: Metadata = {
    title: 'Characters',
}

const getCharacters = async (): Promise<IGetCharacters> => {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character", {
            next: {
                revalidate: 1
            }
        });
        console.log("response.ok: ", response.ok);
        if (!response.ok) {
            throw new Error('Failed to fetch characters')
        }
        const data = await response.json()
        //console.log(data)
        return data;

    } catch (e) {
        throw e
    }
}


const CharactersPage = async () => {
    const data = await getCharacters();

    return (
        <div className={style.charactersPage}>
            <H2 label="Characters"/>
            <p>{data.info.pages}</p>
            <p>{(new Date()).toString()}</p>
        </div>
    )
}
export default CharactersPage