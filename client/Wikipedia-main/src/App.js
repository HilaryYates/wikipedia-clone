import { Component } from "react";
import "./index.css";
import "./Components/SearchForm";
import SignIn from "./Components/SignIn";
import Register from "./Components/Register";
import SearchForm from "./Components/SearchForm";
import Logo from "./Logo";
import Navigation from "./Components/Navigation";

class App extends Component {
  constructor() {
    super();
    this.state = { route: "signed-out", user: { id: "", name: "", email: "" } };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  loadUser = (data) => {
    console.log(data);
    this.setState({
      user: { id: data.id, name: data.name, email: data.email },
    });
  };
  render() {
    return (
      <div class='main'>
        {this.state.route === "home" ? (
          <div>
            <Navigation
              onRouteChange={this.onRouteChange}
              name={this.state.user.name}
            />
            <Logo />
            <SearchForm />
          </div>
        ) : this.state.route === "signed-out" ? (
          <div>
            <SignIn
              onRouteChange={this.onRouteChange}
              loadUser={this.loadUser}
            />
          </div>
        ) : (
          <div>
            <Register
              onRouteChange={this.onRouteChange}
              loadUser={this.loadUser}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
