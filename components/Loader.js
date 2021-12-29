import Head from "next/head"
import { useEffect, useState } from "react"
import style from "../styles/Loader.module.css"

export default function Loader() {
    const [onExit, setOnExit] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setOnExit(true)
        }, 4050)
    })

    return (
        <div className={`${style.loader} ${onExit && style.onExit}`}>
            <Head>
                <title>Loading the App</title>
                <link rel="icon" href="/icon.png" />
            </Head>
            <h1 className={style.h1}>Cooking in progress..</h1>
            <div className={style.cooking}>
                <div className={style.bubble}></div>
                <div className={style.bubble}></div>
                <div className={style.bubble}></div>
                <div className={style.bubble}></div>
                <div className={style.bubble}></div>
                <div className={style.area}>
                    <div className={style.sides}>
                        <div className={style.pan}></div>
                        <div className={style.handle}></div>
                    </div>
                    <div className={style.pancake}>
                        <div className={style.pastry}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
