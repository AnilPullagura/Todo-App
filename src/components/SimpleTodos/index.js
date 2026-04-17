import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CreateTodo from '../TodoItem/index'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isChecked: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isChecked: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isChecked: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    isChecked: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    isChecked: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    isChecked: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    isChecked: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    isChecked: false,
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {dupeList: initialTodosList, title: ''}

  DeleteTodo = id => {
    const {dupeList} = this.state
    const filterList = dupeList.filter(each => each.id !== id)
    this.setState({dupeList: filterList})
  }

  changeInput = event => {
    this.setState({title: event.target.value})
  }

  catchCount = title => {
    if (title) {
      const separatedString = title.split(' ')
      const count = separatedString[separatedString.length - 1]

      return isNaN(count) ? 1 : count
    }
  }

  updateTodoTitle = details => {
    const {newTitle, newid} = details
    console.log(details)
    this.setState(prevState => ({
      dupeList: prevState.dupeList.map(each =>
        each.id === newid ? {...each, title: newTitle} : each,
      ),
    }))
  }
  Addtodo = () => {
    const {title} = this.state
    const count = this.catchCount(title)
    const taskParts = title.split(' ')
    const taskName = isNaN(parseInt(taskParts[taskParts.length - 1]))
      ? title
      : taskParts.slice(0, -1).join(' ')

    const newTodos = []
    for (let i = 0; i < count; i++) {
      newTodos.push({id: uuidv4(), title: taskName, isChecked: false})
    }

    this.setState(prevState => ({
      dupeList: [...prevState.dupeList, ...newTodos],
      title: '',
    }))
  }

  render() {
    const {dupeList} = this.state
    const {title} = this.state
    return (
      <div className="back">
        <div className="box">
          <h1 className="head">Simple Todos</h1>
          <div className="todo-input">
            <input
              placeholder="type title and count"
              onChange={this.changeInput}
              type="text"
              value={title}
            />
            <button onClick={this.Addtodo} type="button" className="add-btn">
              Add
            </button>
          </div>
          <ul>
            {dupeList.map(every => (
              <CreateTodo
                todoDetails={every}
                key={every.id}
                DeleteTodo={this.DeleteTodo}
                updateTodoTitle={this.updateTodoTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
