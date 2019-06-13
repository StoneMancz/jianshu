import style from 'styled-components';

export const HomeWrapper = style.div`
  width:960px;
  margin:0 auto; 
  padding-top:52px;
  overflow:hidden;
`;

export const HomeLeft = style.div`
  margin-left:15px;
  padding-top:30px;
  width:625px;
  float:left;
  .banner-img{
    width:625px;
    height:270px;
  }
`;

export const HomeRight = style.div`
  width:290px;
  float:right;
`;

export const TopicWrapper = style.div`
  padding:20px 0 10px 0;
  overflow:hidden;
  margin-left:-18px;
`

export const TopicItem = style.div`
  float:left;
  background:#f7f7f7;
  height:32px;
  padding-right:10px;
  margin-left:18px;
  line-height:32px;
  font-size:14px;
  color:#000;
  border:1px solid #dcdcdc;
  margin-bottom:10px;
  border-radius:4px;
  .topic_img{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
  }
`

export const ListItem = style.div`
  width:625px;
  border-bottom: 1px solid #f0f0f0;
  overflow:hidden;
  padding: 20px 0;
  .list-img{
    display:block;
    float:right;
    width: 148px;
    height:98px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`

export const ItemInfo = style.div`
  float:left:
  width:458px;
  height:100%;
`

export const ItemTitle = style.div`
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  color:#333;
`

export const ItemDes = style.div`
  font-size: 13px;
  line-height: 24px;
  color: #999;
  margin:8px 0 0 0px;
`
export const ItemMeta = style.div`
  font-size: 12px;
  font-weight: 400;
  margin-top:18px;
  .jsd-meta{
    color:#ea6f5a;
    font-size:14px;
  }
  .nickname{
    color: #b4b4b4;
    cursor:pointer;
    margin-left:10px;
  }

  .message{
    font-size:14px;
    margin-left:10px;
    color:#b4b4b4;
  }

  .like{
    margin-left: 10px;
    color: #b4b4b4;
  }
`
export const RecommendItem = style.div`
  width:290px;
  min-height: 228px;
  padding-top:30px;
  .Banner{
    display:block;
    width:100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`
export const Download = style.div`
  width:288px;
  height:80px;
  border:1px solid #f0f0f0;
  overflow:hidden;
  .qrcode{
    float:left;
    width:60px;
    height:60px;
    opacity:0.85;
  }

  .downloadInfo{
    padding:10px 22px 10px 22px;
  }
`
export const RecommendInfo = style.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 7px;
  margin-top:10px;
`
export const RecommendTitle = style.div`
  font-size: 15px;
  color: #333;
`
export const RecommendDescription = style.div`
  font-size:13px;
  color:#999;
  margin-top:10px;
`
export const Ad = style.div`
  position:relative;
  width:300px;
  height:160px;
  margin-bottom: 20px;
  margin-top:30px;
  display: block;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  background-color: RGB(241, 243, 244);
  border-radius:4px;
  background-image: url(https://cdn2.jianshu.io/assets/ads/java-62d16127d94c8ca4c8a40ada899c97f4.png);
  .ad-badge{
    position:absolute;
    bottom:0;
    right:10px;
    color:#fff;
    background:#000;
    font-size:12px;
    line-height:20px;
    padding:0 5px 0 5px;
  }
`
export const WriterContent = style.div`
  width:300px;
  height:600px;
`
export const WriterTile = style.div`
  width:100%;
  text-align:left;
  .author{
    font-size:14px;
    color:#969696;
  }
  
  .page-change{
    float:right;
    color:#969696;
    font-size:14px;
    padding-right:10px;
  }
`

export const WriterList = style.ul`
  width:300px;
  height:295px;
`
export const WriterItem = style.li`
  width:300px;
  height:47px;
  margin-top:15px;
  .avatar{
    float:left;
    width:48px;
    height:48px;
    margin-right:10px;
  }
  .avatar-img{
    width:100%;
    height:100%;
    border-radius:50%;
  }
`

export const AuthorInfo = style.div`
  display:inline-block;
  margin-top:5px;
  .authorName{
    font-size:14px;
    padding-top:5px;
  }

  .Introduction{
    margin-top:10px;
    color:#969696;
    font-size:12px;
  }
`

export const Follow = style.a`
  float:right;
  margin-right:10px;
  font-size: 13px;
  color: #42c02e;
  margin-top:5px;
`