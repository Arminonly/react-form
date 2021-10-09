import React, { Component } from 'react'

export default class Reservation extends Component {
  constructor(props) {
    super(props)
    this.state = {isGoing: true,numberOfGuests: 2}
    this.inputChanger = this.inputChanger.bind(this)
  }

  inputChanger(event){
      const target = event.target
      const value = target.type==='checkbox'? target.checked: target.value;
      const name = target.name;
      this.setState({[name]:value})
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Is going
            <input
              type="checkbox"
              name="isGoing"
              value={this.state.isGoing}
              onChange={this.inputChanger}
            />
          </label>
          <label>
            Number of guests
            <input
              type="number"
              name="numberOfGuests"
              value={this.state.numberOfGuests}
              onChange={this.inputChanger}
            />
          </label>
        </form>
      </div>
    )
  }
}
