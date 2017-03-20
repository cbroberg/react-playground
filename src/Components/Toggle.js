import React from 'react'
import { Button } from './Styles'

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback unless property initializers are used
    // this.handleClick = this.handleClick.bind(this)
  }

// New handleClick method 
// If calling bind annoys you, there are two ways you can get around this. 
// If you are using the experimental property initializer syntax, you can use 
// property initializers to correctly bind callbacks
// This syntax ensures `this` is bound within handleClick.
// Warning: this is *experimental* syntax.
handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
    console.log('this is:', this) // logs Toggle
  }

// Old handleClick method 
//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }))
//   }

  render() {
    return (
      <Button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </Button>
    );
  }
}

export default Toggle
