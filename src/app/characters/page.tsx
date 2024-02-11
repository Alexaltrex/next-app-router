"use client"

import style from "./characters.module.scss";
import {H2} from "@/components/H2/H2";
import {ICharacter} from "@/types/character.types";
import {useEffect, useState} from "react";
import {getCharacters} from "@/api/api";

// export const metadata: Metadata = {
//     title: 'Characters',
// }

const CharactersPage = () => {
    //const data = await getCharacters();
    const [characters, setCharacters] = useState<ICharacter[]>([])

    useEffect(() => {
        const getter = async () => {
            try {
                const data = await getCharacters();
                setCharacters(data.results)
            } catch (e) {
                console.log(e)
            }
        }
        getter().then()
    }, [])


    return (
        <div className={style.charactersPage}>
            <H2 label="Characters"/>
            <div>
                {
                    characters.map(r => (
                        <p key={r.id}>{r.name}</p>
                    ))
                }
            </div>
        </div>
    )
}
export default CharactersPage