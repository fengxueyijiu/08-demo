import React from 'react';
import {Link} from 'react-router';
import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      title:'Home'
    }
  }
  componentWillMount(){
    this.setTitle()
  }
  componentWillReceiveProps(){
    this.setTitle()
  }
  setTitle(){
    this.setState({
      title:this.context.router.isActive('/',true) ? 'Home' :
            this.context.router.isActive('/blog') ? 'Blog' :
            this.context.router.isActive('/work') ? 'Work' :'About'
    })
  }
  render () {
    return(
      <div className='my-wrap'>
        <NavHeader title={this.state.title}/>
        <div className='main'>
          {this.props.children}
        </div>
        <NavFooter/>
      </div>
    )
  }
}
App.contextTypes={
  router:React.PropTypes.object    //
}
export default App;
