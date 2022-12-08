import React from 'react'


class Todo extends React.Component {
  handleclick= () => {
      this.props.check(this.props.todo.id)
  }
  render() {
    return(
      <li onClick={this.handleclick}>{this.props.todo.name} { this.props.todo.completed ? <span>Completed</span>: "" }</li>
    )
  }
}


export default Todo