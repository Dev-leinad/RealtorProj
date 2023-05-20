import React from 'react'
import { useLocation, useNavigate  } from 'react-router-dom'

export default function Header() {
    const location = useLocation ()
    const navigate = useNavigate();
    function pathMatchRoute (route){
        if(route === location.pathname){
            return true;
        }
    }
  return (
    <div className='shadow-sm bg-white border-b z-50 sticky top-0'>
      <header className='flex justify-between mx-auto px-3 items-center max-w-6xl '>
        <div>
            <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className='h-5 cursor-pointer ' onClick={()=>navigate('/')}   />
        </div>
        <nav>
            <ul className='flex space-x-20'>
                <li  onClick={()=>navigate('/')}  className={`py-3 font-semibold cursor-pointer border-b-[3px] text-gray-400 text-sm border-b-transparent ${pathMatchRoute("/") &&  "text-black border-b-red-500"}`}>Home</li>
                <li  onClick={()=>navigate('/offers')}  className={`py-3 font-semibold border-b-[3px] cursor-pointer text-gray-400 text-sm border-b-transparent ${pathMatchRoute("/offers") && " text-black border-b-red-500"}`}>Offers</li>
                <li  onClick={()=>navigate('/sign-in')}  className={`py-3 font-semibold cursor-pointer  border-b-[3px] text-gray-400 text-sm border-b-transparent ${pathMatchRoute("/sign-in") &&  "text-black border-b-red-500"}`}>Sign In</li>
            </ul>
        </nav>
      </header>
    </div>
  )
}
