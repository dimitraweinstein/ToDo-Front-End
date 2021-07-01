import React, { Component } from 'react'
import { signup } from './FetchUtils.js';

export default class SignupPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async e => {
        e.preventDefault();

        const token = await signup(this.state.email, this.state.password);

        this.props.login(token)

        this.props.history.push('/api/todos')
    }

    handleEmailChange = async e => {
        e.preventDefault();

        this.setState({ email: e.target.value });
    }

        handlePasswordChange = async e => {
        e.preventDefault();

        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <div>
                <h2>Create An Account! Sign Up Below:</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                        <input type='email' onChange={this.handleEmailChange} />
                    </label>
                    <label>Password
                        <input type='password' onChange={this.handlePasswordChange} />
                    </label>
                    <button type='submit'>Create Account!</button>
                </form>
            </div>
        )
    }
}
