import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')

  const[userData,setUserData] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault();
    const newUser = { email, password };
    setUserData(newUser);
    
    setEmail('');
    setPassword(''); 
  };
    // Track changes in userData
    useEffect(() => {
      console.log(userData);
    }, [userData]);


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className="w-16 mb-10" src="/logo.png" alt="logo" />
        <form onSubmit={submitHandler}>
          <h3 className='text-lg mb-2 font-medium'>What's your email?</h3>

          <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
              
            }}
            type="email" placeholder='email@exa.com' />

          <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>

          <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            type="password" placeholder='password' />

          <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg '>
            Login
          </button>

        </form>
        <p className='text-center '>
          New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link>
        </p>
      </div>

      <div>
        <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-[#fff] mb-5 font-semibold rounded px-4 py-2 w-full text-lg '>
          Sign in as Captain
        </Link>
      </div>

    </div>
  )
}

export default UserLogin