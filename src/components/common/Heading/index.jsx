import React from 'react'

const Heading = ({className, children}) => {
  return (
    <h2 className={`fs-2 fw-bold  ${className}`}>
        {children}
    </h2>
  )
}

export default Heading