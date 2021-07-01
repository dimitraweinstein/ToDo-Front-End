import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <h2>To Do List App</h2>
                 <Link to='/'>Home</Link>
                 <Link to='/signup'>Sign Up!</Link>
                 <Link to='/signin'>Log In!</Link>
                <Link to='/todos'>To Do List</Link>
                <button onClick={this.logout}>Log Out!</button>
            </div>
        )
    }
}
