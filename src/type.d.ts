/* Data Object Types */
interface Source {
  id: number
  name: string,
  sourceType: string, //Enumerator required later
  link: string,
  description: string,
  tags: string[]//Tag Enumerator late
}
interface Curriculum {
  id: number,
  name: string,
  thumb?: string,
  sources: number[], //Source ids go here
  pages: number, //TODO
  tags: string[]
}

/* State Types */

//Root Reducer
type ReducerState = {
  curriculums: CurriculumState,
  users: UserState,
  search: SearchState
}

//User
type UserState = {
  userId: number
};

//Curriculum
type CurriculumState = {
  results: Curriculum[]
}

//Search
type SearchState = {
  searchQuery: string,
  tags: string[]
}

//Action Type for Redux dispatching
type Action = {
  type: string,
  payload: any
}

type DispatchSearch = (args: SearchAction) => SearchAction;