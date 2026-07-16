import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    phone: yup.number().required(),
    address: yup.string().required(),
    landmark: yup.string(),
    city: yup.string().required(),
    state: yup.string().required(),
    pin: yup.string().required().min(6).max(6),
    
  })


const demo = (data) =>
{
     console.log(data);
     
    }
const App = () => {

  const { register, handleSubmit, formState : {errors}  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <form onSubmit={handleSubmit(demo)}>
        <div className='row'>
          <div className='col-sm-3'></div>
        <div className='col-sm-6'>
          <h1 className='text-center mb-3'>#ShippingAddress<span className='text-danger'>Form</span> </h1>
          
            <input  {...register('name')} className='form-control mb-2 ' type="text" placeholder='Enter FullName' />
            {errors.name && <p className='text-danger'>{errors.name.message}</p>}
          
          <input {...register('phone')} className='form-control mb-2 ' type="number" placeholder='Enter Phone' />
          
            {errors.phone && <p className='text-danger'>{errors.phone.message}</p>}

            <input {...register('address')} className='form-control mb-2 ' type="text" placeholder='Enter Address' />
            
            {errors.address && <p className='text-danger'>{errors.address.message}</p>}
          
            <input {...register('landmark')} className='form-control mb-2 ' type="text" placeholder='Enter LandMark' />
            
            {errors.landmark && <p className='text-danger'>{errors.landmark.message}</p>}

            <input {...register('city')} className='form-control mb-2 ' type="text" placeholder='Enter City' />
            
            {errors.city && <p className='text-danger'>{errors.city.message}</p>}
          
            <input {...register('state')} className='form-control mb-2 ' type="text" placeholder='Enter State' />
            
            {errors.state && <p className='text-danger'>{errors.state.message}</p>}
          
            <input  {...register('pin')} className='form-control mb-2 ' type="text" placeholder='Enter PinCode' />
            
            {errors.pin && <p className='text-danger'>{errors.pin.message}</p>}
          
          <input className='form-control bg-secondary text-light' type="submit" value='submit' />
            
          </div>
          <div className='col-sm-3'></div>
      </div>

      </form>
       
    </>
  )
}

export default App