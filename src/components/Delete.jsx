import React, {Component} from "react"
import "../scss/Delete.scss"

class Delete extends Component {
  render() {
    return(
      <>
        <div className="deleteWrapper">
          <div className="deleteBook">
          <i class="fas fa-times"></i>
          </div>
        </div>
      </>
    )
  }
}

export default Delete