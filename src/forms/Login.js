import React from 'react'
import {withRouter} from 'react-router'

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
      <div>
        <label>Login</label>
      </div>
    )
  }
}
export default withRouter(Login)
