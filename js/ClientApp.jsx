const React = require('react')
const ReactDOM = require('react-dom')

const App = () => (
  <div className="app">
    <div className="home-info">
      <h1 className="title">SVideo</h1>
      <input type="text" placeholder="search" />
      <button className="browse-all"> or Browse All</button>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))

