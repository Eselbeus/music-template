import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';

class Nav extends React.Component {
  render(){
    return(
      <nav className="nav">
        <NavLink className="nav-elem" to="/">Home</NavLink>
        <NavLink className="nav-elem" to="/music">Music</NavLink>
        <a className="nav-elem" target="_blank" rel="noreferrer" href="https://symfinity.bandcamp.com/">Example Store</a>
      </nav>
    )
  }

}

export default Nav;
