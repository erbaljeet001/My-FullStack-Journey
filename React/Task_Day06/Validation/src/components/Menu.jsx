import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <>
     {/* <Link to='/'>home </Link>
        <Link to='/about'>About </Link>
         <Link to='/Services'>Services </Link>
        <Link to='/Services/paid'>Services Paid</Link> */}

      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    Navbar
  </a>
  
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to='/'>
          Home 
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='about'>
          About
        </Link>
      </li>
      

            <li className="nav-item">
        <Link className="nav-link text-danger" to='services'>
          Services
        </Link>
      </li>

            <li className="nav-item">
        <Link className="nav-link" to='/services/paid'>
          Paid Services
        </Link>
      </li>
      
      
     
    </ul>
    
  </div>
</nav>

    </>
  )
}

export default Menu