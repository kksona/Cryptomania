import React from 'react'
import { NavLink } from "react-router-dom";
import logo from './images/logo.png'

function NavBar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className='w-96 gap-4 flex'>
          <div className='w-24 h-full'>
            <img src={logo} alt='logo' className='rounded-full'/>
          </div>
            <div className="self-center text-5xl font-semibold whitespace-nowrap dark:text-white">CryptoMania</div>
          </div>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="text-2xl font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <NavLink to={"/"} 
                className={({isActive}) =>( 
                (isActive)? ("block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"):
                ("block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent")
                )}>Home</NavLink>
                </li>
                <li>
                <NavLink to={"/trending"} 
                className={({isActive}) =>( 
                (isActive)? ("block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"):
                ("block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent")
                )}
                >Trending</NavLink>
                </li>
                <li>
                <NavLink to={"/login"} 
                className={({isActive}) =>( 
                (isActive)? ("block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"):
                ("block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent")
                )}
                >Login</NavLink>
                </li>
                <li>
                <NavLink to={"/register"} 
                className={({isActive}) =>( 
                (isActive)? ("block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"):
                ("block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent")
                )}
                >Register</NavLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>

  )
}

export default NavBar