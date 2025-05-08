// src/components/Participants.jsx
import React, { useState } from "react";

const Participants = ({ participants, setParticipants }) => {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (name.trim() === "") return;
    const newParticipant = {
      id: Date.now(),
      name,
      purchases: [], // compras dessa pessoa
    };
    setParticipants([...participants, newParticipant]);
    setName("");
  };

  const handleRemove = (id) => {
    const filtered = participants.filter((p) => p.id !== id);
    setParticipants(filtered);
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Nome da pessoa"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 border focus:outline-none focus:ring-1 focus:ring-green-400 rounded-xl px-3 py-1.5 shadow-sm"
        />
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-1.5 rounded-xl hover:bg-green-700"
        >
          Adicionar
        </button>
      </div>

      <ul className="space-y-2">
        {participants.map((pessoa) => (
          <li
            key={pessoa.id}
            className="flex justify-between items-center bg-gray-50 border px-4 py-2 rounded-xl"
          >
            <span>{pessoa.name}</span>
            <button
              onClick={() => handleRemove(pessoa.id)}
              className="text-red-500 hover:underline"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Participants;
