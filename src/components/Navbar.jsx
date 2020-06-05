import React, {Component} from 'react'
import '../scss/Navbar.scss'

class Navbar extends Component{
  render(){
    return(
      <>
        <div className="navbarWrapper">
          <div className="navMenu"></div>
          <div className="options">
          <select>
            <option>All Categories</option>
            <option>Comics</option>
            <option>Novel</option>
            <option>Science</option>
          </select>
          <select>
            <option>All Times</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
          </select>
          </div>
          <div className="navSearch">
            <input type="text" placeholder="search here..."></input>
            <div className="searchImage">
            </div>
          </div>
          <div className="navButton">
            <button className="btnLogin">Login</button>
            <button className="btnRegister">Register</button>
          </div>
        </div>
      </>
    )
  }
}

export default Navbar