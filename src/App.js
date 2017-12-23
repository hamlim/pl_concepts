import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import HB from './hb/hb_index.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <HB />
          <Link to="/button">Button</Link>
        </Fragment>
      </Router>
    )
  }
}

export default App
