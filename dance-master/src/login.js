import React, { useState } from 'react'
import './tailwind.css';
import dancer from './dancer.png'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("PRESSED");
    console.log(password);
    console.log(email);
    if (email === "admin123@gmail.com" && password === "admin") {
      setIsLoggedIn(true);
      alert("logged");
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <div className='w-full h-screen flex bg-black'>
          <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600  bg-white sm:max-w-[900px]'>
            <div className='w-full h-[550px] hidden md:block'>
              <img className='w-full h-full' src={dancer} alt="dancer" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
              <form onSubmit={handleSubmit}>
                <h2 className='text-4xl font-bold text-center mb-8'>DANCE OFF.</h2>
                <div>
                  <input className='border p-2 mr-2' type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Username' />
                  <input className='border p-2' placeholder='Password' type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='w-full py-2 my-4 bg-green-600 hover:bg-black-500' type="submit">Sign In</button>
                <p className='text-center'>Forgot Username or Password?</p>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 h-screen flex items-center justify-center">
          <h1 className="text-white text-5xl">Welcome!</h1>
        </div>
      )}
    </>
  )
};

export default Login;
