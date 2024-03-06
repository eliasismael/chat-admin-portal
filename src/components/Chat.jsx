import React, { useState, useRef } from 'react';


let index = -1

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const messageRef = useRef(null);

    const predefinedResponses = [
        "Hola, ¿en qué puedo ayudarte?",
        "Lo siento, no puedo responder a eso en este momento.",
        "Estoy ocupado en este momento, ¿puedes preguntar más tarde?",
        "¡Claro! ¿En qué más puedo asistirte?"
    ];



    const handleSubmit = (e) => {
        e.preventDefault();

        // este es el valor del input
        const newMessage = messageRef.current.value;

        setMessages([...messages, { text: newMessage, from: 'user' }]);

        //limpia el input
        messageRef.current.value = '';


        index++
        console.log(index)

        setTimeout(() => {
            setMessages(prevMessages => [...prevMessages, { text: predefinedResponses[index], from: 'bot' }]);

        }, 500)

    };

    return (
        <>
            <div className="w-full flex h-20 p-8 bg-gray-200">
                Buscar

            </div>
            <div className="w-[678px] h-[1024px] pl-[120px]">

                <ul className="divide-y divide-gray-400  w-full border border-black">
                    {messages.map((message, index) => (

                        <>

                            {message.from === "user" && <div className="w-10 h-10 rounded-full bg-gray-800"></div>}

                            <li key={index} className={`py-4 px-4 rounded-3xl border border-black my-4 w-fit ${message.from === 'user' ? 'text-left bg-white text-black mr-auto' : 'text-right bg-black text-white ml-auto'}`}>

                                {message.text}
                                {message.from === "bot" && <span className="w-10 h-10 rounded-full bg-gray-800"></span>}

                            </li>


                        </>



                    ))}
                </ul>
                <form onSubmit={handleSubmit} className="mt-4">
                    <input
                        type="text"
                        ref={messageRef}
                        placeholder="Escribe un mensaje..."
                        className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    <button type="submit" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none">
                        Enviar
                    </button>
                </form>
            </div>
        </>


    );
};

export default ChatComponent;
