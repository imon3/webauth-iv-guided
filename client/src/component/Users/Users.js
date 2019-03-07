import React from 'react';
import axios from 'axios';

import Authentication from '../Authentication/Authentication';

class Users extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get('/users')
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.users.map(user => {
                    return <li key={user.id}>{user.username}</li>
                })}
            </div>
        )
    }

}

export default Authentication(Users);