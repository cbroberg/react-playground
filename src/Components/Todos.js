import React, { Component } from 'react'
import TodoItem from './TodoItem'

class Todos extends Component {
  render() {
    let todoItems
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return(
          <TodoItem key={todo.title} todo={todo} />
        )
      })
    }
    return (
      <div className="Todos">
      <h3>Todo list</h3>
        {todoItems}
      </div>
    )
  }
}

//  Typechecking with PropTypes
Todos.propTypes = {
  todos: React.PropTypes.array
}

export default Todos