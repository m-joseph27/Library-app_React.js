import React, {Component} from "react"
import "../scss/Login.scss"
import logo from "../assets/img/logo.png"

class Login extends Component{
  render(){
    return(
      <>
        <div className="loginWrapper">
          <div className="imageLogin"></div>
          <div className="formLogin">
            <div className="loginLogo">
              <img src={logo} alt="logo" width="80px" height="80px"></img>
            </div>
            <div className="actionForm">
              <h1>Login</h1>
              <p>Welcome back, Please login to your account</p>
              <div className="loginEmail">
              <label id="1">Email</label>
              <input id="1" type="email"></input></div>
              <div className="loginPassword">
              <label id="password">Password</label>
              <input id="password" type="password"></input>
              </div>
              <div className="ceklist">
              <input type="checkbox"></input>
              <label>Remember me</label>
              <p>Forgot Password</p>
              </div>
              <div className="bntAction">
            <button className="btnLogin">Login</button>
            <button className="btnRegister">Register</button>
            </div>
            </div>
            <div className="termLogin">
            <span>By signing up,you agree to Book's</span>
            <p>Terms and Conditions <span>&</span> Privacy Policy</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Login