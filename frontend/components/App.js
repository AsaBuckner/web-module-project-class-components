import React from 'react'
import TodoList from "./TodoList"
import Form from "./Form"




export default class App extends React.Component {
  constructor() {
    super()
      this.state = {
        todos:[
          {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
          },
          {
          name: 'Suck Dick',
          id: 15288170858,
          completed: false
          },
          {
          name: 'Eat Ass',
          id: 15288170843,
          completed: true
          }
        ]
      }
  }

handleadd = (name) => {

  const newTodo = {
    name: name,
    id: Date.now(),
    completed: false
  }

  this.setState({
    ...this.state,
    todos: [...this.state.todos, newTodo]
  })
}

 handletoggle = (clickedId) => {
  this.setState({
    ...this.state,
    todos: this.state.todos.map(todo => {
      if(todo.id === clickedId){
        return (
          {...todo,
          completed: !todo.completed}
        )
      }
      return todo
    })
  })
 }

 handleClear = () => {
  //What needs to be done 
  //1. setState
  //2. loop through all todos
  //3.remove all todos that are completed = true
  //4/ saave filtered todos to state
  this.setState({
    ...this.state,
    todos: this.state.todos.filter(todo => {
      return todo.completed === false
      
    })
  })
}


render() {
  
  const {todos} = this.state

    return (
      <div>

            <TodoList todos={todos} check={this.handletoggle}/>

            <Form add={this.handleadd} />

            <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
