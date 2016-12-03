import React, { PropTypes } from 'react'
import marked from 'marked';
console.log(marked('I am using __markdown__.'));
class Item extends React.Component {
  render () {
    console.log(this.props.params);
    let content=this.props.params.title==1 ? '这是1':
        this.props.params.title==2 ? '这是2':3
    return(
      <div>
        {content}
        {/* {marked('# dddddd')} '这样写markdown是错误的'*/}
        <div dangerouslySetInnerHTML={{__html:marked('# dddddd')}}/>
      </div>
    )
  }
}

export default Item;
