
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Paidservices from "./components/Paidservices";
import Dynamic from "./components/Dynamic";
import NotFound from "./components/NotFound";
const App = () => {
  return (
     <>
       <BrowserRouter> {/*routing(spa ki routing ) ko enable krega */}
        
        {/* <a href=""></a> {/*anchor tag   ye mpa banayega */}

           <Menu />
       

        <Routes>  {/* jha multiple url honge isiliye */}
              
          
          {/* <Route>   by default route slace /(Home route khte h ) hota  h., route ek sigle url ko select krta  h */}
   
          
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />    {/*   static url */}
          <Route path='/Services' element={<Services/>} /> 
          <Route path='/Services/paid' element={<Paidservices/>} />   {/*   nested url */}

          <Route path='/:p'element={<Dynamic/>}/>

          
          <Route path='*' element ={<NotFound       />}/>
          
          </Routes>
      
        
      </BrowserRouter>
      </>
  )
}

export default App