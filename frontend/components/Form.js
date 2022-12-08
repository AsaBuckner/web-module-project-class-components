import React from 'react'


class Form extends React.Component {
constructor() {
  super()
  this.state = {
    input: ""
  }
}
  handlesubmit = (evt) => {
    evt.preventDefault()
    this.props.add(this.state.input)
    this.setState({
      ...this.state,
      input: "" 
    })

  }



  handleChange = (evt) => {
    this.setState({
      ...this.state,
      input: evt.target.value
    })

  }

  render() {
    return( 
      <div>
          <form>
          <input
          onChange={this.handleChange} 
          value={this.state.input}
          />
          <button onClick={this.handlesubmit}>Add</button>
          </form>
      </div>
    )
  }

}

  export default Form 