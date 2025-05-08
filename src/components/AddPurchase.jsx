// src/components/AddPurchase.jsx
import React, { useState } from "react";

const AddPurchase = ({ participants, setParticipants }) => {
  const [selectedId, setSelectedId] = useState("");
  const [product, setProduct] = useState("");
  const [value, setValue] = useState("");

  const handleAddPurchase = () => {
    if (!selectedId || !product || !value) return;

    const updatedParticipants = participants.map((pessoa) => {
      if (pessoa.id === parseInt(selectedId)) {
        return {
          ...pessoa,
          purchases: [
            ...pessoa.purchases,
            {
              product,
              value: parseFloat(value),
              id: Date.now(),
            },
          ],
        };
      }
      return pessoa;
    });

    setParticipants(updatedParticipants);
    setProduct("");
    setValue("");
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="border focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-xl px-3 py-2 shadow-sm"
        >
          <option value="">Escolha quem comprou</option>
          {participants.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Produto"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="border focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-xl px-3 py-2 shadow-sm"
        />

        <input
          type="number"
          placeholder="Valor (R$)"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-xl px-3 py-2 shadow-sm"
        />
      </div>

      <button
        onClick={handleAddPurchase}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
      >
        Adicionar Compra
      </button>
    </div>
  );
};

export default AddPurchase;
