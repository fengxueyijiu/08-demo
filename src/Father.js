import React, { PropTypes } from 'react'
import Son from './Son'
class Father extends React.Component {
  render () {
    return(
      <div>
        爸爸
        <Son />
      </div>
    )
  }
}

export default Father;
