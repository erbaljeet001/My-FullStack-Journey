// import  { useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <button onClick={() =>
//       {
//           if(count < 10)
//             setCount(count + 1)
//           else
//             setCount(0)
//            }
        
//       }>+</button> {count} <button onClick={() =>
        
//       {
//         if (count > 0)
//           setCount(count-1)
//         else
//        setCount(0)
      
//       }}>-</button>
//     </>
//   )
// }

// export default App



import 'bootstrap/dist/css/bootstrap.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    name: yup.string().required().min(3),
    email: yup.string().required(),
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
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <h1 className='text-center'>#Newsletter<span className='text-danger'>Form</span> </h1>
         <form onSubmit={handleSubmit(demo)}>
            <input {...register('name')} type="text" className='form-control mb-3' placeholder="Enter your Name" />
            {errors.name && <p>{errors.name.message}</p>}
            <input {...register('email')} type="email" className='form-control mb-3' placeholder="Enter your email" />
            {errors.email && <p>{errors.email.message}</p>}
          <input type="submit" value="submit" className='btn w-100 btn-warning'  />
            
          </form> 
        </div>
        <div className="col-sm-4"></div>
        </div>
    </>
  )
}

export default App