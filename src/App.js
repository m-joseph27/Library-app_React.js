import React, {Component} from 'react'
import Greetings from './components/Greetings'

class App extends Component{
  render(){
    return(
      <>
        <h1>
          <Greetings name="yusuf"/>
        </h1>
      </>
    )
  }
}

export default App;
