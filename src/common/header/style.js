import styled from 'styled-components';
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  height:56px;
  background-color:#fff;
  border-bottom:1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({
  href: '/'
})`
  position:absolute;
  top:0;
  left:40px;
  display:block;
  height:56px;
  width:100px;
  border-bottom:1px solid #f0f0f0;
  background:url(${logoPic});
  background-size:contain;
`;

export const Nav = styled.div`
  width:960px;
  padding-right:70px;
  box-sizing:border-box;
  margin:0 auto;
  height:100%;
`;

export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696
  }
  &.active{
    color:#ea6f5a
  }
  .iconfont{
    margin-right:4px;
    font-size:22px;
    color: #ea6f5a;
  }
`;
//padding的样式上，右，下，左
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width:160px;
  height:38px;
  border:none;
  outline:none;
  font-size:14px;
  margin-left:20px;
  box-sizing:border-box;
  border-radius:19px;
  background:#eee;
  margin-top:9px;
  padding:0 30px 0 20px;
  color:#666;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:240px;
  }
`;

export const SearchWrapper = styled.div`
  position:relative;
  float:left;
  .slide-enter{
    transition:all 0.2s ease-out;
  }

  .slide-enter-active{
    width:240px;
  }

  .slide-exit{
    transition:all 0.2s ease-out;
  }

  .slide-exit-active{
    width:160px;
  }

  .iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    text-align:center;
    border-radius:15px;
    &.focused{
      background:#777;
      color:#fff;
    }
  } 
`
export const SearchInfo = styled.div`
  position:absolute;
  left:0;
  top:56px;
  width:240px;
  padding:0 20px;
  box-shadow:0 0 8px rgba(0,0,0,0.2);
  background:white;
`

export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-size:14px;
  font-size:14px;
  color:#969696;
`
export const SearchInfoSwitch = styled.div`
  float:right;
  font-size:13px;
`

export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  line-height:20px;
  padding:0 5px;
  margin-top:5px;
  margin-right:10px;
  margin-bottom:15px;
  font-size:12px;
  border:1px solid #ddd;
  color:#787878;
  border-radius:3px;
`

export const SeachInfoList = styled.div`
  overflow:hidden;
`;

export const Addition = styled.div`
  position:absolute;
  right:0;
  top:10px;
  height:56px;
`;

export const Button = styled.div`
  float:right;
  line-height:38px;
  margin-right:20px;
  padding:0 20px;
  border-radius:19px;
  border:1px solid #ec6149;
  font-size:14px;
  &.reg{
    color:#ec6149;
  }
  &.writting{
    color:#fff;
    background:#ec6149;
  }
`;