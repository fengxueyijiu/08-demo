import React, { PropTypes } from 'react';
import BlogCard from '../component/BlogCard';
let data=[
  {index:1,title:'hello1',desc:'world1'},
  {index:2,title:'hello2',desc:'world2'},
  {index:3,title:'hello3',desc:'world3'},
  {index:4,title:'hello4',desc:'world4'},
  {index:5,title:'hello5',desc:'world5'},
  {index:6,title:'hello6',desc:'world6'}

]
class Blog extends React.Component {
  render () {
    let cards=data.map((item,index) => <BlogCard {...item} key={index} />)
    return(
      <div className='blog-wrap'>
        {cards}
      </div>
    )
  }
}

export default Blog;
