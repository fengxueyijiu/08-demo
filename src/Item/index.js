import React, { PropTypes } from 'react'
import marked from 'marked';
import hljs from 'highlight.js';
import axios from 'axios';
import Loading from '../component/Loading';
console.log(marked('I am using __markdown__.'));
class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:''
    }
  }
  componentDidMount(){
    let address=this.props.params.title;
    axios.get(`https://raw.githubusercontent.com/fengxueyijiu/08-demo/master/data/${address}.md`)
        .then(res => this.setState({data:res.data}))
        .catch(err => alert(err))
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    })
    return(
      <div className='item-wrap'>
        {this.state.data.length==0 ? <Loading /> :
        <div className='post-content' dangerouslySetInnerHTML={{__html:marked(this.state.data)}}/>}
        {/* {marked('# dddddd')} '这样写markdown是错误的'*/}
        {/* <div dangerouslySetInnerHTML={{__html:marked('# dddddd')}}/> */}

      </div>
    )
  }
}

export default Item;
