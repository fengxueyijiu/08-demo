import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  handleBack(){
    this.context.router.goBack()
  }
  render () {
    // console.log(this.context.router)
    console.log(this.context.router.isActive('/work'))
    return(
      <div className='nav-header'>
        <button type="button" onClick={this.handleBack.bind(this)}>
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> BACK
        </button>
        <h3>Storm@{this.props.title}</h3>
          <button type="button" >
            <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
          </button>
      </div>
    )
  }
}
NavHeader.contextTypes={
  router:React.PropTypes.object    //
}
export default NavHeader;
