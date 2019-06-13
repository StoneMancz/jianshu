import React, { Component } from 'react'
import { RecommendItem, Download, RecommendInfo, RecommendTitle, RecommendDescription, Ad } from '../style'
import { connect } from 'react-redux'
class Recommend extends Component {
  render() {
    return (
      <div>
        <RecommendItem>
          {
            this.props.recommendList.map((item) => {
              return (
                <a key={item}>
                  <img className="Banner" src={item} alt='' />
                </a>
              )
            })
          }
        </RecommendItem>
        <Download>
          <div className="downloadInfo">
            <img className="qrcode" alt='' src='//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' />
            <RecommendInfo>
              <RecommendTitle>
                下载简书手机App
              </RecommendTitle>
              <RecommendDescription>
                随时随地发现和创作内容
              </RecommendDescription>
            </RecommendInfo>
          </div>
        </Download>
        <Ad>
          <span className="ad-badge">广告</span>
        </Ad>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList'])
  }
}

export default connect(mapStateToProps, null)(Recommend)