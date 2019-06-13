import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload-images.jianshu.io/upload_images/8893844-453dd08ee9bbf0cc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 2,
    title: '社会热点',
    imgUrl: '//upload-images.jianshu.io/upload_images/8893844-453dd08ee9bbf0cc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }],
  contentList: [{
    id: 1,
    title: '自媒体两年，单篇稿费过万元：我的5个终极写作思维',
    url: '//upload-images.jianshu.io/upload_images/2455690-61f4099930279e92?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    des: '最近见了很多牛人，也帮助了很多牛人解决了Ta们在新媒体上的问题，作为交换，我得到了更多方面的资源，这些资源让我的底气更强，收入更多。 往前翻两年...',
    diamond: '12.4',
    nickname: '毛毛笨蛋',
    message: '13',
    like: '46'
  }, {
    id: 2,
    title: '那些戳心的网易云音乐热评',
    url: '//upload-images.jianshu.io/upload_images/11013747-fd1d78332694dbc8.gif?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    des: '那些戳心的网易云音乐热评 1.以前挺好的 想得少 睡得早 喜欢笑 也不知怎的就 突然活得潦草了 ——《春夏秋冬的你》 2...',
    diamond: '12.2',
    nickname: '听说夏有乔木了',
    message: '13',
    like: '122'
  }, {
    id: 3,
    title: '每一首民谣，都有一个故事。',
    url: '//upload-images.jianshu.io/upload_images/15760448-83f5a2a531ce0908.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    des: '天空不再阴霾，柳枝随风摇摆我站在树下发呆，粉红色的云彩头轻轻的一抬，望见你的风采扶流苏的裙摆，脸上挂着粉黛微微的笑像小孩，站在你家门外轻轻的把门...',
    diamond: '31.5',
    nickname: '蓝楹暖',
    message: '34',
    like: '125'
  }, {
    id: 4,
    title: '谁最在乎你，发一条微信就知道了',
    url: '//upload-images.jianshu.io/upload_images/11308958-a719fdd7beff2102.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    des: '一个在乎你的人 关注你的朋友圈 置顶你的微信号 备注你的微信名 时时刻刻关注着你 再累再忙都想着你 一个人究竟在不在乎你 其实发一条微信就知道了...',
    diamond: '12.4',
    nickname: '离殇悦欣',
    message: '16',
    like: '46'
  }, {
    id: 5,
    title: '中年人真实的婚姻现状：不谈爱情，全靠良心死撑',
    url: '//upload-images.jianshu.io/upload_images/2311657-81254d277823912b?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    des: '二十年能改变什么？ 婴儿成长为大人，孩子做了父亲，爱情过度到亲情...... 二十年，改变的不只是容颜，还有感情，还有人心。 对于夫妻来说，即使...',
    diamond: '31.4',
    nickname: 'S的魔镜',
    message: '18',
    like: '203'
  }],
  recommendList: [
    "//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png",
    "//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png",
    "//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png",
    "//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
  ],
  writerArray: [
    {
      id: 1,
      avatar: '//upload.jianshu.io/users/upload_avatars/7416466/fc1a1a0d-e3c7-4bca-9720-028c5c9914f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      authorName: '老沈1',
      Introduction: '写了103.3k字 · 556喜欢'
    }, {
      id: '2',
      avatar: '//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      authorName: '茶点故事',
      Introduction: '写了370.5k字 · 10.8k喜欢'
    }, {
      id: "3",
      avatar: '//upload.jianshu.io/users/upload_avatars/1835526/83d24e1a-0a0f-43f6-8a1d-289be6101e73.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      authorName: '行距版君',
      Introduction: '写了506.3k字 · 54.1k喜欢'
    }, {
      id: 4,
      avatar: '//upload.jianshu.io/users/upload_avatars/2587459/0c7e061f-e78e-4b09-b511-340846c4ea0f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      authorName: '穿着prada挤地铁',
      Introduction: '写了360.7k字 · 4.4k喜欢'
    }, {
      id: 5,
      avatar: '//upload.jianshu.io/users/upload_avatars/8972166/2a0fb78d-6417-47cb-a57c-2ce4a7b92609.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      authorName: '冰千里',
      Introduction: '写了497.9k字 · 8.8k喜欢'
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}