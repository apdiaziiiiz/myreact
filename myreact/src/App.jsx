import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Header'
import Navbar from './Side'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Navbar age= "20" phone = '6202026' fullname = 'abdiasiis abdilaahi'/>
    </>
  )
}

export default App
