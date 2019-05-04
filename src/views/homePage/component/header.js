import React, { Component } from 'react'


import {  Location, ArrowBottom, Sun } from '../../../svg/index.js'
export default class Header extends Component{
  constructor(){
    super()
    this.state={
      keyWord:['赛百味','味多美','麻辣烫','榴莲','必胜客']
    }
  }
  render(){
    return(
      <div className="header" style={{padding:'0 15px',position:'fixed',left:'0',top:'0',width:'100%'}}>
        <div className="location" style={{padding:"12px 0",fontSize:'12px',overflow:'hidden'}}>
          <div className="left" style={{float:'left'}}>
            {Location()}
            <span>静安中心</span>
            {ArrowBottom()}
          </div>
          <div className="right" style={{float:'right'}}>
            <span>16° 晴</span>
            {Sun()}
          </div>
        </div>
        <div className="search" style={{height:'30px',border:'1px solid #ccc',borderRadius:'30px',textAlign:'center',lineHeight:'30px',color:'#999',fontSize:'12px'}}>
          输入商家、商品名称
        </div>
        <ul style={{display:'flex',fontSize:'12px',color:'#ccc',padding:'10px 0'}}>
          {this.state.keyWord.map(item=>{
            return(<li key={item} style={{width:'20%',height:'20px',lineHeight:'20px',textAlign:'center'}}>
              {item}
            </li>)
          })}
        </ul>
      </div>
    )
  }
}