import Image from "next/image"
import { useMoralis } from "react-moralis"

import Img from "../data/new-2.webp"
import Avatar from "./Avatar"
import ChangeUsername from "./ChangeUsername"

export default function Header() {
    
    const { user } = useMoralis()

    return (
        <div className="text-[#ec4c4c] sticky top-0 p-5 z-50
        bg-black shadow-sm border-b-2 border-red-700">
            <div className="grid grid-cols-5 lg:grid-cols-6
            items-end lg:items-center">
                <div className="relative h-16 w-48 mx-auto
                hidden lg:inline-grid">
                    <Image
                        src={Img} alt="logo"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className="text-left lg:text-center col-span-4">
                    <div className="h-36 w-36 relative lg:mx-auto 
                    border-red-500 border-8 rounded-full">
                        <Avatar logoutOnPress />
                    </div>

                    <h1 className="text-3xl">
                        Welcome to the WEB 3.0 MetaVerse
                    </h1>

                    <h2 className="text-5xl font-bold truncate text-[#d90429]">
                        {user.getUsername()}
                    </h2>

                    <ChangeUsername />

                </div>
            </div>
        </div>
    )
}
