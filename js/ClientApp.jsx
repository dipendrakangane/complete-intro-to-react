var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var MyFirstComponent = () => (
  <div>
    <MyTitle title="A"/>
    <MyTitle title="B"/>
    <MyTitle title="C"/>
    <MyTitle title="D"/>
  </div>
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
