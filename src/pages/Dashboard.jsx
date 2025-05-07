// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import Participants from "../components/Participants.jsx";


const Dashboard = () => {
  const [participants, setParticipants] = useState([]);
  
  return (
    <div className='bg-slate-300 text-w p-4 rounded-2xl shadow-md col-span-1'>
      <h2 className='text-xl font-semibold mb-2 bg-'>Participantes</h2>
      <Participants
      participants={participants}
      setParticipants={setParticipants}
      />
    </div>
  );
};

export default Dashboard; 