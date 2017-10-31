import React from 'react'
import PropTypes from 'prop-types'

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ''
    };

    this.handleSubmitInput = this.handleSubmitInput.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  handleSubmitInput () {
    api.getCurrentWeather(this.state.zipcode)
      .then((res) => {
        comsole.log(res)
      })
  }
  handleUpdateInput (e) {
    var zip = e.target.value;
    this.setState(() => {
      return {
        zipcode : zip
      }
    });
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
