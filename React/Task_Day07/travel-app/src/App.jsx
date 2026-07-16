import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Packages from './components/Packages'
import Destination from './components/Destination'
import Hotels from './components/Hotels'
import Flights from './components/Flights'
import Booking from './components/Booking'
import Reviews from './components/Reviews'
import NotFound from './components/NotFound'


const App = () => {
  return (
    <>
      <BrowserRouter>
      
        <Routes>

     <Route path='/' element={<Home/>}/>
     <Route path='/navbar' element={<Navbar/>}/>
     <Route path='/packages' element={<Packages/>}/>
     <Route path='/destinations' element={<Destination/>}/>
     <Route path='/hotels' element={<Hotels/>}/>
     <Route path='/flights' element={<Flights/>}/>
     <Route path='/booking' element={<Booking/>}/>
     <Route path='/reviews' element={<Reviews/>}/>
     <Route path='*' element={<NotFound/>}/>
     

        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App