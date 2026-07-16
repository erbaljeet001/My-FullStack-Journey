import "./Navbar.css";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Hero from "./Hero";



const Navbar = () => {
  return ( <>
    <div className="container-fluid hero-bg">
      
      <div className="container">

        <div className="row align-items-center py-4">

          
          <div className="col-lg-2 col-md-3 col-12 text-center text-lg-start">
            <h2 className="logo">Feane</h2>
          </div>

          
          <div className="col-lg-6 col-md-6 col-12">
            <ul className="menu">
              <li className="text-warning">HOME</li>
              <li>MENU</li>
              <li>ABOUT</li>
              <li>BOOK TABLE</li>
            </ul>
          </div>

          
          <div className="col-lg-4 col-md-3 col-12 text-center text-lg-end">
    
            <div className="d-flex align-items-center justify-content-end gap-3">
  <CiUser className="icon" />
  <CiShoppingCart className="icon" />
  <CiSearch className="icon" />

  <button className="btn btn-warning order-btn text-light  ms-2">
    Order Online
  </button>
</div>

          </div>

        </div>

      </div>
      <Hero/>

    </div>
  </>);
};

export default Navbar;