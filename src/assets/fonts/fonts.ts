import {Roboto, Montserrat} from "next/font/google";
import localFont from 'next/font/local'

export const roboto = Roboto({
    subsets: ["latin"],
    weight: [
        '400',
        '500',
        '700',
    ],
});

export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: [
        '400',
        '500',
        '600',
    ],
});

export const softMarshmallow = localFont({
    src: "./SoftMarshmallow.otf",
    display: "swap"
})