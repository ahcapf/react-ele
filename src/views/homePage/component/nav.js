import React, { Component } from 'react'
import { Carousel } from 'antd'

export default class Nav extends Component{
  constructor(){
    super()
    this.state={
      navList:[]
    }
  }

  getNavList(){
    fetch('https://elm.cangdu.org/v2/index_entry')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        navList:data
      })
    })
  }

  componentDidMount(){
    this.getNavList()
  }

 onChange(a, b, c) {
    console.log(a, b, c);
  }
  render(){
    return(
      <Carousel afterChange={this.onChange}>
        <div>
          <ul className="navList">
            {this.state.navList.map( (item, index)=> {
              if(index < 8){
                return (
                  <li className="navItem" key={ item.id}>
                    <img src={`https://fuss10.elemecdn.com${item.image_url}`} alt=""/>
                    <p>{item.title}</p>
                  </li>
                )
              }else{
                return null
              }
            })}
          </ul>
        </div>
        <div>
          <ul className="navList">
            {this.state.navList.map( (item, index)=> {
              if(index >= 8){
                return (
                  <li className="navItem" key={ item.id}>
                    <img src={`https://fuss10.elemecdn.com${item.image_url}`} alt=""/>
                    <p>{item.title}</p>
                  </li>
                )
              }else{
                return null
              }
            })}
          </ul>
        </div>
      </Carousel>
    )
  }
}