import React from 'react'

function Header({ color, children }) {
  return (
    <div style={{
      boxSizing: 'border-box',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      padding: '1em',
      height: "50px",
      backgroundColor: color,
      color: '#fff',
    }}>
      <h1>{children}</h1>
    </div>
  )
}

export default Header;