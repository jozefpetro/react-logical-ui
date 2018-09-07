import React from 'react'
import PropTypes from 'prop-types'

const HelloWorld = ({ fontSize }) => (
  <h1 style={{ fontSize }}>Hello world !</h1>
)

// HelloWorld.propTypes = {
//   fontSize: PropTypes.number.isRequired
// }

export default HelloWorld
