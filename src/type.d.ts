/* Data Object Types */
interface Source {
  id: number
  name: string,
  sourceType: string, //Enumerator required later
  thumb?: string,
  link: string,
  description: string,
  tags: string[]//Tag Enumerator late
}
interface Curriculum {
  id: number,
  name: string,
  thumb?: string,
  sources: number[], //Source ids go here
  tabs: Tab[], //TODO
  tags: string[]
}
interface Tab {
  name: string,
  content: string
}

/* State Types */

//Root Reducer
type ReducerState = {
  curriculums: CurriculumState,
  sources: SourceState,
  users: UserState,
  search: SearchState,
}

//User
type UserState = {
  userId: number
};

//Source
type SourceState = {
  results: Source[]
}

//Curriculum
type CurriculumState = {
  results: Curriculum[],
  selected?: Curriculum | null
}

//Search
type SearchState = {
  searchQuery: string,
  tags: string
}

//Action Type for Redux dispatching
type Action = {
  type: string,
  payload: any
}

type DispatchSearch = (args: Action) => Action;