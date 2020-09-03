import React from 'react'

export default function Rate (props) {
  return (
    <div style={{ display: 'flex' }}>
      {[...Array(5)].map((e, i) => <div
        key={`star_${i}`}
        style={{
          width: '25px',
          height: '25px',
          border: '1px solid #ccc',
          marginRight: '10px',
          background: props.rating >= i + 1 ? 'yellow' : '' }}>
      </div>)}
    </div>
  )
}
