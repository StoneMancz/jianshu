import * as contants from './constants'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case contants.SEARCH_FOCUS:
      return state.set('focused', true)
    case contants.SEARCH_BLUR:
      return state.set('focused', false)
    case contants.CHANGE_LIST:
      return state.set('list', action.data).set('totalPage', action.totalPage);
    case contants.MOUSENTER:
      return state.set('mouseIn', true);
    case contants.MOUSELEAVE:
      return state.set('mouseIn', false);
    case contants.PAGECHANGE:
      return state.set('page', action.data);
    default:
      return state;
  }
}