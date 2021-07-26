interface Source {
  id: number
  name: string,
  sourceType: string, //Enumerator required later
  link: string,
  description: string,
  tags: Array<string> //Tag Enumerator late
}

interface Curriculum {
  id: number,
  name: string,
  thumb?: string,
  sources: Array<number>, //Source ids go here
  pages: number, //TODO
  tags: Array<string>
}

type UserState = {
  userId: number
};

type CurriculumState = {
  curriculums: Curriculum[]
}

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