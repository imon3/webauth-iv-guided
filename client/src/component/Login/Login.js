import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor() {
        super()

        this.state = {
            username: 'sam',
            password: 'pass'
        }
    }

    handleInput = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = e => {
        e.preventDefault()

        const endpoint = 'http://localhost:5000/api/auth/login';
        axios.post(endpoint, this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h2>Login</h2>

                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder='username'
                        name='username'
                        value={this.state.username}
                        id='username' type='text'
                        onChange={this.handleInput}
                    />

                    <input
                        placeholder='password'
                        name='password'
                        value={this.state.password}
                        id='password'
                        type='text'
                        onChange={this.handleInput}
                    />

                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;