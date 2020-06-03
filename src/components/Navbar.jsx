import React, {Component} from 'react'
import '../scss/Navbar.scss'

class Navbar extends Component{
  render(){
    return(
      <>
        <div className="navbarWrapper">
          <div className="navMenu"></div>
          <div className="navSearch"></div>
          <div className="navButton"></div>
        </div>
      </>
    )
  }
}

export default Navbar