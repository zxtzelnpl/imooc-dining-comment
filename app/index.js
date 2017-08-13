import React from 'react'
import {render} from 'react-dom'

import Perf from 'react-addons-perf'

import {Provider} from 'react-redux'
import {hashHistory,browserHistory} from 'react-router'
import configureStore from './store/configureStore'

import './static/css/common.less'
import './static/css/font.css'


if(__DEV__){
  window.Perf = Perf
}

// 创建 Redux 的 store 对象
const store = configureStore()

import RouteMap from './router/routeMap'

render(
  <Provider store={store}>
    <RouteMap history={browserHistory}/>
  </Provider>,
  document.getElementById('root')
)