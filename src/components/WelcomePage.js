import React from 'react'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';

const WelcomePage = ()=>{
  return(
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    >
    <div className="welcome">
      <h2>Welcome to Keep Me Posted</h2>
      <h3>Login or Learn more by clicking the about button</h3>
      <button><Link className='login-button' to='/login'>Login</Link></button>
      <button><Link className='about-button' to='/about'>About</Link></button>
    </div>
    </Grid>
  )
}
export default WelcomePage
