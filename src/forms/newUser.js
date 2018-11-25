import React from 'react'

class NewUser extends React.Component{
  state={
    name: "",
    email: "",
    password: ""
  }

  render(){
    return(
      <form>
      <label>Full Name</label><br>
      </br>
      <input type='text' name='name'/><br>
      </br>
      <label>Email</label><br>
      </br>
      <input type='text' name='email'/><br>
      </br>
      <label>Password</label><br>
      </br>
      <input type='password' name='password'/><br>
      </br>
      <label>Retype Password</label><br>
      </br>
      <input type='password' name='password2'/><br>
      </br>
      <button type='submit' value='submit'>Submit</button>
      </form>
    )
  }
}
export default NewUser;
