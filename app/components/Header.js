import React from 'react'
import Input from './Input'

class Header extends React.Component {
  render () {
    return (
      <div>
        <div className='navbar'>
          <h1>Find out the weather right now!</h1>
            <Input
              direction='row'
              onSubmit={function(){}}
              onUpdate={function(){}}
              zipcode={123}
            />
        </div>
      </div>
    )
  }
}

export default Header
