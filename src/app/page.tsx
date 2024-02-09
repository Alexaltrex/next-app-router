import style from "./HomePage.module.scss";
import {clsx} from "clsx";
import {softMarshmallow} from "@/assets/fonts/fonts";

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home',
}

const HomePage = () => {
  return (
    <div className={style.homePage}>
      <h1 className={clsx(softMarshmallow.className, style.title)}>Home page</h1>
    </div>
  );
}
export default HomePage
