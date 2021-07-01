import React, { Component } from 'react'
import { login } from './FetchUtils.js';

export default class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async e => {
        e.preventDefault();

        const token = await login(this.state.email, this.state.password);

        this.props.login(token)

        this.props.history.push('/todos')
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
                <h2>Login Here!</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                        <input type="email" onChange={this.handleEmailChange} />
                    </label>
                    <label>Password
                        <input type='password' onChange={this.handlePasswordChange} />
                    </label>
                    <button type='submit'>Login!</button>
                </form>
            </div>
        )
    }
}
