
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required()
    .email(),
  rating: yup
    .number().required()
    .min(1)
    .max(5),
  feedback: yup.string().required(),
});

const App = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const demo = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-3"></div>

        <div className="col-sm-6">
          <h1 className="text-center text-primary">
            #Feedback<span className='text-danger'>Form</span>
          </h1>

          <form onSubmit={handleSubmit(demo)}>

           
            <input
              {...register("name")}
              className="form-control mb-2"
              type="text"
              placeholder="Enter Name"
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}

           
            <input
              {...register("email")}
              className="form-control mb-2"
              type="email"
              placeholder="Enter Email"
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}

        
            <input
              {...register("rating")}
              className="form-control mb-2"
              type="number"
              placeholder="Enter Rating (1-5)"
            />
            {errors.rating && (
              <p className="text-danger">{errors.rating.message}</p>
            )}

            
            <textarea
              {...register("feedback")}
              className="form-control mb-2"
              rows="4"
              placeholder="Enter Feedback"
            ></textarea>
            {errors.feedback && (
              <p className="text-danger">{errors.feedback.message}</p>
            )}

            <input
              className="form-control bg-dark text-light"
              type="submit"
              value="Submit"
            />

          </form>
        </div>

        <div className="col-sm-3"></div>
      </div>
    </>
  );
};

export default App;