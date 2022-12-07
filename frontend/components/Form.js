import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
      this.state = {}
    }

    submitFunction = props => {
      console.log(submit)
     }
     
     clearFunction = props => {
       console.log(clear)
     }


  render(){
    return (
      <div>
        <input
        placeholder='New Todo'
        name='todoInput'
        />
        <button onClick={this.submitFunction}>Add Todo</button>
        <button onClick={this.clearFunction}>Clear Completed</button>
      </div>
    )
  }
}
  export default Form 