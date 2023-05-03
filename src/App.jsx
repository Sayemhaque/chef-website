import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Toast from './components/Toast/Toast'

function App() {


  return (
    <>
    <Toast/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
