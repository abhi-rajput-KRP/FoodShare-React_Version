// import { useState } from 'react'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
