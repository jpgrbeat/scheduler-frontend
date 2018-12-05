import React from 'react'
import PasswordWarning from '../components/passwordWarning'
import EmailWarning from '../components/emailWarning'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid';

class NewUser extends React.Component{
  state={
    first_name: "",
    last_name: "",
    email: "",
    password: null,
    visibilityPasswordWarning: false,
    visibilityEmailWarning: false,
    preventSubmit: false
  };

  changeHandler=(e)=>{
  const {value,name} = e.target;

    if(name === "password2" && this.state.password !== null){
      console.log('here')
      this.validatePassword(value)
    }else if(name === 'email'){
      this.validateEmail(value)
    }else{
      this.setState({
        [name]:value
      });
    };
  }

  validatePassword(value){
      if(this.state.password !== value){
        console.log('invalid')
        this.setState({
          visibilityPasswordWarning:true,
          preventSubmit:true
        });
      }else{
        if(this.state.visibilityPasswordWarning){
          this.setState({
            visibilityPasswordWarning:false
          })
        }else if (!this.state.visibilityEmailWarning){
          this.setState({
            preventSubmit:false
          });
        }
      }

  }
  validateEmail(value){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let emailBool = value.match(re);
    if(!emailBool){
      this.setState({
        visibilityEmailWarning:true,
        preventSubmit:true
      })
    }else{
      if(this.state.visibilityEmailWarning){
        this.setState({
          visibilityEmailWarning:false
        });
        if(!this.state.visibilityPasswordWarning){
          this.setState({
            preventSubmit:false
          });
        }
      }
    }
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    e.stopPropagation()
    console.log(e)
  }
  render(){
    let {visibilityEmailWarning, visibilityPasswordWarning} = this.state;
    return(
      <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      >
        <div className='new-user-form-container'>

          <form className='new-user-form' onSubmit={this.handleSubmit}>
            <label>First Name</label><br>
            </br>
            <input type='text' name='first_name' onChange={this.changeHandler}/><br>
            </br>
            <label>Last Name</label><br>
            </br>
            <input type='text' name='last_name' onChange={this.changeHandler}/><br>
            </br>

            <label>Email</label><br>
            </br>
            <input type='text' name='email' onChange={this.changeHandler}/><br>
            </br>
            {visibilityEmailWarning ? <EmailWarning/> : null}
            <label>Password</label><br>
            </br>
            <input type='password' name='password' onChange={this.changeHandler}/><br>
            </br>
            <label>Retype Password</label><br>
            </br>
            <input type='password' name='password2' onChange={this.changeHandler}/><br>
            </br>
            {visibilityPasswordWarning ? <PasswordWarning/> : null}
            <button disabled={this.state.preventSubmit} type='submit' value='submit'>Register</button>
          </form>
        </div>
      </Grid>
    )
  }
}
export default NewUser;
