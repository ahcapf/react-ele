import React, { Component } from 'react'
import Header from './component/header.js'
import Nav from './component/nav.js'

export default class HomePage extends Component{
  constructor(){
    super()
    this.state={}
  }
  render(){
    return(
      <div style={{paddingTop:'110px'}}>
        <Header />
        <Nav />
      </div>
    )
  }
}