import React, { Component } from 'react'
import { ListItem, ItemInfo, ItemTitle, ItemDes, ItemMeta } from '../style'
import { connect } from 'react-redux'
class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.contentList.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img className="list-img" src={item.get('url')} alt='' />
                <ItemInfo>
                  <ItemTitle>{item.get('title')}</ItemTitle>
                  <ItemDes>{item.get('des')}</ItemDes>
                  <ItemMeta>
                    <span className="jsd-meta">
                      <i className='iconfont diamond'>&#xe609;</i>
                      {item.get('diamond')}
                    </span>
                    <a className="nickname">
                      {item.get('nickname')}
                    </a>
                    <span className="message">
                      <i className='iconfont'>&#xe630;</i>
                      {item.get('message')}
                    </span>
                    <span className="like">
                      <i className='iconfont'>&#xe633;</i>
                      {item.get('like')}
                    </span>
                  </ItemMeta>
                </ItemInfo>
              </ListItem>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contentList: state.getIn(['home', 'contentList'])
  }
}

export default connect(mapStateToProps, null)(List)