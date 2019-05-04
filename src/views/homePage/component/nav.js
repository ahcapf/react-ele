import React, { Component } from 'react'
import { Carousel } from 'antd'

export default class Nav extends Component{
  constructor(){
    super()
  }

 onChange(a, b, c) {
    console.log(a, b, c);
  }
  render(){
    return(
      <Carousel afterChange={this.onChange}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    )
  }
}