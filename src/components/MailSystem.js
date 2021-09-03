import React from "react";

class SendEmail extends React.Component {
  render() {
    return (
      <section class="bg-primary text-light p-5">
        <div class="container ">
          <div class="d-md-flex justify-content-between">
            <h3 class="mb-3 mb-md-0">Sign Up</h3>
            <div class="input-group news-inpute">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Email"
              />
              <button class="btn btn-dark btn-lg" type="button">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SendEmail;
