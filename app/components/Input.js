import React from 'react'
import PropTypes from 'prop-types'

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //zipcode: 90210
    };
  }
  handleSubmitInput () {

  }
  handleUpdateInput () {

  }

  render() {
    return (
      <div
         className='input-container'
         style={{flexDirection: this.props.direction}}
      >
        <input
          className='form-control'
          onChange={this.handleUpdateInput}
          placeholder='Lviv, realm t164'
          type='text'
          autoComplete='off'
          value={this.state.zipcode}
        />
        <button
          className='btn btn-success'
          type='button'
          onClick={this.handleSubmitInput}
        >
          Get Weather
        </button>
      </div>
    )
  }
}

Input.defaultProps = {
    direction: 'column'
}
Input.propTypes = {
  direction: PropTypes.string
}

export default Input
