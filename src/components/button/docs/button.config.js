import React from 'react'
import Button from '../pl_button.js'
import Types from '../../_config/types.js'

export default {
  route: '/button',
  props: {
    className: {
      note:
        'Any valid object, array or string that will be parsed by the classnames package and assigned to the underlying button tag',
      type: [Types.string],
    },
    children: {
      note: 'The content of the button component',
      type: [Types.string],
    },
  },
  render(routeProps) {
    return <Button>Testing</Button>
  },
}
