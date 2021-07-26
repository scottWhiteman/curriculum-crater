import * as types from './types';

export function searchCurriculum(searchData:object) {
  const action: SearchAction = {
    type: types.GET_SEARCH,
    payload: searchData
  }
  console.log('search')
  return httpRequestTest(action);
}

export function httpRequestTest(action: SearchAction) {
  return (dispatch:DispatchSearch) => {
    setTimeout(() => {
      console.log('hi');
      dispatch(action);
    }, 1000);
  }
}