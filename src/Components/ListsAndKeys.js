import React, { Component } from 'react'
import { Breadcrumb } from './Styles'

function ListItem(props) {
  return <Breadcrumb>{props.value}</Breadcrumb>; 
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

class ListsAndKeys extends Component {  
    render() {
        return (
          <NumberList numbers={numbers} />  
        )
    }
}

export default ListsAndKeys

// Functional Component refactored into a class component 
/*function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />
  )
  return (
    <ul>
      {listItems}
    </ul>
  )
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
)*/
