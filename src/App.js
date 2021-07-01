import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
} from "react-router-dom";
import ToDoListPage from './ToDoListPage.js';
import Login from './LoginPage.js';
import SignUp from './SignupPage.js';
import HomePage from './HomePage.js';
import Header from './Header.js';

export default class App extends Component {
  // state = { token: localStorage.getItem('TOKEN') }

  // handleTokenChange = (myToken) => {
  //   this.setState({ token: myToken });
  //   localStorage.setItem('TOKEN', myToken);
  // }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Link to='/'>Home</Link>
          <Link to='/signup'>Sign Up!</Link>
          <Link to='/signin'>Log In!</Link>
          <Link to='/todos'>To Do List</Link>
          <Switch>
             <Route exact path='/' render={(routerProps) => <HomePage 
                {...routerProps} />} 
            />
            <Route exact path='/signup' render={(routerProps) => <SignUp 
                {...routerProps} />} 
            />
            <Route exact path='/signin' render={(routerProps) => <Login 
                {...routerProps} />} 
            />
            <Route exact path='/todos' render={(routerProps) => <ToDoListPage 
                {...routerProps} />} 
            />            
          </Switch>
        </Router>
      </div>
      
    )
  }
}

