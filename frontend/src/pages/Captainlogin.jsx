import React from 'react'
import { Link } from 'react-router-dom'
import{useState,useEffect} from 'react'

const Captainlogin = () => {
   const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
  
    const[captainData,setCaptainData] = useState({})
  
    const submitHandler = (e)=>{
      e.preventDefault();
      const newcaptian = { email, password };
      setCaptainData(newcaptian);
      
      setEmail('');
      setPassword(''); 
    };
      // Track changes in captainData
      useEffect(() => {
        console.log(captainData);
      }, [captainData]);
  
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className="w-20 mb-5" src="/uberdri.png" alt="drilogo" />
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
            type="password" placeholder='password'/>

          <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg '>
            Login
          </button>

        </form>
        <p className='text-center '>
          Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link>
        </p>
      </div>

      <div>
        <Link to='/login' className='bg-[#d5622d] flex items-center justify-center text-[#fff] mb-5 font-semibold rounded px-4 py-2 w-full text-lg '>
          Sign in as User
        </Link>
      </div>

    </div>
  )
}

export default Captainlogin