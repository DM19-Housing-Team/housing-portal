import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import moment from 'moment'

class DatePickerComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {startDate: moment()}
    console.log(this.state)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  render() {
    return (
      <div>
        <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange} />
       </div>
    );
  }
}

export default DatePickerComponent;