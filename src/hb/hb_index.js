import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'

import buttonDocs from '../components/button/docs/button.config.js'

export default () => (
  <Fragment>
    <Route path={buttonDocs.route} render={buttonDocs.render} />
  </Fragment>
)
