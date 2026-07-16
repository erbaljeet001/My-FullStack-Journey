
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const schema = yup
  .object()
  .shape({
    email: yup.string().required(),
    password: yup.string().required().min(6),
  });

export const App = () => {
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
                
          <h1 className='text-center mb-2'>#Login<span className='text-danger'>Form</span>
          </h1>

          <form onSubmit={handleSubmit(demo)}>

            <input {...register('email')} className='form-control mb-2' type="email" placeholder='Enter Email' />
            
            {errors.email && <p>{errors.email.message}</p>}

            <input {...register('password')} className='form-control mb-2' type="password" placeholder='Enter Password' />
            {errors.password && <p>{errors.password.message}</p>}
            <input className='form-control bg-dark text-light' type="submit" value='submit'/>
           </form>


          </div>
          <div className='col-sm-4'></div>
        </div>
    </>
  )
}

export default App;