import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const UserSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = {
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    }
    setUserData(newUser);

    setFirstName('');
    setLastName('');
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

          <h3 className='texlg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-6'>
            <input className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
              required
              type="text" placeholder='First name'
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />

            <input className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
              required
              type="text" placeholder='Last name'
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }} />
          </div>

          <h3 className='texlg mb-2 font-medium'>What's your email?</h3>

          <input className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            type="email" placeholder='email@exa.com'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }} />

          <h3 className='texlg mb-2 font-medium'>Enter Password</h3>

          <input className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            type="password" placeholder='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }} />

          <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg '>
            Login
          </button>

        </form>
        <p className='text-center '>
          Already have a account? <Link to='/login' className='text-blue-600'>login here</Link>
        </p>
      </div>

      <div>
        <p className='text-[12px] leading-tight '>
         This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.
        </p>
      </div>

    </div>
  )
}

export default UserSignup