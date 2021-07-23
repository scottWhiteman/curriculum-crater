import { GET_SEARCH } from '../actions/types';

const initialState: SearchState = {
  searchQuery: '',
  tags: []
}

const searchReducer = (state = initialState, action: SearchAction) => {
  switch(action.type) {
    case GET_SEARCH:
      console.log('get search');
      return state;
    default:
      return state;
  }
}

export default searchReducer;