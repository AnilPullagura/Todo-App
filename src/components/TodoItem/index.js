// Write your code here

import {Component} from 'react'

import './index.css'

class CreateTodo extends Component {
  render() {
    const {todoDetails, DeleteTodo} = this.props
    const {title, id} = todoDetails

    const ondelete = () => {
      DeleteTodo(id)
    }

    return (
      <li className="item">
        <div className="todo">
          <p className="heading">{title}</p>
          <button onClick={ondelete} className="btn" type="button">
            Delete
          </button>
        </div>
      </li>
    )
  }
}
export default CreateTodo
