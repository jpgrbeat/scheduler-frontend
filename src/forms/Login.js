import React from 'react'
import {Link,Route} from 'react-router-dom'
import {login} from '../redux/actions/userActions'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid';
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
      this.props.login(email,password);
    }
  }
  render(){
    return(
      <React.Fragment>
      <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      >
        <div className='login-container'>
          <h3>Log In to Keep Me Posted</h3>

          <form className='login-form' onSubmit={this.handleSubmit}>
            <br></br>
            <label>Email</label>
            <br></br>
            <input type='text' name='email' onChange={this.handleChange}/>
            <br></br>
            <label>Password</label>
            <br></br>
            <input type='password' name='password' onChange={this.handleChange}/>
            <br></br>
            <button  type='submit'>Log in</button>
            <br></br>
          </form>
          <div className='login-forgot-password'>
            <Link to='/forgotpassword'>Forgot Password?</Link>
          </div>
        </div>
        <div className='login-register-link'>
          <p>
            New to Keep Me Posted?
            <Link to='/newuser'> Sign up! >></Link>
          </p>
        </div>
      </Grid>
      </React.Fragment>
    )
  }
}
export default connect(null,{login})(Login)
