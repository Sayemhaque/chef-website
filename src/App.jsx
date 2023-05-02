import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

function App() {


  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
