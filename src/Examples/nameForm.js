import React, { Component } from 'react'

export default class NameForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:''
    }
    this.inputChanger=this.inputChanger.bind(this)
    this.inputSubmit = this.inputSubmit.bind(this)
  }
  inputChanger(event){
    this.setState({value:event.target.value})
  }
  inputSubmit(event){
    const {value} = this.state 
    event.preventDefault();
    alert('field filled by ' + value)
  }

  render() {
    const {value} = this.state 
    return (
      <div>
        <form onSubmit={this.inputSubmit} >
          <label>
            Fill the field:
            <input type='text' autofocus="autofocus"  value={value} onChange={this.inputChanger} />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
