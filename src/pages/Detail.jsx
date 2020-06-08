import React, {Component} from 'react'
import "../scss/Detail.scss"

class Detail extends Component   {
  render() {
    return(
      <>
        <div className="detailwrapper">
          <div className="navDetail"></div>
          <div className="jumbotronDetail"></div>
          <div className="detailBook"></div>
        </div>
      </>
    )
  }
}

export default Detail