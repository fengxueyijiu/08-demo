import React, { PropTypes } from 'react'
import Father from './Father';
class Grap extends React.Component {
  getChildContext() {
    return {color: "purple"};
  }
  render () {
    return(
      <div>
        爷爷

        <Father />
      </div>
    )
  }
}
Grap.childContextTypes = {
  color: React.PropTypes.string
};
export default Grap;
