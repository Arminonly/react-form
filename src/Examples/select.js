import React, { Component } from 'react'

export default class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'lime',
    }
    this.selectChanger = this.selectChanger.bind(this)
    this.selectSubmit = this.selectSubmit.bind(this)
  }
  selectChanger(event){
      this.setState({value:event.target.value})
  }
  selectSubmit(event){
      event.preventDefault();
      alert('your favourite taste is: ' + this.state.value)
  }
  render() {
      const {value} = this.state 
    return (
      <div>
        <form onSubmit={this.selectSubmit}>
          <label>
            Choose your favourite taste
            <select value={value} onChange={this.selectChanger}>
              <option value="apple">Apple</option>
              <option value="kiwi">Kiwi</option>
              <option value="orange">Orange</option>
              <option value="lime">Lime</option>
            </select>
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
