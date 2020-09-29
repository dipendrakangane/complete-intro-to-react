const React = require('react')
const div = React.DOM.div
const h1 = React.DOM.h1

const MyTitle = React.createClass({
  render () {
    const style = { color: '#000'}
    return (
      <div>
        <h1 style={style}>{'New component ' + this.props.title}</h1>
      </div>
    )
  }
})

module.exports = MyTitle
