const initialState: SearchState = {
  searchQuery: '',
  tags: []
}

const searchReducer = (state = initialState, action: SearchAction) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default searchReducer;