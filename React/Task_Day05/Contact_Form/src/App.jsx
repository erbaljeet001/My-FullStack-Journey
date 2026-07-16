
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const schema = yup
  .object()
  .shape({
    name: yup.string().required().min(3),
    email: yup.string().required(),
    subject: yup.string().required(),
    msg : yup.string().required().min(20),
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

            <input {...register('name')} className='form-control mb-2' type="text" placeholder='Enter Name' />
            
            {errors.name && <p>{errors.name.message}</p>}

            <input {...register('email')} className='form-control mb-2' type="email" placeholder='Enter Email' />
            {errors.email && <p>{errors.email.message}</p>}

            <label className='ms-1 mb-2' >Fill your Subject :</label>

            <input {...register('subject')} className='ms-1 mb-2 form-control' type="text" placeholder='Enter Here...'/>
            {errors.subject && <p>{errors.subject.message}</p>}
            <label className='ms-1 mb-2' >Fill your Message :</label>
             
            <textarea {...register('msg')} className='form-control ms-1 mb-2' placeholder='Write Here...'></textarea>
            {errors.msg && <p>{errors.msg.message}</p>}

            <input className='form-control bg-dark text-light ms-1' type="submit" value='submit'/>
           </form>


          </div>
          <div className='col-sm-4'></div>
        </div>
    </>
  )
}

export default App;