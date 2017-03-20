import React, { Component } from 'react'
import uuid from 'uuid'
import $ from 'jquery'
import ActionLink from './Components/Events'
import Toggle from './Components/Toggle'
import Clock from './Components/Clock'
import LoginControl from './Components/LoginControl'
import Page from './Components/WarningBanner'
import Lifecycle from './Components/Lifecycle'
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import ListsAndKeys from './Components/ListsAndKeys'
import NameForm from './Components/NameForm'
import BestLibs from './Components/BestLibs'
import Geolocation from './Components/Geolocation'

import './App.css'
// Trying out styled-components instead of global CSS rules or inline component styles
import { Wrapper, WarningTitle } from './Components/Styles'

/*eslint-disable */
import Todos from './Components/Todos'
/*eslint-enable */


// The only place where you can assign this.state is the constructor.
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      todos: []
    }
  }

// Helper method to get fake JSON todo data from https://jsonplaceholder.typicode.com
  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({todos: data}, function() {        

        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err)
      }
    })
  }

  getProjects() {
      this.setState({projects: [
      {
          id:uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id:uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id:uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
    ]})
  }

  componentWillMount() {    
    this.getProjects()
    this.getTodos()
  }

componentDidMount() {
  this.getTodos()
}


  handleAddProject(project) {
    let projects = this.state.projects
    projects.push(project)
    this.setState({projects:projects})
    // console.log(project)
  }

  handleDeleteProject(id) {
    let projects = this.state.projects
    let index = projects.findIndex(x => x.id === id)
    projects.splice(index, 1)
    this.setState({projects:projects})
  }

  render() {
    return (
      <div className="App">
        <WarningTitle>
          <Page />
        </WarningTitle>
        <BestLibs />
        <ListsAndKeys />
        The time is: <Clock />
        Your location is: <Geolocation />
        <NameForm /><br />
        <Wrapper>
          <ActionLink /><br />
        </Wrapper>
        <Toggle />
        <LoginControl />
        <Lifecycle />
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <hr />
        {/*<Todos todos={this.state.todos} />*/}
      </div>
    );
  }
}

export default App
