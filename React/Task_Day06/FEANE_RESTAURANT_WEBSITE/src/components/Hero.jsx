import "./Hero.css";

const Hero = () => {
  return (
    <div className="container hfull">
      <div className="row hrow align-items-center">
        <div className="col-lg-6 left">
          <div
            id="heroSlider"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h1>
                  Fast Food <br /> Restaurant
                </h1>

                <p>
                  Doloremque, itaque aperiam facilis rerum, commodi,
                  temporibus sapiente ad mollitia laborum quam quisquam
                  esse error unde. Tempora ex doloremque, labore,
                  sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                </p>

                
              </div>

              <div className="carousel-item">
                <h1>
                  Fast Food <br /> Restaurant
                </h1>

                <p>
                  Doloremque, itaque aperiam facilis rerum, commodi,
                  temporibus sapiente ad mollitia laborum quam quisquam
                  esse error unde. Tempora ex doloremque, labore,
                  sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                </p>

                
              </div>

              <div className="carousel-item">
                <h1>
                  Fast Food <br /> Restaurant
                </h1>

                <p>
                  Doloremque, itaque aperiam facilis rerum, commodi,
                  temporibus sapiente ad mollitia laborum quam quisquam
                  esse error unde. Tempora ex doloremque, labore,
                  sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                </p>

               
                
              </div>
            </div>

            <div className="carousel-indicators position-static justify-content-start mt-4">
              <button
                type="button"
                data-bs-target="#heroSlider"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
              ></button>

              <button
                type="button"
                data-bs-target="#heroSlider"
                data-bs-slide-to="1"
              ></button>

              <button
                type="button"
                data-bs-target="#heroSlider"
                data-bs-slide-to="2"
              ></button>
            </div>
          </div>
        </div>

        <div className="col-lg-6"></div>
      </div>
    </div>
  );
};

export default Hero;