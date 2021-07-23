import * as types from './types';

export function searchCurriculum(dispatch:DispatchSearch, searchData:object) {
  const action: SearchAction = {
    type: types.GET_SEARCH,
    payload: searchData
  }
  console.log('search')
  return httpRequestTest(dispatch, action);
}

export function httpRequestTest(dispatch:DispatchSearch, action: SearchAction) {
    setTimeout(() => {
      console.log('hi');
      dispatch(action);
    }, 1000);
}