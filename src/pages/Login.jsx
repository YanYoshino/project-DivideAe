// page login
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState(''); //passagem de e-mail
    const [password, setPassword] = useState(''); //passagem de senha
    const [messageError, setMessageError] = useState(''); //passagem de error 
    const [messageSuccess, setMessageSuccess] = useState(''); // passagem de acerto
    const navigate = useNavigate();
    

    const handleLogin = () => { 
        axios
          .get('http://localhost:3000/users', { //busca no seu banco de dados se tem esse email e login
            params: {email, password}
          })
          .then((response) => {
            if (response.data.length > 0) {
              // Encontrou um usuário com o email e senha
              setMessageSuccess('Login realizado com sucesso');
              navigate('/Dashboard')

            } else {
              // Nenhum usuário encontrado = login inválido
              setMessageError('Email ou senha inválidos');

            }
          })
          .catch((error) => {
            console.log(error);
            setMessageError('Erro no sistema, tente novamente mais tarde');           //retorna erro
          });
      };
    


  return (
    <div className='flex items-center justify-center min-h-screen bg-cover bg-center' 
    style={{backgroundImage: 'url("restaurante.jpg")'}}>
        <div className='flex flex-col w-full max-w-md m-auto p-8 bg-white shadow-2xl rounded-2xl backdrop-blur-md'>
        <h1 className='text-3xl font-light text-[#2F4858] mb-6 text-center'
        >DevideAê</h1>
        <input
            type='email'
            placeholder='Email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className='w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4BAF8E]'
        />
        <input 
            type='password' 
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4BAF8E]'
        />
        <p className={`text-xs ${messageError ? 'text-red-500' : ''} ${messageSuccess ? 'text-green-500' : ''}`}> {messageError || messageSuccess}</p>

        <button 
        onClick={handleLogin}
        className='w-full p-3 bg-[#4BAF8E] text-white font-semibold
        rounded-lg hover:bg-[#3A9C7B] transition'
        >Entrar </button>
        <p className='text-sm text-gray-500 mt-4'>
            Esqueceu a senha? <a href="#" className='text-[#2F4858] underline'>Recuperar</a>
        </p>
        </div>
    </div>
  )
}