import React from 'react'

export default ({ on, onChange, label }) => (
  <label className="hb-Toggle">
    <input checked={on} onChange={onChange} type="checkbox" className="hb-Toggle-input" />
    <span className="hb-Toggle-label">{label}</span>
  </label>
)
