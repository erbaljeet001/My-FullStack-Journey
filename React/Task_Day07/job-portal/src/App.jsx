import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import Jobs from './components/Jobs'
import Companies from './components/Companies'
import Apply from './components/Apply'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import NotFound from './components/NotFound'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home/>} />
          <Route path='/sidebar' element={<Sidebar/>} />
          <Route path='/jobs' element={<Jobs/>} />
          <Route path='/companies' element={<Companies/>} />
          <Route path='/apply' element={<Apply/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='*' element={<NotFound/>} />
           </Routes>
       </BrowserRouter>
    </>
  )
}

export default App