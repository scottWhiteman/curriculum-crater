import { GET_SOURCES } from '../actions/types';

const initialState: SearchState = {
  searchQuery: '',
  tags: ''
}

const searchReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case GET_SOURCES:
      return state;
    default:
      return state;
  }
}

export default searchReducer;