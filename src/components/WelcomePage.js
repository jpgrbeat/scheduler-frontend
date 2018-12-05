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
      <Link className='login-button' to='/login'><button>Login</button></Link>
      <Link className='about-button' to='/about'><button>About</button></Link>
    </div>
    </Grid>
  )
}
export default WelcomePage
