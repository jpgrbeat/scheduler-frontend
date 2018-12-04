import React, { Component } from 'react';
import './App.css';
import {Route,Switch,Link} from 'react-router-dom';
import {withRouter} from 'react-router'
import Login from './forms/Login'
import About from './components/about'
import ForgotPassword from './forms/forgotPassword'
import NewUser from './forms/newUser'
import ScheduleHome from './containers/scheduleHome'
import WelcomePage from './components/WelcomePage'
import NavBar from './components/NavBar'
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
    if(!user){
      alert("error logging back in");
    }
    else{
      this.props.history.push('/home');
    }
  }
  logout=()=>{
      localStorage.clear()
    }


  render() {
    return (
      <React.Fragment>
      {localStorage.length > 0 ? <NavBar history={this.props.history} logout={this.logout}/> : null}
        <Switch>
          <Route exact path='/' render={()=><WelcomePage/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/forgotpassword' component={ForgotPassword}/>
          <Route exact path='/newuser' component={NewUser}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/home' component={ScheduleHome}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
