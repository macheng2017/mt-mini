import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'
import '../static/weui/weui.css'
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/index/main',
      'pages/logs/main',
      '^pages/home/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '呵呵笑很重要',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#666666',
      selectedColor: '#000000',
      borderStyle: 'white',
      backgroundColor: '#f8f9fb',
      list: [
        {
          text: '榜单',
          pagePath: 'pages/logs/main',
          iconPath: 'static/images/board.png',
          selectedIconPath: 'static/images/board-actived.png'
        },
        {
          text: '搜索',
          pagePath: 'pages/home/main',
          iconPath: 'static/images/search.png',
          selectedIconPath: 'static/images/search-actived.png'
        },
        {
          text: '我的',
          pagePath: 'pages/index/main',
          iconPath: 'static/images/profile.png',
          selectedIconPath: 'static/images/profile-actived.png'
        }
      ]
    }
  }
}
