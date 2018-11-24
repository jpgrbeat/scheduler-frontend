import React, { Component } from 'react';
import './App.css';
import {Route,Switch,Link} from 'react-router-dom';
import {withRouter} from 'react-router'
import Login from './forms/Login'
import About from './components/about'
const requestHelper = url =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }).then(res => {
    if (res.status === 401) {
      alert("login failed");
    } else {
      return res.json();
    }
  })

class App extends Component {

  fetchUser = () => {
    requestHelper("http://localhost:3000/me").then(user => this.updateUser(user));
  }

  componentDidMount() {
   if (localStorage.getItem("token")) {
     this.fetchUser();
   }
  }

  updateUser(user) {
    if(!user.ok){
      alert("error logging back in");
    }
    else{
      console.log('cool');
    }
  }
  logout=()=>{
      localStorage.clear()
      this.props.history.push('/')
      this.props.setActiveUser({user:null})
    }


  render() {
    return (

        <Switch>
          <Route exact path='/' render={()=>(
          <div className="welcome">
            <h2>Welcome to Keep Me Posted</h2>
            <h3>Login or Learn more by clicking the about button</h3>
            <Link className='login-button' to='/login'>Login</Link>
            <Link className='about-button' to='/about'>About</Link>
          </div>
        )}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/about' component={About}/>
        </Switch>

    );
  }
}

export default withRouter(App);
