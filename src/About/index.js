import React, { PropTypes } from 'react';
import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import Loading from '../component/Loading';
import ShowGit from '../component/ShowGit';
class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      //0 没搜索  1 ，还没相应数据未接受 2，数据接受完
      wait:0
    }
  }
  handleSubmit(e){
     e.preventDefault();
     this.setState({
       wait:1
     })
     console.log(this.refs.gitname);
     let value=this.refs.gitname.getValue()
     this.refs.form.reset();
     console.log(value)
     axios.get(`https://api.github.com/users/${value}`)
          .then(res => this.setState({
            data:res.data,wait:2
          }))
          .catch(error =>{alert(error);this.setState({
            wait:0
          })})
   }
  render () {
    let showGitInfo=
      this.state.wait==0 ?null :
       this.state.wait==1 ? <Loading />:<ShowGit gitInfo={this.state.data}/>;
    return(
      <div className='about-wrap'>
        <div className='git-card'>
          <h2>Search Git Info</h2>
          <form ref='form' className='about-form' onSubmit={this.handleSubmit.bind(this)}>
            <TextField ref='gitname' hintText="github username"  underlineFocusStyle={{borderColor: blue500}} style={{width:"60%"}}/>
            <RaisedButton onClick={this.handleSubmit.bind(this)} label="search" secondary={true} style={{marginLeft:'10px'}} />
          </form>
          {showGitInfo}
        </div>
      </div>
    )
  }
}

export default About;
