type UserState = {
  userId: number
};

type SearchState = {
  searchQuery: string,
  tags: string[]
}

type UserAction = {
  type: string,
  payload: any
}

type SearchAction = {
  type: string,
  payload: any
};

type DispatchSearch = (args: SearchAction) => SearchAction;