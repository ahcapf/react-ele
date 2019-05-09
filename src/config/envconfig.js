// 全局配置

let baseUrl = ''
let imgUrl
if (process.env.NODE_ENV === 'development'){
  imgUrl = 'http://elm.cangdu.org/img/'
  baseUrl = 'http://elm.cangdu.org'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://elm.cangdu.org'
  imgUrl = 'http://elm.cangdu.org/img/'
}

export  {
  baseUrl,
  imgUrl
}

