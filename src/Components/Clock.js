import React, { Component } from 'react'

// The FormattedDate component receives the date in its props from the 
// Clock components this.state.date. This is commonly called a "top-down" or "unidirectional" data flow

function FormattedDate(props) {
  return <div>{props.date.toLocaleTimeString()}</div>
}

// The only place where you can assign this.state is the constructor. Typically setting/initializing default values
class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }
  
// The componentDidMount() hook runs after the component output has been rendered to the DOM. 
// This is a good place to set up a timer
    componentDidMount() {
      this.timerID = setInterval(
      () => this.tick(),
      1000
      )
    }

    componentWillUnmount() {
      clearInterval(this.timerID)
    }
    
    tick() {
        this.setState({
        date: new Date()
    })
    }

  render() {
    return (
      <div>
        <FormattedDate date={this.state.date} />
      </div>
    )
  }
}

export default Clock
