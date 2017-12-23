import React from 'react'

const array = {
  __type: 'array',
}

const string = {
  __type: 'string',
  render({ Input }, onChange, state, ...rest) {
    return <Input onChange={onChange} value={state} label={rest.label} />
  },
}

const bool = {
  __type: 'bool',
  render({ Toggle }, onChange, state, ...rest) {
    return <Toggle onChange={onChange} on={state} label={rest.label} />
  },
}

const func = {
  __type: 'function',
}

const object = {
  __type: 'object',
}

export default {
  array,
  object,
  bool,
  func,
  string,
}
