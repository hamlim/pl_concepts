import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import HB from './hb/hb_index.js'

class App extends Component {
  state = {}

  handleChangeFactory = (typeOfField, name) => event => {
    let value
    if (typeOfField === 'bool') {
      value = event.target.checked
    } else if (typeOfField === 'string') {
      value = event.target.value
    }
    this.setState({ [name]: value })
  }
  render() {
    return (
      <Router>
        <Fragment>
          <HB state={this.state} handleFieldChange={this.handleChangeFactory} />
          <Link to="/button">Button</Link>
        </Fragment>
      </Router>
    )
  }
}

export default App
