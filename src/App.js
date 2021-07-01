import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Redirect, 
    Route, 
    Switch,
} from "react-router-dom";
import ToDoListPage from './ToDoListPage.js';
import Login from './LoginPage.js';
import SignUp from './SignupPage.js';
import HomePage from './HomePage.js';
import Header from './Header.js';

const TOKEN = 'TOKEN';

export default class App extends Component {
  state = { token: localStorage.getItem(TOKEN) }

  login = (userToken) => {
    this.setState({ token: userToken });
    localStorage.setItem(TOKEN, userToken);
  }

    logout = () => {
    this.setState({ token: '' });
    localStorage.setItem(TOKEN, '');
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
             <Route exact path='/' render={(routerProps) => <HomePage 
                {...routerProps} />} 
            />
            <Route exact path='/signup' render={(routerProps) => <SignUp 
                {...routerProps} login={this.login} />} 
            />
            <Route exact path='/signin' render={(routerProps) => <Login 
                {...routerProps} login={this.login} />} 
            />
            <Route exact path='/todos' render={(routerProps) =>
              this.state.token
                ? < ToDoListPage {...routerProps} token={this.state.token} />
                : <Redirect to="/" />
            }
            />            
          </Switch>
        </Router>
      </div>
      
    )
  }
}

