import React from 'react'
import { Component } from 'react'

const SimplerComponent = ({ handleClick }) => {
  return (
    <div onClick={handleClick}>I am just happy</div>
  )
}

export default SimplerComponent;
