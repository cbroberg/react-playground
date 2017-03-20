import React, { Component } from 'react'
import uuid from 'uuid'

// This component is stateful
class AddProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newProject: {}
    }
  }
    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    }
    
    handleSubmit(event) {
        if (this.refs.title.value === '') {
            alert('Title is required')
            console.log(this.refs.title.value)            
        } else {
          this.setState({newProject: {
            id: uuid.v4(),
            title: this.refs.title.value, 
            category: this.refs.category.value
          }}, function() { 
            // console.log(this.state)
            this.props.addProject(this.state.newProject)
          })  
        }
        event.preventDefault()
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        })
        return (
        <div className="AddProject">
            <h3>Add Project</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Title</label><br />
                    <input type="text" ref="title" />                    
                </div>
                <div>
                    <label>Category</label><br />
                    <select ref="category">
                    {categoryOptions}
                    </select>
                </div>
                <br />
                <input type="submit" value="Submit" />                
            </form>
        </div>
        )
    }
}

//  Typechecking with PropTypes
AddProject.propTypes = {
  categories: React.PropTypes.array,
  addProject: React.PropTypes.func
}

export default AddProject