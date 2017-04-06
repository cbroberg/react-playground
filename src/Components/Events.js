import React from 'react'

const url = 'http://www.webhouse.dk/' 
// The URL is never reached because the handleClick method 
// takes care of the click

// Functional stateless component
function ActionLink() {
  function handleClick(e) {
    e.preventDefault()
    console.log('The link was clicked', url)
  }

  return (
    <a href={url} onClick={handleClick}>
      Click me
    </a>
  );
}

export default ActionLink
