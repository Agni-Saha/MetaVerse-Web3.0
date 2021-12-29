import Head from 'next/head'
import { useMoralis } from 'react-moralis'

import Login from '../components/Login'
import Header from '../components/Header'
import Messages from '../components/Messages'

import style from '../styles/style.module.css'

export default function Home() {
    const { isAuthenticated } = useMoralis()

    if (!isAuthenticated) return <Login />

    return (
        <div className={`h-screen overflow-y-scroll overflow-hidden
        ${style.parent_div}`}>
            <Head>
                <title>MetaVerse Chat App</title>
                <link rel="icon" href="/icon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
            </Head>

            <div className='max-w-screen-2xl mx-auto'>
                <Header />
                <Messages />
            </div>
        </div>
    )
}
