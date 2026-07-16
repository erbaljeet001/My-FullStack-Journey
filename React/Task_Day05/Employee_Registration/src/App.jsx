import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


  const schema = yup
  .object()
  .shape({
    empid: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().required(),
    department: yup.string().required(),
    salary: yup.number().required().positive(),
    joindate: yup.string().required(),
    
  });


const App = () => {

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema),
 });  
  const demo = (data) => {
     console.log(data);
     
  }

  return (
    <>
      <div className='row'>
        <div className='col-sm-3'></div>
        <div className='col-sm-6'>
          <h1 className='text-center text-warning'>#EmployeeRegistration</h1>
          
          <form onSubmit={handleSubmit(demo)}>
            
             <input {...register('empid')} className='ms-1 form-control mb-2 ' type="text" placeholder='Employee ID' />

           {errors.empid && <p>{errors.empid.message}</p>}
          <input {...register('name')} className='ms-1 form-control mb-2 ' type="text" placeholder='Enter Name' />
         {errors.name && <p>{errors.name.message}</p>}
          <input {...register('email')} className='ms-1 form-control mb-2 ' type="email" placeholder='Enter Email' />
          {errors.email && <p>{errors.email.message}</p>}
          <input {...register('department')} className='ms-1 form-control mb-2 ' type="text" placeholder='Enter Department' />
            {errors.department && <p>{errors.department.message}</p>}
            
            <input {...register('salary')} className='ms-1 form-control mb-2 ' type="number" placeholder='Enter Salary' />
            
            {errors.salary && <p>{errors.salary.message}</p>}
          
          <label className='ms-1 mb-2'>Select Joining Date : </label>
            <input {...register('joindate')} className='ms-1 form-control mb-2 ' type="date" />
            
            {errors.joindate && <p>{errors.joindate.message}</p>}

          <input className='form-control bg-dark text-light ms-1' type="submit" value='submit' />

           </form>
          

        </div>
        <div className='col-sm-3'></div>
      
      </div> 
        
    </>
  )
}

export default App