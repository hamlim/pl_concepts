import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

export default class extends Component {
  state = {
    docs: null,
  }
  componentDidMount() {
    fetch(this.props.docs)
      .then(resp => resp.text())
      .then(text => this.setState({ docs: text }))
      .catch(console.warn)
  }
  render() {
    const { docs } = this.state

    if (!docs) {
      return 'Loading...'
    }

    return <div dangerouslySetInnerHTML={{ __html: docs }} />
  }
}
