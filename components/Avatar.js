import Image from "next/image"
import { useMoralis } from "react-moralis"

export default function Avatar({ username, logoutOnPress }) {
    const { user, logout } = useMoralis()

    return (
        <Image
            src={`https://avatars.dicebear.com/api/adventurer-neutral/${username || user.get("username")}.svg`}
            alt="profile pic"
            layout="fill"
            onClick={() => logoutOnPress && logout()}
            className="rounded-full bg-black cursor-pointer hover:opacity-50"
        />
    )
}
