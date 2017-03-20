import React, { Component } from 'react'

class TodoItem extends Component {
 
  render() {
    return (
      <div className="TodoItem">
        <li>
            <strong>{this.props.todo.title}</strong>
        </li>
      </div>
    )
  }
}

//  Typechecking with PropTypes
TodoItem.propTypes = {
  todo: React.PropTypes.object
}

export default TodoItem