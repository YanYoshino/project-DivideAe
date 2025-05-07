import React, {useState} from "react";


const Participants = ({participants, setParticipants}) => { //recebe e guarda os participantes
    const [name, setName] = useState(''); //nome do participante

    const handleAddParticipant = () => { //executando o botão
        if(name.trim() === '' ) return; //garante que o nome não está vazio caso estiver retorna nada

        const nemParticipant = { //adciona o participante e as compras no caso vazio agora
            name, purchases: [], 
        };

        setParticipants([...participants, nemParticipant]); //adcionado os novos participanges a Participants
        setName(''); //limpa o código 
    }

    return (
        <div>
        <div className='flex mb-4'>
            <input
            type='text'
            className='flex-1 p-2 border rounded-l-md focus:border-[#4BAF8E] focus:outline-none'
            placeholder='Nome do participante'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
    
            <button 
            onClick={handleAddParticipant}
            className='bg-[#4BAF8E] text-white px-4 rounded-r-md hover:bg-[#4c9079]'
            >
            Adicionar
            </button>
        </div>
    
        <ul className='list-disc list-inside'>
            {participants.map((p, index) => (
            <li key={index}>{p.name}</li>
            ))}
        </ul>
        </div>
    );
};
  export default Participants;