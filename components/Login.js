import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useMoralis } from 'react-moralis'

import loginBg from "../data/login1.webp"
import logo from "../data/new-2.webp"
import styles from "../styles/Login.module.css"
import Loader from "./Loader"

export default function Login() {
    const [loading, setLoading] = useState(true)
    const { authenticate } = useMoralis()

    useEffect(() => {
        const id = setTimeout(() => {
            setLoading(false)
        }, 2300)

        return () => {
            clearTimeout(id)
        }

    }, [])

    return loading ? <Loader /> : (
        <div className="bg-black relative">
            <Head>
                <title>MetaVerse Chat App</title>
                <link rel="icon" href="/icon.png" />
            </Head>
            <div className="flex flex-col absolute z-50 h-4/6 items-center
            justify-center w-full space-y-4">
                <Image
                    className="object-contain"
                    src={logo}
                    alt="logo"
                    width={500}
                    height={300}
                />

                <button
                    onClick={authenticate}
                    className={`${styles.login_button} rounded-lg px-8 py-3`}>
                    Login to the METAVERSE
                </button>
            </div>

            <div className="w-full h-screen">
                <Image
                    src={loginBg}
                    alt="login background"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}
