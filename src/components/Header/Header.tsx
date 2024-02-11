import style from "./Header.module.scss"
import Link from "next/link";
import {clsx} from "clsx";

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.inner}>
                <Link href="/"
                      className={clsx(style.link, style.logo)}
                >
                    App Router
                </Link>
                <nav className={style.nav}>
                    {
                        [
                            {label: "Time-based Revalidation", href: "/timeBasedRevalidation"},
                            // {label: "Counter", href: "/counter"},
                            {label: "Fonts", href: "/fonts"},
                            // {label: "Characters", href: "/characters"},
                            {label: "Locations", href: "/locations"},
                            {label: "Episodes", href: "/episodes"},

                        ].map(({label, href}, key) => (
                            <Link key={key}
                                  href={href}
                                  className={style.link}
                            >
                                {label}
                            </Link>
                        ))
                    }
                </nav>
            </div>
        </header>
    )
}