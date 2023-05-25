import React, { Component } from 'react'
import "./Box.css"

export class Box extends Component { 
  render() {
    return (
      <div className='col-lg-2 col-md-2 col-sm-2 p-0'>
      <div className="box" style={{backgroundColor:this.props.boxObj["color"]}} onClick={(e,obj) => this.props.handleClick(e,obj)}></div>
      </div>
    )
  }
}

export default Box
