import React, { PropTypes } from 'react';
import BlogCard from '../component/BlogCard';
import axios from 'axios';
import Loading from '../component/Loading';
class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/fengxueyijiu/08-demo/master/data/blogCard.json?a=d')
         .then(res => this.setState({data:res.data,wait:false}))
  }
  render () {
    return(
      <div className='blog-wrap'>
        {this.state.wait ? <Loading /> :
          this.state.data.map((item,index) => <BlogCard {...item} key={index} />)
        }
      </div>
    )
  }
}

export default Blog;
