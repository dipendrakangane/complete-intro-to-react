var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var myFirstComponent = (
  div(null,
    // h1(null, 'React component')
    MyTitleFact({ title: 'A' }),
    React.createElement(MyTitle, { title: 'B' }),
    React.createElement(MyTitle, { title: 'C' }),
    ce(MyTitle, { title: 'D' })
  )
)

ReactDOM.render(myFirstComponent, document.getElementById('app'))
