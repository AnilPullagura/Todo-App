// Write your code here

import {Component} from 'react'

import './index.css'

class CreateTodo extends Component {
  state = {
    editMsg: this.props.todoDetails.title,
    isEditing: false,
    ischecked: false,
  }

  toggleBtn = () => {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing,
    }))
  }

  updateInput = event => {
    this.setState({editMsg: event.target.value})
  }

  render() {
    const {todoDetails, DeleteTodo, updateTodoTitle} = this.props
    const {title, id} = todoDetails

    const saveMsg = () => {
      this.setState(prevState => ({isEditing: !prevState.isEditing}))
      const details = {newTitle: this.state.editMsg, newid: id}
      updateTodoTitle(details)
    }

    const ondelete = () => {
      DeleteTodo(id)
    }

    const marked = () => {
      this.setState(prevState => ({ischecked: !prevState.ischecked}))
    }

    const markedClassname = this.state.ischecked && 'checked'
    return (
      <li className="item">
        <div className="todo">
          <input className="check" onChange={marked} type="checkbox" />
          {this.state.isEditing ? (
            <input
              className="heading"
              onChange={this.updateInput}
              type="text"
              value={this.state.editMsg}
            />
          ) : (
            <p className={`heading ${markedClassname}`}>{title}</p>
          )}
          {this.state.isEditing ? (
            <button className="flex-btn" onClick={saveMsg} type="button">
              Save
            </button>
          ) : (
            <button className="flex-btn" onClick={this.toggleBtn} type="button">
              Edit
            </button>
          )}
          <button onClick={ondelete} className="btn" type="button">
            Delete
          </button>
        </div>
      </li>
    )
  }
}
export default CreateTodo
