import React, { Fragment } from 'react'

import ButtonDocs from '../components/button/docs/button_docs.js'

export default props => (
  <Fragment>
    <nav>
      <ul>
        <li>Button</li>
        <li>
          <ul>
            <ButtonDocs.Links />
          </ul>
        </li>
      </ul>
    </nav>
    <ButtonDocs.Component />
  </Fragment>
)
