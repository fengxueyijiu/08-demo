import React, { PropTypes } from 'react'

class Son extends React.Component {
  render () {
    return(
      <div style={{color: this.context.color}}>
        儿子

      </div>
    )
  }
}
Son.contextTypes = {
  color: React.PropTypes.string
};
export default Son;
