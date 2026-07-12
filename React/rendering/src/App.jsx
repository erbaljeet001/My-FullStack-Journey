import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'      
const App = () => {
  const data= [
    {
      SNn: 1,
      name: "Ram",
      Email :"ram@gmail.com",
      mobile: 9494743473

    },
     {
      SNn: 2,
      name: "Shyam",
      Email :"shyam@gmail.com",
      mobile: 94947433433

    },
     {
      SNn: 3,
      name: "Abhishek",
      Email :"abhi@gmail.com",
      mobile: 34343333433

      }
    ]
  return (<>
    
    
    <div className="row mt-3 ">
      <div class="col-sm-3  "></div>
      <div class="col-sm-6  ">
        <h1 className='ms-4'>
          #WelcomeTo<span className='text-center text-warning'>EmergingWorld</span>
        </h1>

        <table className='table' > 
          <thead className='table-dark'>
              <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                
            </tr>
             </thead>
          <tbody>
            {data.map((item) =>
            {
              return (<>
                 <tr><td>{item.SNn}</td><td>{item.name}</td><td>{item.Email}</td><td>{item.mobile}</td></tr>
              </>)
            })}

                  
            </tbody>
         
        </table>
      </div>
   
      <div class="col-sm-3 ">
           
      </div>
       </div> 

  </>)
  

}

export default App