
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


  const schema = yup
  .object()
  .shape({
    
    name: yup.string().required(),
    lastname: yup.string().required(),
    username: yup.string().required().min(5),
    phone: yup
  .string()
  .required("Phone number is required")
  .min(10)
  .max(10)
,
    city: yup.string().required(),
    
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
          <h1 className='text-center text-warning'>#UserProfile<span className='text-danger'>Form</span> </h1>
          
          <form onSubmit={handleSubmit(demo)}>
            
             
          <input {...register('name')} className='ms-1 form-control mb-2 ' type="text" placeholder='Enter First Name' />
            {errors.name && <p>{errors.name.message}</p>}
            
 <input {...register('lastname')} className='ms-1 form-control mb-2 ' type="text" placeholder='Enter Last Name' />

           {errors.lastname && <p>{errors.lastname.message}</p>}

          <input {...register('username')} className='ms-1 form-control mb-2 ' type="text" placeholder='Enter Username' />
          {errors.username && <p>{errors.username.message}</p>}
          
            
            <input {...register('phone')} className='ms-1 form-control mb-2 ' type="number" placeholder='Enter Phone' />
            
            {errors.phone && <p>{errors.phone.message}</p>}
          
          
            <input {...register('city')} className='ms-1 form-control mb-2 ' type="text" placeholder='Enter City' />
            
            {errors.city && <p>{errors.city.message}</p>}

          <input className='form-control bg-dark text-light ms-1' type="submit" value='submit' />

           </form>
          

        </div>
        <div className='col-sm-3'></div>
      
      </div> 
        
    </>
  )
}

export default App