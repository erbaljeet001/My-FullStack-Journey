import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import BookTablePage from "./pages/BookTablePage";
import FoodSection from "./components/FoodSection";
import Offer from './components/Offer'


function App() {
  return (<>

    <BrowserRouter>
      <Navbar />
      <Offer />
      <FoodSection/>
      
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/booktablepage" element={<BookTablePage />}/>
      </Routes>
    </BrowserRouter>
 </> );
}

export default App;