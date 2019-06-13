import * as contants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = (data) => ({
  type: contants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const search_Focus = () => ({
  type: contants.SEARCH_FOCUS
})

export const search_Blur = () => ({
  type: contants.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: contants.MOUSENTER
})

export const mouseLeave = () => ({
  type: contants.MOUSELEAVE
})

export const pageChange = (page) => ({
  type: contants.PAGECHANGE,
  data: page
})

export const getList = () => {
  //redux-thunk提供可以返回一个函数
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data));
    }).catch(() => {
      console.log('error')
    })
  }
}