import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { attendance, customers, employees, invoices, orders, payments, products, students, tasks, users } from './task_data.js'


const App = () => {
  return (<>
      
    
    <div className="row mt-4 ">
      <div className="col-sm-2 "></div>
      <div className="col-sm-8  ">

         <h3>Task 01 :
Import users from task_data.js and bind it to a Bootstrap table.
      Show columns: ID, Name, Email, Role, Status</h3>



        <h1 className='text-center text-dark'> <u>Users & Products</u> </h1>
    
        <table className='table mt-5'> 
          <thead className='table-dark'>
          
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (<>
                <tr><td>{item.id}</td><td>{item.name}</td><td>{item.email}</td><td>{item.role}</td><td>{item.status}</td></tr>
              </>)
            })}
          </tbody>
      </table>

      </div>
      <div className="col-sm-2 "></div>
    </div>
    <hr />
    
    

    <div className='row'>
      <div className='col-sm-2'></div>
      <div className='col-sm-8'>


<h3>Task 02 :
Import products from task_data.js and bind it to a Bootstrap table.
      Show columns: ID, Name, Category, Price, Stock</h3>

        <h1 className=' text-center text-danger'> <u>Users & Products</u> </h1>
        
        <table className='table mt-4'>
          <thead className='table-danger'>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
            </tr>
            </thead>
            <tbody>
              {products.map((item) =>
              {
                return (<>
                  <tr><td>{item.id}</td><td>{item.name}</td><td>{item.category}</td><td>{item.price}</td><td>{item.stock}</td></tr>  
                  
                </>)
                })}
             </tbody>
             
        </table>
      </div>
      <div className='col-sm-2'></div>
    </div>
    
    <hr />
    

    <div className='row'>
        <div className='col-sm-2'></div>
      <div className='col-sm-8'>


 <h3>Task 03 :
Import employees from task_data.js and bind it to a Bootstrap table.
Show columns: ID, Name, Department, Salary, City
</h3>


           <h1 className='text-center mt-4 text-info'>  <u>Employees & Orders</u> </h1>

        <table className='table mt-4'>
          <thead className='table-info'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
              <th>City</th>
              </tr>
          </thead>
          <tbody>
            {employees.map((item) =>
                
            {
              return (<>
                   
                 <tr><td>{item.id}</td><td>{item.name}</td><td>{item.department}</td><td>{item.salary}</td><td>{item.city}</td></tr> 
                
              </>)
                })}
          </tbody>
         </table>
        </div>
        <div className='col-sm-2'></div>
    </div>

    <hr />

  

    <div className='row '>
      <div className='col-sm-2'></div>
      <div className='col-sm-8'>

  <h3>Task 04 :
Import orders from task_data.js and bind it to a Bootstrap table.
Show columns: Order ID, Customer, Amount, Payment, Status</h3>



        <h1 className='text-center text-primary mt-4'> <u>Employees & Orders</u> </h1>
      

      <table className='table mt-4'>
          <thead className='table-primary'>
          <tr>
               <th>Order ID</th>
               <th>Customer</th>
               <th>Amount</th>
               <th>Payment</th>
               <th>Status</th>
           </tr>
        </thead>
          <tbody>
            {orders.map((item) =>
            {
              return (<>
                   <tr><td>{item.orderId}</td><td>{item.customer}</td><td>{item.amount}</td><td>{item.payment}</td><td>{item.status}</td></tr>
              </>)
              })}
        </tbody>
        </table>
        </div>
      <div className='col-sm-2'></div>
    </div>
    
    <hr />
    
    
   
    <div className='row'>
      <div className='col-sm-2'></div>
      <div className='col-sm-8'>


<h3>Task 05 :
Import students from task_data.js and bind it to a Bootstrap table.
Show columns: ID, Name, Class, Marks, Grade</h3>



        <h1 className='text-center text-secondary'> <u>Students & Customers
        </u> </h1>
        <table className='table mt-4'>
          <thead className='table-secondary'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Marks</th>
              <th>Grade</th>
           </tr>

          </thead>
          <tbody>
            {students.map((item) =>
            {
              return (<>
                   <tr><td>{item.id}</td><td>{item.name}</td><td>{item.class}</td><td>{item.marks}</td><td>{item.grade}</td></tr>
              </>)
          })}
              
          </tbody>
           </table>
           
      </div>
      <div className='col-sm-2'></div>
    </div>
  
    
    <hr />

   
       
    <div className='row'>
      <div className="col-sm-2"></div>
      <div className="col-sm-8 mt-3">
 <h3>Task 06 :
