import React, { Component } from 'react'
import Header from './component/header.js'
import Nav from './component/nav.js'
import Business from './component/business.js'
import '../../style/homePage.css'

export default class HomePage extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div style={{ paddingTop: '110px' }}>
        <Header />
        <Nav />
        <Business />
      </div>
    )
  }
}
