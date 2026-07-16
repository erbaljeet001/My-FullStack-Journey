import "./FoodSection.css";
import { CiShoppingCart } from "react-icons/ci";

const FoodSection = () => {
  return (
    <div className="container-fluid foodfull py-5">
      <div className="container">

       
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-1" style={{ fontFamily: "cursive" }}>
              Our Menu
            </h1>
          </div>
        </div>

        {/* Menu */}
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="menu2">
              <ul>
                <li><a className="btn btn-dark">All</a></li>
                <li><a>Burger</a></li>
                <li><a>Pizza</a></li>
                <li><a>Pasta</a></li>
                <li><a>Fries</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Row 1 */}
        <div className="row g-4 mt-3">

          <div className="col-lg-4 col-md-6">
            <div className="foodboxinner rounded-5">
              <div className="up">
                <div className="Img1"></div>
              </div>

              <div className="food-text">
                <h3>Delicious Pizza</h3>
                <p>Fresh cheese with crispy crust. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <span>
                  20$
                  <CiShoppingCart className="cart" />
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="foodboxinner">
              <div className="up">
                <div className="Img2"></div>
              </div>

              <div className="food-text">
                <h3>Delicious Burger</h3>
                <p>Juicy burger with fresh veggies. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <span>
                  20$
                  <CiShoppingCart className="cart" />
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="foodboxinner">
              <div className="up">
                <div className="Img3"></div>
              </div>

              <div className="food-text">
                <h3>French Fries</h3>
                <p>Golden crispy fries. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <span>
                  20$
                  <CiShoppingCart className="cart" />
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Row 2 */}
        <div className="row g-4 mt-3">

          <div className="col-lg-4 col-md-6">
            <div className="foodboxinner rounded-5">
              <div className="up">
                <div className="Img4"></div>
              </div>

              <div className="food-text">
                <h3>Delicious Pasta</h3>
                <p>Fresh cheese with crispy crust. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <span>
                  20$
                  <CiShoppingCart className="cart" />
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="foodboxinner">
              <div className="up">
                <div className="Img5"></div>
              </div>

              <div className="food-text">
                <h3>French Fries</h3>
                <p>Juicy burger with fresh veggies. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <span>
                  20$
                  <CiShoppingCart className="cart" />
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="foodboxinner">
              <div className="up">
                <div className="Img6"></div>
              </div>

              <div className="food-text">
                <h3>Delicious Pizza</h3>
                <p>Golden crispy fries. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <span>
                  20$
                  <CiShoppingCart className="cart" />
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Row 3 */}
        <div className="row g-4 mt-3">

          <div className="col-lg-4 col-md-6">
            <div className="foodboxinner rounded-5">
              <div className="up">
                <div className="Img7"></div>
              </div>

              <div className="food-text">
                <h3>Delicious Burger</h3>
                <p>Fresh cheese with crispy crust. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <span>
                  20$
                  <CiShoppingCart className="cart" />
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="foodboxinner">
              <div className="up">
                <div className="Img8"></div>
              </div>

              <div className="food-text">
                <h3>Delicious Burger</h3>
                <p>Juicy burger with fresh veggies. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <span>
                  20$
                  <CiShoppingCart className="cart" />
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="foodboxinner">
              <div className="up">
                <div className="Img9"></div>
              </div>

              <div className="food-text">
                <h3>Delicious Pasta</h3>
                <p>Golden crispy fries. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <span>
                  20$
                  <CiShoppingCart className="cart" />
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FoodSection;