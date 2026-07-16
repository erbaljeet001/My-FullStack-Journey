
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import NotFound from './components/NotFound'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/about' element={<About/>} /> 
          <Route path='/contact' element={<Contact/>} />
          <Route path='Services' element={<Services/>}/>
          <Route path='*' element={<NotFound/>}/>
        

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App