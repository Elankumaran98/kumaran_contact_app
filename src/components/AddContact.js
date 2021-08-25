import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add=(e)=>{
      e.preventDefault();
      if(this.state.name===""&&this.state.email===""){
          alert("Please Fill All Gaps");
          return
      }
      this.props.addContactHandiler(this.state);
      this.setState({name:"",email:""});
      this.props.history.push("/");
  }
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <labal>Name</labal>
            <input
              type="text"
              name="Name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <labal>Name</labal>
            <input
              type="text"
              name="Email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button">Add Contact</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
