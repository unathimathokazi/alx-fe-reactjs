import UserProfile from './components/UserProfile'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-white to-blue-100 text-center p-6">
      <div className="flex gap-10 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="w-20 hover:scale-110 transition-transform duration-300" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="w-20 hover:rotate-12 transition-transform duration-300" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Vite + React + Tailwind</h1>

<UserProfile />


      <div className="bg-white shadow-md p-6 rounded-xl">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-700">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Click on the logos to learn more
      </p>

     
    </div>
  )
}

export default App
