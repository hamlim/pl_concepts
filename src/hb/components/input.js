import React from 'react'

export default ({ value = '', onChange, label }) => (
  <label className="hb-Input">
    <input type="text" onChange={onChange} value={value} className="hb-Input-input" />
    <span className="hb-Input-label">{label}</span>
  </label>
)
