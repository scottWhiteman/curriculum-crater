import { GET_SEARCH } from '../actions/types';
import { sources } from '../dummyData';

const initialState:SourceState = {
  results: sources
}

const sourceReducer = (state:SourceState = initialState, action:Action) => {
  console.log('Source Reducer Call');
  switch(action.type) {
    default:
      return state;
  }
}

export default sourceReducer;