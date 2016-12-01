import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
class ShowGit extends React.Component {
  render () {
    let info=this.props.gitInfo;
    console.log(this.props.gitInfo);
    let styles={
      img:{
        width:'100%',
        maxWidth:'130px',
        borderRadius:'50%',
        boxShadow: "rgba(0, 0, 0, 0.247059) 0px 8px 12px"
      }
    }
    return(
      <div>
        <img src={info.avatar_url} style={styles.img}></img>
        <h3>
          {info.login}
        </h3>
        <div className='show-git'>
          <p>followers <br/>{info.followers+100}</p>
          <p>following <br/>{info.following+100}</p>
          <p >public_repos<br/>{info.public_repos+100}</p>
        </div>
      </div>
    )
  }
}

export default ShowGit;

// avatar_url
// :
// "https://avatars.githubusercontent.com/u/21274044?v=3"
// bio
// :
// "微信：13933672683
// ↵手机号：13933672683"
// blog
// :
// "fengxueyijiu.github.io"
// company
// :
// null
// created_at
// :
// "2016-08-27T06:15:24Z"
// email
// :
// "473952802@qq.com"
// events_url
// :
// "https://api.github.com/users/fengxueyijiu/events{/privacy}"
// followers
// :
// 3
// followers_url
// :
// "https://api.github.com/users/fengxueyijiu/followers"
// following
// :
// 17
// following_url
// :
// "https://api.github.com/users/fengxueyijiu/following{/other_user}"
// gists_url
// :
// "https://api.github.com/users/fengxueyijiu/gists{/gist_id}"
// gravatar_id
// :
// ""
// hireable
// :
// null
// html_url
// :
// "https://github.com/fengxueyijiu"
// id
// :
// 21274044
// location
// :
// "秦皇岛"
// login
// :
// "fengxueyijiu"
// name
// :
// "吴建波"
// organizations_url
// :
// "https://api.github.com/users/fengxueyijiu/orgs"
// public_gists
// :
// 0
// public_repos
// :
// 16
// received_events_url
// :
// "https://api.github.com/users/fengxueyijiu/received_events"
// repos_url
// :
// "https://api.github.com/users/fengxueyijiu/repos"
// site_admin
// :
// false
// starred_url
// :
// "https://api.github.com/users/fengxueyijiu/starred{/owner}{/repo}"
// subscriptions_url
// :
// "https://api.github.com/users/fengxueyijiu/subscriptions"
// type
// :
// "User"
// updated_at
// :
// "2016-11-30T02:18:43Z"
// url
// :
// "https://api.github.com/users/fengxueyijiu"
