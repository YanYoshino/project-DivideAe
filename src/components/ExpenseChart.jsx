// src/components/ExpenseChart.jsx
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F", "#FFBB28"];

const ExpenseChart = ({ participants }) => {
  const data = participants.map((p) => {
    const total = p.purchases.reduce((sum, item) => sum + item.value, 0);
    return {
      name: p.name,
      value: total,
    };
  });

  const totalGeral = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="w-full h-80">
      {totalGeral === 0 ? (
        <p className="text-gray-500 text-center mt-8">
          Nenhuma compra registrada ainda.
        </p>
      ) : (
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}

      {/* Total geral com acréscimo (opcional futuro) */}
      <div className="mt-4 text-center text-gray-700 font-medium">
        Total geral: R$ {totalGeral}
      </div>
    </div>
  );
};

export default ExpenseChart;
