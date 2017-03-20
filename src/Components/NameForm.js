import React, { Component } from 'react'
import { InputWrapper } from './Styles'

// With a controlled component, every state mutation will have an associated handler function. 
// This makes it straightforward to modify or validate user input.

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

//  Handler function (class method)
  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()})    
  }

//  Handler function (class method)
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
    // Clear the form element with setState
    // this.setState({value: ''})
    this.setState((prevState, props) => ({value: ''}))
  }

// Don’t do this
// this.setState(isReady: true)

// Do this
// this.setState((prevState, props) => ({value: ''}))

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <InputWrapper type="text" value={this.state.value} onChange={this.handleChange}>
          {/*<input type="text" value={this.state.value} onChange={this.handleChange} />*/}
          </InputWrapper>
          {/*<textarea value={this.state.value} onChange={this.handleChange} />*/}
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default NameForm
