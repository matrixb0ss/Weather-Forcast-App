import React from 'react'
import Header from './Header'
import Input from './Input'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <h1 className='header'>Enter a City and State</h1>
          <Input
            onSubmit={function(){}}
            zipcode={123}
          />
        </div>
      </div>
    )
  }
}

export default App
