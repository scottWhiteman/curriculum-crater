import { GET_SOURCES } from '../actions/types';
import { sources } from '../dummyData';
import { tagBreak } from '../utils/searchFunctions';

const initialState:SourceState = {
  results: []
}

const sourceReducer = (state:SourceState = initialState, action:Action) => {
  switch(action.type) {
    case GET_SOURCES:
      const sourceResults = sources.filter((source:Source) => {
        return source.name.toLowerCase().includes(action.payload.searchQuery.toLowerCase());
      });
      const tags = tagBreak(action.payload.tags);
      console.log(tags);
      return {
        ...state,
        results: sourceResults
      };
    default:
      return state;
  }
}

export default sourceReducer;