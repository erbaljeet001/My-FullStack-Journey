
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().required(),
    mobile: yup.string().required().min(10).max(10),
    gender: yup.string().required(),
    dob: yup.date().required(),
    password: yup.string().required().min(6),
    Confirmpassword: yup.string().required().oneOf([yup.ref("password")], "Passwords do not match"),
    

    
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
           <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <h1 className='text-center'>#Student<span className='text-danger'>RegistrationForm</span> </h1>
          
          <form onSubmit={handleSubmit(demo)}>
            

            <input {...register('name')} type="text" placeholder='Full Name' className='form-control mt-3 mb-2' />
            {errors.name && <p>{errors.name.message}</p>}

            <input {...register('email')} type="email" placeholder='Enter email' className='form-control mt-3 mb-2' />
            
            {errors.email && <p>{errors.email.message}</p>}

            <input  {...register('mobile')} type="number" placeholder='Enter Mobile Number' className='form-control mt-3 mb-2' />
            {errors.mobile && <p>{errors.mobile.message}</p>}

            <label className='ms-2 mb-2 fs-5'   > Gender : </label>  

    
            <input {...register('gender')}  type="radio"  className='ms-3 mt-3 ' value="Male"  />
          <label>Male</label>
          
            <input {...register('gender')}   type="radio" className='ms-3 mt-3 ' value="Female" />
            
          <label>Female</label>
           
          <input {...register('gender')}  type="radio"   className='ms-3 mt-3' value="Other"  />
            <label>Other</label>
            {errors.gender && <p>{errors.gender.message}</p>}
          <br />
            <label className='ms-2 fs-5 mb-2'>Date Of Birth : </label>

            <input {...register('dob')} className='ms-3 mb-2' type="date"  /> 
            {errors.dob && <p>{errors.dob.message}</p>}
  
          <input {...register('password')}  className='form-control mb-2' type="password" placeholder='Enter Password' />
            {errors.password && <p>{errors.password.message}</p>}

            <input  {...register('Confirmpassword')} className='form-control mb-2' type="password" placeholder='Confirm Password' />
            {errors.Confirmpassword && <p>{errors.Confirmpassword.message}</p>}

            <input type="submit" value='submit' className='w-100 bg-warning text-dark' />

         </form>
              
        
           </div>
           <div className='col-sm-4'></div>
          </div>
    
     </>
  )
}

export default App