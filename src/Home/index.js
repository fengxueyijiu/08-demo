import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
    return(
      <div className='home-wrap'>
        <div className='home-cover'>
          <div className='home-item'>
            <h3>
              HI, I am Strom
            </h3>
            <p>
              WEB DEVELOPER
            </p>
            <button type="button" className="btn btn-danger">
              <a href='https://fengxueyijiu.github.io/myidoc/'>HIRE ME</a>
            </button>
          </div>

        </div>
      </div>
    )
  }
}

export default Home;
