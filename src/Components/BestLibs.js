import React, { Component } from 'react'
import { Wrapper } from './Styles'

var BEST_JS_LIBS = [
  { name: 'Backbone.js', url: 'http://backbonejs.org/'},
  { name: 'jQuery', url: 'http://jquery.com/'},
  { name: 'Prototype', url: 'http://www.prototypejs.org/'},
  { name: 'React', url: 'http://facebook.github.io/react/'},
  { name: 'Ember', url: 'http://emberjs.com/'},
  { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
  { name: 'Dojo', url: 'http://dojotoolkit.org/'},
  { name: 'Mootools', url: 'http://mootools.net/'},
  { name: 'Underscore', url: 'http://underscorejs.org/'},
  { name: 'Lodash', url: 'http://lodash.com/'},
  { name: 'Moment', url: 'http://momentjs.com/'},
  { name: 'Express', url: 'http://expressjs.com/'},
  { name: 'KoaJS', url: 'http://koajs.com/'},
  { name: 'Draft.js', url: 'https://draftjs.org/'}
]

class BestLibs extends Component {

    render() {
        var libs = BEST_JS_LIBS
        return (
            <div>                
                <ul>                  
                    {libs.map(lib =>
                    <Wrapper key={lib.name}>
                        {/*<li key={lib.name}>*/}
                        <a href={lib.url} target='_blank'>{lib.name}</a>
                        {/*</li>*/}
                    </Wrapper>
                    )}                    
                </ul>                
            </div>
        )
    }
}

export default BestLibs
