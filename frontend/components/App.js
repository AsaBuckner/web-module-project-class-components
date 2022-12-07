import React from 'react'
import Form from "./Form"
import Todo from "./Todo"
import TodoList from "./TodoList"

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
          id: 1528817084358,
          completed: false
          },
          {
          name: 'Eat Ass',
          id: 1528817084358,
          completed: true
          }
        ]
      }
  }


 

render() {
  
  const {todos} = this.state




    return (
      <div>
          <ui>
            {todos.map(todo => {
              return <li>{todo.name} { todo.completed ? <span>Comleted</span>: "" }</li>
            })}
          </ui>
      </div>
    )
  }
}
