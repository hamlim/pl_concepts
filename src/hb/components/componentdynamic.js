import React, { Component, Fragment } from 'react'

import { Toggle, Input } from './index.js'

class Dynamic extends Component {
  state = {}
  handleChangeFactory = (type, name) => event => {
    switch (type) {
      case 'string':
        this.setState({ [name]: event.target.value })
        break
      case 'bool':
        this.setState({ [name]: event.target.checked })
        break
    }
  }

  render() {
    const { component, render } = this.props
    const { __props__ } = component
    if (typeof __props__ === 'undefined') {
      return null
    }
    return (
      <Fragment>
        {Object.keys(__props__)
          .map(k => __props__[k])
          .map(propType => {
            switch (propType.__type) {
              case 'string':
                return (
                  <Fragment>
                    <Input
                      value={this.state[propType.name] || ''}
                      onChange={this.handleChangeFactory('string', propType.name)}
                      label={propType.name}
                    />
                    <br />
                  </Fragment>
                )
              case 'bool':
                return (
                  <Fragment>
                    <Toggle
                      on={this.state[propType.name] || false}
                      onChange={this.handleChangeFactory('bool', propType.name)}
                      label={propType.name}
                    />
                    <br />
                  </Fragment>
                )
            }
          })}
        <br />
        {render(this.state)}
      </Fragment>
    )
  }
}

export default Dynamic
