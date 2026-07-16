
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  productname: yup.string().required(),
  category: yup.string().required(),
  price: yup
    .number().typeError()
    .required()
    .positive(),
  stock: yup
    .number()
    .typeError()
    .required()
    .min(0),
  description: yup.string().required(),
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
          <h1 className="text-center text-success">
            #Product<span className='text-danger'>Form</span>
          </h1>

          <form onSubmit={handleSubmit(demo)}>

            <input
              {...register("productname")}
              className="form-control mb-2"
              type="text"
              placeholder="Enter Product Name"
            />
            {errors.productname && <p>{errors.productname.message}</p>}

            <input
              {...register("category")}
              className="form-control mb-2"
              type="text"
              placeholder="Enter Category"
            />
            {errors.category && <p>{errors.category.message}</p>}

            <input
              {...register("price")}
              className="form-control mb-2"
              type="number"
              placeholder="Enter Price"
            />
            {errors.price && <p>{errors.price.message}</p>}

            <input
              {...register("stock")}
              className="form-control mb-2"
              type="number"
              placeholder="Enter Stock"
            />
            {errors.stock && <p>{errors.stock.message}</p>}

            <textarea
              {...register("description")}
              className="form-control mb-2"
              rows="4"
              placeholder="Enter Description"
            ></textarea>
            {errors.description && <p>{errors.description.message}</p>}

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