import React, { useState } from "react";
import Participants from "../components/Participants";
import AddPurchase from "../components/AddPurchase";
import ExpenseChart from "../components/ExpenseChart";

const Dashboard = () => {
  const [participants, setParticipants] = useState([]);
  const [extraPercentage, setExtraPercentage] = useState(10);

  // Cálculo dos valores
  const totalGeral = participants.reduce(
    (acc, p) => acc + p.purchases.reduce((s, x) => s + x.value, 0),
    0
  );

  const resultWithTax = participants.map((p) => {
    const subtotal = p.purchases.reduce((sum, item) => sum + item.value, 0);
    const proportion = subtotal / totalGeral || 0;
    const extra = totalGeral * (extraPercentage / 100);
    const totalFinal = subtotal + proportion * extra;
    return {
      name: p.name,
      subtotal,
      totalFinal,
    };
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600">Divida Aê</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow-md col-span-1">
          <h2 className="text-xl text-green-700 font-semibold mb-2">Participantes</h2>
          <Participants
            participants={participants}
            setParticipants={setParticipants}
          />
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-md col-span-1 md:col-span-2">
          <h2 className="text-xl text-blue-700 font-semibold mb-2">Adicionar Compra</h2>
          <AddPurchase
            participants={participants}
            setParticipants={setParticipants}
          />
        </div>
      </div>

      {/* Gráfico */}
      <div className="bg-white p-4 rounded-2xl shadow-md mt-6">
        <h2 className="text-xl text-pink-700 font-semibold mb-2">Resumo dos Gastos</h2>
        <ExpenseChart participants={participants} />
      </div>

      {/* Resumo com Acréscimo */}
      <div className="bg-white p-4 rounded-2xl shadow-md mt-6">
        <h2 className="text-xl text-cyan-700 font-semibold mb-4">Resumo Final com Acréscimo</h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Porcentagem de acréscimo (%)
          </label>
          <input
            type="number"
            value={extraPercentage}
            onChange={(e) => setExtraPercentage(Number(e.target.value))}
            className="border rounded-lg px-3 py-2 w-32 shadow-sm"
          />
        </div>

        <table className="w-full table-auto text-left border rounded-xl overflow-hidden shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Nome</th>
              <th className="p-2">Subtotal</th>
              <th className="p-2">Total c/ acréscimo</th>
            </tr>
          </thead>
          <tbody>
            {resultWithTax.map((pessoa) => (
              <tr key={pessoa.name} className="border-t">
                <td className="p-2">{pessoa.name}</td>
                <td className="p-2">R$ {pessoa.subtotal.toFixed(2)}</td>
                <td className="p-2 font-semibold text-green-600">
                  R$ {pessoa.totalFinal.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
