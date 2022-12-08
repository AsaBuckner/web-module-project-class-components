import React from 'react'
import Todo from "./Todo"

class TodoList extends React.Component {
  render() {
    return(
          <ul>
            {this.props.todos.map(todo => {
              return <Todo todo={todo} check={this.props.check} key={todo.id} />
            })}
          </ul>
    )
  }
}

export default TodoList