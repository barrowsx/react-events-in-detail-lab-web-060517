import React from 'react'

export default class DelayedButton extends React.Component{
  delay = (event) => {
    setTimeout(() => {
      this.props.onDelayedClick(event)
      event.persist()
    }, this.props.delay)
  }

  render(){
    return (
      <button onClick={this.delay}></button>
    )
  }
}
