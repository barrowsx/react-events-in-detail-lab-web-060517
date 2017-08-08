import React from 'react'

export default class CoordinatesButton extends React.Component{
  constructor(props){
    super(props)
  }

  findXY = (event) => {
    let x = event.clientX
    let y = event.clientY
    let arr = [x,y]
    this.props.onReceiveCoordinates(arr)
  }

  render(){
    return (
      <button onClick={this.findXY}></button>
    )
  }
}
