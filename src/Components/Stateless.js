import React, { PureComponent } from 'react'

export class HelloWorld1 extends PureComponent {
    constructor(props) {
        super(props)
        this.sayHi = this.sayHi.bind(this)        
    }

sayHi(event) {
    alert(`Hi ${this.props.name}`)
}

    render() {
        const t = this.sayHi
        return (
            <div>
                <a href="#" onClick={t}>Class Pure Component - Say Hi</a>
            </div>
        )
    }
}

export const HelloWorld2 = ({name}) => {
    const sayHi = (event) => {
        alert(`Hi ${name}`)        
    }
    return (
            <div>
                <a href="#" onClick={sayHi}>Stateless Functional Component - Say Hi</a>
            </div>
        )
}

HelloWorld1.propTypes = {
    name: React.PropTypes.string.isRequired
}

HelloWorld2.propTypes = {
    name: React.PropTypes.string.isRequired
}