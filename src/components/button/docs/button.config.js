import React, { Fragment } from 'react'
import Button from '../pl_button.js'
import Types from '../../_config/types.js'

import * as HBComponents from '../../../hb/components/index.js'

const props = {
  className: {
    name: 'className',
    note:
      'Any valid object, array or string that will be parsed by the classnames package and assigned to the underlying button tag',
    type: [Types.string],
  },
  children: {
    name: 'Children',
    note: 'The content of the button component',
    type: [Types.string],
  },
}

const generateJSX = values => {
  return `
<Button
  children={${values.Children}}
  className={${values.className}}
/>
  `
}

export default {
  route: '/button',
  props,
  render({ state, handleFieldChange }) {
    return routeProps => (
      <Fragment>
        <Button>{state.Children}</Button>

        <hr />

        <h4>props:</h4>
        {Object.keys(props)
          .map(k => props[k])
          .map(prop => (
            <Fragment>
              <br />
              {prop.note}
              <br />
              {prop.type[0].render(
                HBComponents,
                handleFieldChange(prop.type[0].__type, prop.name),
                state[prop.name],
                prop.name,
              )}
              <br />
            </Fragment>
          ))}

        <pre>
          <code>{generateJSX(state)}</code>
        </pre>
      </Fragment>
    )
  },
}
