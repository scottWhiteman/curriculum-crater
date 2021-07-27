import * as types from './types';

export function searchCurriculum(searchData:SearchState) {
  const action: Action = {
    type: types.GET_SEARCH,
    payload: searchData
  }
  console.log('search')
  return httpRequestTest(action);
}

export function httpRequestTest(action: Action) {
  return (dispatch:DispatchSearch) => {
    setTimeout(() => {
      console.log('hi');
      dispatch(action);
    }, 1000);
  }
}