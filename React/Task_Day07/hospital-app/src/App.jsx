import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import Doctors from './components/Doctors'
import Departments from './components/Departments'
import Appointments from './components/Appointments'
import Patients from './components/Patients'
import Contact from './components/Contact'
import Emergency from './components/Emergency'
import NotFound from './components/NotFound'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/doctors' element={<Doctors/>} />
          <Route path='/departments' element={<Departments/>} />
          <Route path='/appointments' element={<Appointments/>} />
          <Route path='/patients' element={<Patients/>} />
          <Route path='/emergency' element={<Emergency/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<NotFound/>} />
           </Routes>
       </BrowserRouter>
    </>
  )
}

export default App