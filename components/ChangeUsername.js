import { useMoralis } from "react-moralis"

export default function ChangeUsername() {
    const { user, setUserData, isUserUpdating, userError } = useMoralis()

    const setUsername = () => {
        const username = prompt(`Enter your new Username (current : ${user.getUsername()})`)

        if (!username) return;

        setUserData({
            username: username
        })
    }

    return (
        <div className="absolute top-5 right-5 text-base">
            <button
                className="hover:text-pink-700"
                disabled={isUserUpdating}
                onClick={setUsername}
            >
                Change Your Username
            </button>
        </div>
    )
}
