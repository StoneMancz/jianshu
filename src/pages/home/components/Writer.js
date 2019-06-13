import React, { Component } from 'react'
import { WriterContent, WriterTile, WriterList, WriterItem, AuthorInfo, Follow } from '../style'
import { connect } from 'react-redux'
class Writer extends Component {
  render() {
    return (
      <div>
        <WriterContent>
          <WriterTile>
            <span className="author">推荐作者</span>
            <a className="page-change">换一换</a>
            <WriterList>
              {
                this.props.writerArray.map((item) => {
                  return (
                    <WriterItem key={item.get('id')}>
                      <a className="avatar">
                        <img className="avatar-img" src={item.get('avatar')} alt='' />
                      </a>
                      <AuthorInfo>
                        <a className="authorName">{item.get('authorName')}</a>
                        <p className="Introduction">{item.get('Introduction')}</p>
                      </AuthorInfo>
                      <Follow>
                        关注
                      </Follow>
                    </WriterItem>
                  )
                })
              }
            </WriterList>
          </WriterTile>
        </WriterContent>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    writerArray: state.getIn(['home', 'writerArray'])
  }
}

export default connect(mapStateToProps, null)(Writer)