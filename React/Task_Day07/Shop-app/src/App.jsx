import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Products from './components/Products'
import Categories from './components/Categories'
import Wishlist from './components/Wishlist'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import Cart from './components/Cart'


const App = () => {
  return (
    <>
      <BrowserRouter>
      
        <Routes>

     <Route path='/' element={<Home/>}/>
     <Route path='/header' element={<Header/>}/>
     <Route path='/products' element={<Products/>}/>
     <Route path='/categories' element={<Categories/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/wishlist' element={<Wishlist/>}/>
     <Route path='/checkout' element={<Checkout/>}/>
     <Route path='/footer' element={<Footer/>}/>
     

        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App