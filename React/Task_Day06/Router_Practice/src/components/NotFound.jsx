import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <><h1 style={{ textAlign: 'left', marginTop:'20px'}}>404 error NotFound</h1>
    
      <Link to="/" className="btn btn-info ms-2 mt-4">
  Back To Home
</Link>
    </>
  )
}

export default NotFound