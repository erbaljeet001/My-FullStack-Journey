
import './Offer.css'
import { CiShoppingCart } from "react-icons/ci";
const Offer = () => {
  return (
     <>
      <div className='container-fluid offerfull'>
           
        <div className='row b'>
                  <div className='col-sm-1 x'></div>
          <div className='col-sm-5 offerL'>
            
            <div className='row'>
              <div className='col-sm-4 img1'>
                   
                  </div>
              <div className='col-sm-8 txt'>
                
                <h4>Tasty Thursdays</h4>
                <h2>20% <a>off</a></h2>

                <button className='btn btn-warning rounded-5 text-light'>Order now <CiShoppingCart style={{fontSize:'20px'}}/></button>
                  </div>
             </div>
                  </div>
          <div className='col-sm-5 offerR'>
            
            <div className='row'>
              <div className='col-sm-4 img2'>
                   
                  </div>
              <div className='col-sm-8 txt '>
                 
                <h4>Pizza Days</h4>
                <h2>15% <a>off</a></h2>

                 <button className='btn btn-warning rounded-5 text-light'>Order now <CiShoppingCart style={{fontSize:'20px'}}/></button>
                  </div>
             </div>

                  </div>
                  <div className='col-sm-1 x'></div>
           </div>
           
       </div>
    </>
  )
}

export default Offer