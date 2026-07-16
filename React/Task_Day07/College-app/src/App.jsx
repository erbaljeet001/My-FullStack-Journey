import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Courses from './components/Courses'
import Navbar from './components/Navbar'
import Faculty from './components/Faculty'
import Admissions from './components/Admissions'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/faculty' element={<Faculty/>} />
            <Route path='/admissions' element={<Admissions/>} />
            <Route path='/footer' element={<Footer/>} />
            <Route path='/gallery' element={<Gallery/>} />
            <Route path='/navbar' element={<Navbar/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default  App