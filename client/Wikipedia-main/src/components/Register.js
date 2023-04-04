import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class Register extends React.Component {
  constructor() {
    super();
    this.state = { name: "", email: "", password: "" };
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  onSubmitRegister = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.name,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <div>
        <div className='register-form'>
          <div className='name-label'>Name</div>
          <input type='text' onChange={this.onNameChange} />
          <div className='email-label'>Email</div>
          <input type='email' onChange={this.onEmailChange} />
          <div className='password-label'>Password</div>
          <input type='password' onChange={this.onPasswordChange} />
        </div>{" "}
        <div className='register-btn'>
          <Button onClick={this.onSubmitRegister} variant='primary'>
            Register
          </Button>
        </div>
      </div>
    );
  }
}

export default Register;