Import customers from task_data.js and bind it to a Bootstrap table.
Show columns: ID, Name, Phone, City, Loyalty</h3>





           <h1 className='text-center text-warning'> <u>Students & Customers</u> </h1>
          
        <table className='table mt-4'>
          <thead className='table-warning '>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>phone</th>
              <th>City</th>
              <th>Loyality</th>
              
              </tr>
          </thead>
          <tbody>
            {customers.map((item) =>
            {
              return (<>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.city}</td>
                  <td>{item.loyalty}</td>
                   </tr>
              </>)
                })}
          </tbody>
          </table>
      </div>
      <div className="col-sm-2"></div>
    </div>

    <hr />
    
      
      
    <div className='row mt-4'>
        <div className='col-sm-2'></div>
      <div className='col-sm-8'>
<h3>Task 07 :
Import invoices from task_data.js and bind it to a Bootstrap table.
Show columns: Invoice No, Client, Total, Due Date, Status
</h3>


        <h1 className='text-center text-danger'>  <u>Invoices & Tasks</u> </h1>

        <table className='table mt-4'>
          <thead className='table-danger'>
            <tr>
              <th>Invoice No</th>
              <th>Client</th>
              <th>Total</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((item) =>
            {
              return (<>
                <tr>
                  <td>{item.invoiceNo}</td>
                  <td>{item.client}</td>
                  <td>{item.total}</td>
                  <td>{item.dueDate}</td>
                  <td>{item.status}</td>
                  <td></td>
                  </tr>
              </>)
              })}
          </tbody>
        </table>
        </div>
        <div className='col-sm-2'></div>
    </div>
    
    <hr />
    

    
    
    <div className="row mt-4">
      <div className="col-sm-2"></div>
      <div className="col-sm-8">

<h3>Task 08 :
Import tasks from task_data.js and bind it to a Bootstrap table.
Show columns: ID, Title, Priority, Assignee, Status
    </h3>



        <h1 className='text-center text-success'> <u>Invoices & Tasks</u> </h1>

        <table className='table mt-4'>
          <thead className='table-success'>
            <tr>
               <th>ID</th>
               <th>Title</th>
               <th>Priority</th>
               <th>Assignee</th>
               <th>Status</th>
            </tr> 
          </thead>
          <tbody>
            {tasks.map((item) =>
            {
              return (<>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.priority}</td>
                  <td>{item.assignee}</td>
                  <td>{item.status}</td>
                 </tr>
              </>)
              })}
          </tbody>
        </table>
      </div>
      <div className="col-sm-2"></div>
    </div>

    <hr />
    

   
 
    <div className='row'>
      <div class="col-sm-2"></div>
      <div class="col-sm-8">

         <h3>Task 09 :
Import payments from task_data.js and bind it to a Bootstrap table.
Show columns: ID, Payer, Method, Amount, Status</h3>


        <h1 className='text-center text-dark'> <u>Payments & Attendance</u></h1>
        
        <table className='table'>
          <thead className='table-dark'>
            <tr>
               <td>ID</td>
               <td>Payer</td>
               <td>method</td>
               <td>Amount</td>
               <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {payments.map((item) =>
            {
              return (<>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.payer}</td>
                  <td>{item.method}</td>
                  <td>{item.amount}</td>
                  <td>{item.status}</td>
                  </tr>
              </>)
              })}
           </tbody>
        </table>
      </div>
      <div class="col-sm-2"></div>
    </div>
    
    <hr />
    
  
    
    <div className="row mt-4">
      <div class="col-sm-2"></div>
      <div class="col-sm-8">



        <h3>Task 10 :
Import attendance from task_data.js and bind it to a Bootstrap table.
Show columns: ID, Employee, Date, Check In, Status
    </h3>
        <h1 className='text-center text-primary'> <u>Payments & Attendance</u></h1>

        <table className='table mt-4'>
          <thead className='table-primary'>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Date</th>
              <th>Check In</th>
              <th>Status</th>
              </tr>
          </thead>
          <tbody>
            {attendance.map((item) =>
            {
              return (<>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.employee}</td>
                  <td>{item.date}</td>
                  <td>{item.checkIn}</td>
                  <td>{item.status}</td>
                  </tr>
              </>)
              })}
          </tbody>

        </table>
      </div>
      <div class="col-sm-2"></div>
      <h1 className='text-center'>Completed</h1>
    </div>

    <hr />
    
    
     
  </>)


}

export default App


