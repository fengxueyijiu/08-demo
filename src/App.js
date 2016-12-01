import React from 'react';
import {Link} from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      title:'Home'
    }
  }
  getChildContext(){
    return {muiTheme:getMuiTheme()}
  }
  componentWillMount(){
    this.setTitle()
  }
  componentWillReceiveProps(){
    this.setTitle()
  }
  setTitle(){
    this.setState({
      title:this.props.router.isActive('/',true) ? 'Home' :
            this.props.router.isActive('/blog') ? 'Blog' :
            this.props.router.isActive('/work') ? 'Work' :'About'
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
App.childContextTypes={
  muiTheme:React.PropTypes.object
}
export default App;
