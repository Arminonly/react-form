import React, { Component } from 'react'

export default class UnManagedComponent extends Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()

    this.formSubmit = this.formSubmit.bind(this)
  }

  formSubmit(event) {
    event.preventDefault()
    alert('Name is ' + this.input.current.value)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <label>
            Name:
            <input type="text" ref={this.input} />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
