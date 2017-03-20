import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button } from './Styles'

class Lifecycle extends Component {

   constructor(props) {
      super(props);
		
      this.state = {
         data: 0
      }

      this.setNewNumber = this.setNewNumber.bind(this)
   }

   setNewNumber() {
      this.setState({data: this.state.data + 1})
   }

   doUnmount() {
       ReactDOM.unmountComponentAtNode(document.getElementById('root'))
       console.log('User clicked UNMOUNT')
   }

   render() {
      return (
         <div className="Lifecycle">
            <Button primary onClick={this.setNewNumber}>INCREMENT</Button>
            <Button onClick={this.doUnmount}>UNMOUNT</Button>
            <Content myNumber={this.state.data}></Content>
         </div>
      )
   }
}

class Content extends Component {

   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
	
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      )
   }
}

export default Lifecycle