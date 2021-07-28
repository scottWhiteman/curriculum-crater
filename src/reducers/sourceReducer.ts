import { GET_SEARCH } from '../actions/types';
import { sources } from '../dummyData';

const initialState:SourceState = {
  results: sources
}

const sourceReducer = (state:SourceState = initialState, action:Action) => {
  switch(action.type) {
    case GET_SEARCH:
      return state;
    default:
      return state;
  }
}

export default sourceReducer;