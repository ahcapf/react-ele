import React, { Component } from 'react'
import { Rate } from 'antd'

export default class Business extends Component {
  constructor() {
    super()
    this.state={
      shopList:[]
    }
    this.getGeolocation = this.getGeolocation.bind(this)
    this.getShop = this.getShop.bind(this)
  }

  // 获取经纬度
  getGeolocation(){
    fetch('https://elm.cangdu.org/v1/cities?type=guess')
    .then(res => res.json())
    .then(data => {
      const position = {
        latitude:data.latitude,
        longitude:data.longitude
      }
      this.getShop(position)
    })
  }

  // 获取商铺列表
  getShop(position){
    fetch(`https://elm.cangdu.org/shopping/restaurants?latitude=${position.latitude}&longitude=${position.longitude}`)
    .then(res => res.json())
    .then(data => {
      console.log("商家列表", data)
      this.setState({
        shopList:data
      })
    })
  }
  
  componentDidMount(){
    this.getGeolocation()
  }
  render() {
    return (
      <div className="business">
        <div className="title">推荐商家</div>
        {/* 主体 */}
        <div className="wrapper" >
          {this.state.shopList.map(item => {
            return(
              <div className="businessItem" key={item.id}>
                <img className="businessPic" src={`http://elm.cangdu.org/img/${item.image_path}`} alt="" />
                <div className="businessItemInfo" >
                  <div className="shopTitle">
                    <span className="shopIcon">品牌</span>
                    <span>{item.name}</span>
                  </div>
                  <div>
                    <Rate disabled defaultValue={2} />
                    <span className="score">4.8</span>
                    <span>月售1319单</span>
                  </div>
                  <div>
                    ￥{item.float_minimum_order_amount}起送&nbsp;|&nbsp;{item.piecewise_agent_fee.tips}
                  </div>
                </div>
              </div>
            )
          })}
          
        </div>
      </div>
    )
  }
}
