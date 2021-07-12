const initialState: UserState = {
  userId: -1
};

const userReducer = (state = initialState, action: UserAction) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default userReducer;