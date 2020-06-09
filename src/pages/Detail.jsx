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
              <div className="detailDescription">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              </div>
              <div className="buttonBook">
              <button className="buttonBorrow">Borrow</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Detail