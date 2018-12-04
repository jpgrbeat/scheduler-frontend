import React from 'react'
import {NavLink} from 'react-router-dom'


class NavBar extends React.Component{
    render(){
      return(
        <div className='navbar'>
          <h3>Keep Me Posted</h3>
          <NavLink to='/' onClick={this.props.logout}>
            Logout
          </NavLink>
          <NavLink exact to='/about'>
            About
          </NavLink>
          <NavLink exact to='/home'>
            Home
          </NavLink>

        </div>
      )
    }
}
export default NavBar
