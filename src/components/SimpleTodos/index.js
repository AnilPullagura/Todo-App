import {Component} from 'react'

import CreateTodo from '../TodoItem/index'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {dupeList: initialTodosList}

  DeleteTodo = id => {
    const {dupeList} = this.state
    const filterList = dupeList.filter(each => each.id !== id)
    this.setState({dupeList: filterList})
  }

  render() {
    const {dupeList} = this.state

    return (
      <div className="back">
        <div className="box">
          <h1 className="head">Simple Todos</h1>
          <ul>
            {dupeList.map(every => (
              <CreateTodo
                todoDetails={every}
                key={every.id}
                DeleteTodo={this.DeleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
