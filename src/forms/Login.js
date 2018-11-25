import React from 'react'
import {Link,Route} from 'react-router-dom'

class Login extends React.Component {


  state={
    email: '',
    password: '',
    submitted: false
  };



  handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

  handleSubmit = (e) => {
    e.preventDefault();
    const {email,password} = this.state;
    this.setState({submitted:true});

    if(email && password){

    }
  }
  render(){
    return(
      <React.Fragment>
        <form className='login-form'>
          <label>Login</label>
          <br></br>
          <label>Email</label>
          <br></br>
          <input type='text'/>
          <br></br>
          <label>Password</label>
          <br></br>
          <input type='password'/>
          <br></br>
          <button type='submit'>Submit</button>
        </form>
        <br></br>
        <div className='login-links'>
          <Link to='/forgotpassword'>Forgot Password?</Link>
          <Link to='/newuser'>Register</Link>
        </div>
      </React.Fragment>
    )
  }
}
export default Login
