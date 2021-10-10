import Users from "./Components/cards";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { users_data: [], loading: false };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2000
    );
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitem">
            <p class="text">LOAN CRED<span>!</span></p>
            <p class="about">
              Get instant loan with in 2 hrs.
              Repay the loan when you need.
              The best loan scheme ever, LOAN CRED
            </p>
            <button className="fetchbt" onClick={this.updateState}>
            <b>GET USERS</b>
            </button>
          </div>
        </nav>
        <div className="userdatacontainer">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
        <div class="image">
          
          <img src="https://c1.wallpaperflare.com/preview/969/336/23/money-finance-business-financial.jpg">
            

          </img>
        </div>
        
      </>
    );
  }
}

export default App;