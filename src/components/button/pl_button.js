import React from 'react'
import PropTypes from 'prop-types'

const Button = props => <button {...props} />

Button.propTypes = {
  children: PropTypes.node,
}

Button.__props__ = {
  children: {
    type: PropTypes.node,
    // representative type of the prop
    // Used to determine what kind of input to use to dynamically change the value
    __type: 'string',
    // name of the prop
    name: 'children',
  },
}

Button.defaultProps = {
  children: null,
}

export default Button
