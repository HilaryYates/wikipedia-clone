import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signInEmail: "", signInPassword: "" };
  }
  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };
  onSubmitSignIn = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };
  render() {
    const { onRouteChange } = this.props;
    return (
      <div>
        <h1 className='sign-in-header'>Sign in to</h1>
        <img
          className='wikipedia-font'
          src='https://famfonts.com/wp-content/uploads/wikipedia-wide.png'
        />
        <form className='sign-in-form'>
          <div className='email-label'>Email</div>
          <input type='email' onChange={this.onEmailChange} />
          <div className='sign-in-password-group'>
            <div className='password-label'>Password</div>
            <input type='password' onChange={this.onPasswordChange} />
          </div>
          <div className='sign-in-submit-btn'>
            <Button
              onClick={this.onSubmitSignIn}
              type='submit'
              variant='primary'
            >
              Submit
            </Button>
          </div>
        </form>
        <div className='sign-in-register-btn'>
          <Button onClick={() => onRouteChange("register")} variant='light'>
            Create an account
          </Button>
        </div>
      </div>
    );
  }
}

export default SignIn;
