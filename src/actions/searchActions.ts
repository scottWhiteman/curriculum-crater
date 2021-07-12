import * as types from './types';

export function searchCurriculum() {

}

export function httpRequestTest(action: SearchAction) {
  return (dispatch: DispatchSearch) => {
    setTimeout(() => {
      dispatch(action);
    }, 1000);
  }
}