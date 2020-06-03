import React, {Component} from 'react'
import Greetings from '../components/Greetings'

class Login extends Component{
  constructor(props){
    super(props)
    this.setState = {
      email: '',
      password: '',
    }
  }

  login = (e) => {
    e.preventDefault()

    console.log('email:', this.setState.email);
    console.log('password:', this.setState.password);  
  }

  toggleHello = () => {
    const Answer = prompt('are you sure?')
    switch(Answer){
      case 'YES': {
        this.setState({hello: !this.setState.hello})
        break
      }
      default: {

      }
    }
  }

  render(){
    return(
      <>
        {this.setState.hello && <Greetings/>}
        <button onClick={this.toggleHello}>delete</button>
        <form onSubmit={(e) => this.login(e)}>
          <input onChange={ e => this.setState({email: e.target.value})} type="email"></input>
          <input onChange={ e => this.setState({password: e.target.value})} type="password"></input>
        </form>
        <button onClick={(e) => this.login(e)}>Sumbit</button>
      </>
    )
  }
}

export default Login