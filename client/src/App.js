import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import Login from './component/Login/Login';
import Users from './component/Users/Users'

class App extends Component {

  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="App">

        <header>
          <nav>
            <NavLink to='/login'>Login</NavLink>
            &nbsp; |&nbsp;
            <NavLink to='/users'>Users</NavLink>
            &nbsp; |&nbsp;
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>

        <Route path='/login' component={Login} />
        <Route path='/users' component={Users} />

      </div>
    );
  }
}

export default withRouter(App);
