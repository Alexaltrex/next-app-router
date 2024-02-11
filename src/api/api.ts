import {IGetCharacters} from "@/types/character.types";

export const getCharacters = async (): Promise<IGetCharacters> => {


    try {
        console.log("loading start")
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const response = await fetch("https://rickandmortyapi.com/api/character", {
            //cache: "no-store",
            next: {
                revalidate: 0
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch characters')
        }
        const data = await response.json();

        console.log("loading end")

        return data;
    } catch (e) {
        throw e
    }
}