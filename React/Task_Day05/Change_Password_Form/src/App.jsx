
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


  const schema = yup
  .object()
  .shape({
    
    password: yup.string().required(),
    newpassword: yup.string().required().min(8),
    Confirmpassword: yup.string().required().oneOf([yup.ref("newpassword")], "Passwords do not match"),
  
    
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
          <h1 className='text-center text-warning'>#ChangePassword<span className='text-danger'>Form</span> </h1>
          
          <form onSubmit={handleSubmit(demo)}>
            
             
          <input {...register('password')} className='ms-1 form-control mb-2 ' type="password" placeholder='Enter Current Password' />
            {errors.password && <p>{errors.password.message}</p>}

            <input {...register('newpassword')} className='ms-1 form-control mb-2 ' type="password" placeholder='Enter New Password' />
            {errors.newpassword && <p>{errors.newpassword.message}</p>}

            <input {...register('Confirmpassword')} className='ms-1 form-control mb-2 ' type="password" placeholder='Enter Confirm Password' />
            {errors.Confirmpassword && <p>{errors.Confirmpassword.message}</p>}
            
          <input className='form-control bg-dark text-light ms-1' type="submit" value='submit' />

           </form>
          

        </div>
        <div className='col-sm-3'></div>
      
      </div> 
        
    </>
  )
}

export default App