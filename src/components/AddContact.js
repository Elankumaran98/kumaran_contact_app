import React from "react";
import theme from "../images/theme.jpg"

class AddContact extends React.Component {
  state = {
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
  };

  enroll = (e) => {
    e.preventDefault();
    if (
      this.state.FirstName === "" ||
      this.state.LastName === "" ||
      this.state.Email === "" ||
      this.state.Phone === ""
    ) {
      alert("Please Fill all Blanks");
      return;
    }
    this.props.addContactHandiler(this.state);
    this.setState({ FirstName: "", LastName: "", Email: "", Phone: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <section className="bg-dark text-light  p-5 p-lg-0 pt-lg-5 text-center">
        <div className="container ">
          <div className="d-sm-flex align-items-center justify-content-between mt-4">
            <div>
              <h1>
                <span className="text-warning">Elankumaran</span>
              </h1>
              <p className="lead my-4">
                3rd year student in University Of Kelaniya
              </p>
              <p className="lead">Fill the Form</p>
              <form onSubmit={this.enroll}>
                <div className="mb-3">
                  <label for="first-name" className="col-form-label">
                    First Name
                  </label>
                  <input
                    className="form-control"
                    id="first-name"
                    type="text"
                    value={this.state.FirstName}
                    onChange={(e) =>
                      this.setState({ FirstName: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label for="last-name" className="col-form-label">
                    Last Name
                  </label>
                  <input
                    className="form-control"
                    id="last-name"
                    type="text"
                    value={this.state.LastName}
                    onChange={(e) =>
                      this.setState({ LastName: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="col-form-label">
                    Email
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    type="text"
                    value={this.state.Email}
                    onChange={(e) => this.setState({ Email: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label for="tel" className="col-form-label">
                    Phone
                  </label>
                  <input
                    className="form-control"
                    id="tel"
                    type="text"
                    value={this.state.Phone}
                    onChange={(e) => this.setState({ Phone: e.target.value })}
                  />
                </div>
                <button
                  className="btn btn-primary btn-lg mb-4"
                  data-bs-toggle="modal"
                  data-bs-target="#enroll"
                >
                  Enroll Me
                </button>
              </form>
            </div>
            <div>
              <img
                className="img-fluid w-80 h-80 d-none d-sm-block mb-4 px-5"
                src={theme}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default AddContact;
