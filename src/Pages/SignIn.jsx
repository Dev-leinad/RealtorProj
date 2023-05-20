import React from 'react'
import { useState } from 'react';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const SignIn = () => {

  const [formData,setData] = useState({
    email : '',
    password : '',
  });


  const {email, password} = formData;
function onChange(e) {
    setData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value
    }));
}


const [showPassword, setShowPassword] = useState(false);


  return (
      <section>
        <h1 className='text-center  font-bold text-3xl mt-5'>Sign Up</h1>
        <div className='flex justify-content items-center 
         px-6 py-12  flex-wrap mx-auto max-w-6xl '>
          <div className='md:w-[67%] border-rounded lg:w-[50%] mb-12 md:mb-6 '>
          
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className='rounded-2xl w-full ' alt="key" />
            
          </div>
          <div className='md:w-[67%] lg:w-[40%] w-full lg:ml-20  '>
               <form >
            <input type="text" className='w-full' type = "email" id ="email" placeholder='Enter Email here ' value={email} onChange={onChange } className="w-full mb-6 text-xl border-gray-300 text-gray-700 bg-white rounded py-2 px-4 transition ease-in-out" />

            <div className='relative mb-6'>
              <input type="password" className='w-full' type ={!showPassword ? 'text' : 'password'} id ="password" placeholder='Enter Password here ' value={password} onChange={onChange } className="w-full text-xl border-gray-300 text-gray-700 bg-white rounded py-2 px-4 transition ease-in-out" />

              {
                showPassword ? (<AiFillEye className='absolute top-3 right-3 cursor-pointer text-xl' onClick={()=>setShowPassword((prevState)=>!prevState )} />) : (<AiFillEyeInvisible className='absolute top-3 right-3  cursor-pointer text-xl ' onClick={()=>setShowPassword((prevState)=>!prevState )}/> )
              }
            </div>
            
          </form>

          <div className='flex justify-between text-sm whitespace-nowrap sm:text-lg' >
            <p>Don't have an account? <Link to='/sign-up' className='text-red-500 hover:text-red-600 transition duration-200 ease-in-out ml-1'>Register</Link> </p>

            <p> <Link to='/forget-password' className='text-blue-500 hover:text-blue-600 transition duration-  ease-in-out'>Forget Password</Link></p>
          </div>


          <button className='bg-blue-600 font-medium px-7 py-3 rounded mt-3 text-white uppercase w-full shadow-md text-sm hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg  '>Sign in</button>
          </div>

       

          </div>
      </section>
  )
}

export default SignIn