function Services() {
  return (
    <section className="services">
      <div className="container">
        <h1 className="text-center mb-5">Our Services</h1>

        <div className="row">
          <div className="col-sm-3 mb-4">
            <div className="card h-100 text-center">
              <div className="mt-3">
                <h4 className="text-danger">Web Design</h4>
                <p>
                  Modern and responsive website designs that look great on all
                  devices.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-3 mb-4">
            <div className="card  h-100 text-center">
              <div className="mt-3">
                <h4 className="text-danger">React Development</h4>
                <p>
                  Build fast, scalable, and interactive web applications using
                  React.js.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-3 mb-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h4 className="text-danger">UI/UX Design</h4>
                <p>
                  User-friendly interfaces with attractive and intuitive user
                  experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card  h-100 text-center">
              <div className="card-body">
                <h4 className="text-danger">Support</h4>
                <p>
                  Reliable maintenance and technical support to keep your
                  website running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;