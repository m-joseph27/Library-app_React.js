import React, {Component} from 'react'
import "../scss/Detail.scss"
import Arrow from "../assets/img/left-arrow.png"

class Detail extends Component   {
  render() {
    return(
      <>
        <div className="detailwrapper">
          <div className="navDetail">
            <div className="navArrow"><img src={Arrow} alt="arrow"></img></div>
            <div className="listEdit">
              <ul>
              <li>Edit</li>
              <li>Delete</li>
              </ul>
            </div>
          </div>
          <div className="jumbotronDetail"></div>
          <div className="detailBook"></div>
        </div>
      </>
    )
  }
}

export default Detail