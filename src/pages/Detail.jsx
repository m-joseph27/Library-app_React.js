import React, {Component} from 'react'
import "../scss/Detail.scss"
import Arrow from "../assets/img/left-arrow.png"
import Book from "../assets/img/dilan.jpeg"

class Detail extends Component   {
  render() {
    return(
      <>
        <div className="detailwrapper">
          <div className="navDetail">
            <div className="navArrow"><img src={Arrow} alt="arrow"></img></div>
            <div className="editSection">
              <ul>
                <li>Edit</li>
                <li>Delete</li>
              </ul>
            </div>
          </div>
          <div className="jumbotronDetail">
            <img src={Book} alt="book"></img>
            <div className="containBook">
              <img src={Book} alt="book-detail"></img>
            </div>
          </div>
          <div className="detailBook">
            <div className="bookType">
            <p>Novel</p>
            </div>
            <div className="titleBook">
              <div className="detailTitle">
              <p>Dilan 1990</p>
              </div>
              <div className="avaliability">
              <p>Avaliable</p>
              </div>
            </div>
            <div className="dateBook">
            <p>30 Juni 2019</p>
            </div>
            <div className="descriptionBook">
              <div className="detaildescription"></div>
              <div></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Detail