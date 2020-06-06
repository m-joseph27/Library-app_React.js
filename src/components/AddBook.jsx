import React, {Component} from 'react'
import '../scss/AddBook.scss'

class AddBook extends Component {
  render() {
    return (
      <>
        <div className="AddBookWrapper">
          <div className="addBook">
            <div className="headerBook">
              <h2>Add Book</h2>
              <i class="fas fa-times"></i>
            </div>
            <div className="bodyBook">
              <div className="leftsideBook">
                <ul>
                  <li>URL Image</li>
                  <li>Title</li>
                  <li>Description</li>
                </ul>
              </div>
              <div className="rightsideBook">
              <input type="text"></input>
              <input type="text"></input>
              <textarea></textarea>
              </div>
            </div>
            <div className="footerBook">
              <button>Save</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AddBook