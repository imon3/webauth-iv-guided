import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/';
axios.interceptors.request.use(
    function (options) {
        // this functin hass access to the request options passed to axios

        // read the token from local storage and attach it to the req as the auth header
        options.headers.authorization = localStorage.getItem('jwt');

        // now any component tha is rendered by this HOC will attach the token automatically

        return options; // return the modified options to axios
    },
    function (err) {
        return Promise.reject(err)
    }
);

export default function (Component) {
    return class Authentication extends React.Component {

        render() {
            const token = localStorage.getItem('jwt')
            const notLoggedIn = <div>Please Log In to see Users</div>

            return (
                <div>
                    {token ? <Component {...this.props} /> : notLoggedIn}
                </div>
            )
        }
    }
}