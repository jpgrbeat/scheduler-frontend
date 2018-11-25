import React from 'react'
import {withRouter} from 'react-router'
const ForgotPassword = () => (
    <form className='forgot-password'>
    <label>Enter email address</label><br>
    </br>
      <input type='text' placeholder='johndoe@email.com'/><br>
      </br>
      <button type='submit' value='submit'>Submit</button>
    </form>
)
export default withRouter(ForgotPassword)
