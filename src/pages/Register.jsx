import React, {Component} from 'react'
import '../scss/Register.scss'
import logo from '../assets/img/logo.png'

class Register extends Component{
  render(){
    return(
      <>
        <div className="RegisterWrapper">
          <div className="imageRegister"></div>
          <div className="formRegister">
            <div className="RegisterLogo">
              <img src={logo} alt="logo" width="80px" height="80px"></img>
            </div>
            <div className="actionForm">
              <h1>Register</h1>
              <p>Welcome back, Please Register to your account</p>
              <div className="RegisterEmail">
                <label id="1">Username</label>
                <input id="1" type="text"></input>
              </div>
              <div className="RegisterEmail">
                <label>Full Name</label>
                <input type="text"></input>
              </div>
              <div className="RegisterEmail">
                <label>Email</label>
                <input type="email"></input>
              </div>
              <div className="RegisterPassword">
                <label>Password</label>
                <input type="password"></input>
              </div>
              <div className="bntAction">
                <button className="btnRegister">Sign Up</button>
                <button className="btnLog">Login</button>
              </div>
            </div>
            <div className="termRegister">
              <span>By signing up,you agree to Book's</span>
              <p>Terms and Conditions <span>&</span> Privacy Policy</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Register