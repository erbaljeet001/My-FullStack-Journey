import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().required(),
    msg: yup.string().required().min(10),
  });

const demo = (data) =>
{
    console.log(data);
    
   }

const Contact = () => {

  const { register, handleSubmit, formState :{errors} } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <>
      
      <form onSubmit={handleSubmit(demo)}>
         <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <h1 className="text-center text-danger mb-2" >Contact Us</h1>
          
            <input {...register('name')} className="mb-2 form-control" type="text" placeholder="Name" />
            {errors.name && <p className='text-danger'>{errors.name.message}</p>}
            <input {...register('email')} className="mb-2 form-control" type="email" placeholder="Email" />
             {errors.email && <p className='text-danger'>{errors.email.message}</p>}
            
            <textarea {...register('msg')} className="mb-2 form-control" type="text" placeholder="Message" />
             {errors.msg && <p className='text-danger'>{errors.msg.message}</p>}
          <input className="mb-2 form-control bg-dark text-danger" type="submit" value= 'Submit' />
        </div>
        <div className="col-sm-4"></div>
        </div>
      
     </form>
    </>
  )
}

export default Contact