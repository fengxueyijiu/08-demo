import React, { PropTypes } from 'react'

class Item extends React.Component {
  render () {
    console.log(this.props.params);
    let content=this.props.params.title==1 ? '这是1':
        content=this.props.params.title==2 ? '这是2':3
    return(
      <div>
        {content}
      </div>
    )
  }
}

export default Item;
