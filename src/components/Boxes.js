import React from "react";

class Boxes extends React.Component {
  render() {
    return (
      <section className="p-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <h3 className="card-title mb-3">Virtual</h3>
                  <p className="card-text">
                    fhdvbdhuvb brhber brerihber eruhfiueh.
                  </p>
                  <a href="#1" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-secondary text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-person-square"></i>
                  </div>
                  <h3 className="card-title mb-3">Hybrid</h3>
                  <p className="card-text">
                    fhdvbdhuvb brhber brerihber eruhfiueh.
                  </p>
                  <a href="#2" className="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-people"></i>
                  </div>
                  <h3 className="card-title mb-3">In Person</h3>
                  <p className="card-text">
                    fhdvbdhuvb brhber brerihber eruhfiueh.
                  </p>
                  <a href="#3" className="btn btn-primary ">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Boxes;
