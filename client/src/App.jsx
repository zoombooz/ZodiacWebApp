import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ZodiacList from './components/ZodiacList'
import BirthdateForm from './components/BirthdateForm'
import Result from './components/Result'
import ZodiacContext from './context/context'

function App() {
  const [zodiac, setZodiac] = useState("")

  return (
    <ZodiacContext.Provider value={{zodiac, setZodiac}}>
      <div className='h-full p-8'>
        <ZodiacList />
        <div className='flex h-full w-full mt-8 border-2'>
          <BirthdateForm />
          <Result />
        </div>
      </div>
    </ZodiacContext.Provider>
  )
}

export default App
