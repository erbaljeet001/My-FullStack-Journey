
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().required().min(10).max(10),
  address: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  pincode: yup.string().required().min(6),
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
            #Customer<span className='text-danger'>Registration</span>
          </h1>

          <form onSubmit={handleSubmit(demo)}>

            <input
              {...register("name")}
              className="form-control mb-2"
              type="text"
              placeholder="Enter Name"
            />
            {errors.name && <p>{errors.name.message}</p>}

            <input
              {...register("email")}
              className="form-control mb-2"
              type="email"
              placeholder="Enter Email"
            />
            {errors.email && <p>{errors.email.message}</p>}

            <input
              {...register("phone")}
              className="form-control mb-2"
              type="text"
              placeholder="Enter Phone"
            />
            {errors.phone && <p>{errors.phone.message}</p>}

            <textarea
              {...register("address")}
              className="form-control mb-2"
              rows="3"
              placeholder="Enter Address"
            ></textarea>
            {errors.address && <p>{errors.address.message}</p>}

            <input
              {...register("city")}
              className="form-control mb-2"
              type="text"
              placeholder="Enter City"
            />
            {errors.city && <p>{errors.city.message}</p>}

            <input
              {...register("state")}
              className="form-control mb-2"
              type="text"
              placeholder="Enter State"
            />
            {errors.state && <p>{errors.state.message}</p>}

            <input
              {...register("pincode")}
              className="form-control mb-2"
              type="text"
              placeholder="Enter Pincode"
            />
            {errors.pincode && <p>{errors.pincode.message}</p>}

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