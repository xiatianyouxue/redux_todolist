import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom' //引入路由要用的组件
import Index from './Index' //二级路由 首页
import Video from './Video' // 二级路由 视频
import Workplace from './Workplace' //二级路由 职场
import './Router.css'

//假设是后端获取的动态路由
function AppRouter() {
  let routeConfig = [
    {path: '/', title: '博客首页', exact: true, component: Index},
    {path: '/video', title: '视频教程', exact: false, component: Video},
    {path: '/workplace', title: '职场技能', exact: false, component: Workplace},
  ]
  return (
    <Router>
      <div className='mainDiv'>
        {/* 左侧导航部分 */}
        <div className='leftNav'>
          <h3>一级导航</h3>
          <ul>
            {/* 渲染动态路由 */}
            {
              routeConfig.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        {/* 右侧显示部分 */}
        <div className='rightMain'>
          {
            routeConfig.map((item, index) => {
              return (
                <Route key={index} exact={item.exact} path={item.path} component={item.component}/>
              )
            })
          }
        </div>
      </div>
    </Router>
  )
}

export default AppRouter
