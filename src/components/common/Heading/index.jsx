import React from 'react'

const Heading = ({className, children}) => {
  return (
    <h2 className={` main-heading ${className}`}>
        {children}
    </h2>
  )
}

export default Heading