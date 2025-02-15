import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="h-screen flex flex-col justify-between w-full"
      style={{
        backgroundImage: "url('/uimage.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'

      }}
    >
      {/* Logo */}
      <img className="w-16 ml-8 mt-8" src="/logo.png" alt="logo" />

      {/* Content Box */}
      <div className="bg-white py-4 px-6 pb-7 max-w-sm mx-auto rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center">Get Started with Uber</h2>
        <Link to='login' className="flex items-center justify-center w-full bg-black text-white py-3 mt-5 rounded hover:bg-gray-800 transition">
          Continue
        </Link>
      </div>

    </div>
  );
};

export default Home;
