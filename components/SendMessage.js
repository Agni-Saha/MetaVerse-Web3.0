import { useState } from "react"
import { useMoralis } from "react-moralis"
import style from "../styles/style.module.css"

export default function SendMessage({ endOfMessagesRef }) {
    const { user, Moralis } = useMoralis()
    const [message, setMessage] = useState("")

    const sendMessage = (event) => {
        event.preventDefault()

        if (!message) {
            return
        }

        const Messages = Moralis.Object.extend("Messages")
        const messages = new Messages()

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress')
        }).then((message) => {

        }).catch(error => console.log(error))

        endOfMessagesRef.current.scrollIntoView({
            behavior: "smooth"
        })

        setMessage("")
    }

    return (
        <form className="flex w-11/12 fixed bottom-10 
        bg-black opacity-80 px-6 py-4 max-w-2xl
        shadow-xl rounded-full border-4 border-[#0096c7]">
            <input
                type="text"
                placeholder={`Enter the Message ${user.getUsername()}`}
                className="outline-none bg-transparent 
                text-white placeholder-gray-500 
                flex-grow pr-5"
                value={message}
                onChange={event => setMessage(event.target.value)}
            />
            <button
                className={`font-bold text-[#d90429] ${style.send_button}`}
                type="submit"
                onClick={sendMessage}
            >
                Send
            </button>
        </form>
    )
}
