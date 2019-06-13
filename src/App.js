import React, { Component } from 'react';
import Header from './common/header/'
import { GlobalStyle } from './style'
import { FontGlobalStyle } from './statics/iconfont/iconfont'
import store from './store/index'
import { Provider } from 'react-redux';
import Home from './pages/home/index'
import Detail from './pages/detail/index'
//引用路由
import { BrowserRouter, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <FontGlobalStyle />
        <Provider store={store}>
          <Header />
          <BrowserRouter>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;