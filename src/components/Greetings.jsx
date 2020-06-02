import React, {Component} from 'react'

class Greetings extends Component{
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.name || 'user'
    }
  }
render(){
  return(
    <>
      Hi {this.state.user}, welcome
    </>
    )
  }
}

export default Greetings