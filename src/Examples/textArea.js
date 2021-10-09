import React, { Component } from 'react'

export default class TextArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.',
    }
    this.textAreaChanger = this.textAreaChanger.bind(this)
    this.textAreaSubmit = this.textAreaSubmit.bind(this)
  }
  textAreaChanger(event) {
    this.setState({ value: event.target.value })
  }

  textAreaSubmit(event) {
    event.preventDefault()
    alert('Сочинение отправлено: ' + this.state.value)
  }

  render() {
    const { value } = this.state
    return (
      <div>
     
        <form onSubmit={this.textAreaSubmit}>
          <label>
          Сочинение:
            <textarea value={value} onChange={this.textAreaChanger} />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
