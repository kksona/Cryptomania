import React from 'react'
import NavBar from '../Components/NavBar'
import { useState } from 'react';
import GoToTop from '../Components/GoToTop';

function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log(`Logging in with ${username} and ${password}`);
  };

  return (
    <>
    <NavBar/>
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto w-96 bg-white rounded shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-semibold mb-2">Username</label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
    <GoToTop/>
    </>
  )
}

export default LoginPage