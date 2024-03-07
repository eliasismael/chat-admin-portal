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


       
        console.log(index)

        setTimeout(() => {
            setMessages(prevMessages => [...prevMessages, 
                { text: predefinedResponses[index],
                     from: 'bot' 
                    }]);

        }, 500)
    
        index++
    };

let estaEscribiendo = false

    return (
        <>
            <div className="w-full flex h-20 p-8 bg-gray-200">
                Buscar

            </div>
            <div className="w-[678px] h-[1024px] pl-[120px]">

                <ul className="divide-y divide-gray-400  w-full border border-black">
                    {messages.map((message, index) => (

                        <>

                            {message.from === "user" &&
                            
                            
                            <div ></div>
                            }
                            <div className='overflow-hidden	'>
                             <div className={ `w-10 h-10 rounded-full mt-5 ${message.from === 'user' ? `float-left bg-gray-200` : `float-right bg-black`}	`}></div>
                          
                            <li key={index} className={`py-4 px-4 rounded-3xl border border-black my-4 w-fit 	float-left	 ${message.from === 'user' ? 'text-left bg-white text-black mr-auto ml-5' : 'text-right bg-black text-white ml-60   float-right	'}`}>

                                {message.text}
                                {message.from === "bot" && <span className="w-10 h-10 rounded-full bg-gray-800"></span>}

                            </li>
                            </div>

                        </>



                    ))}
                </ul>
                <div className='flex justify-end items-center relative block'>
                <div className="search-box mx-auto my-auto w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4 ">
                <form onSubmit={handleSubmit} className="mt-4 flex flex-row">
               {/*    ajustes css    */ }
                    <input
                        type="text"
                        ref={messageRef}
                        placeholder="Escribe un mensaje..."
                        className="w-full min-h-[50px] py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 	ml-4 pl-3 -mr-80"
                    />
                     
                    <button type="submit" className="mb-5 w-10 h-10  bg-black hover:bg-blue-600 text-white py-2 px-6 rounded-lg focus:outline-none m-5 ml-60	">
                        
                    </button>

                </form>
                </div>
                </div>
            </div>
        </>


    );
};

export default ChatComponent;

