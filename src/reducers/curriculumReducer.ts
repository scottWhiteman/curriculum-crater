import * as types from '../actions/types';
import { GET_CURRICULUMS } from '../actions/types';
import { curriculums } from '../dummyData';

const initialState = {
  results: [],
  // selected: null
}

const curriculumReducer = (state: CurriculumState = initialState, action: Action): CurriculumState => {
  switch(action.type) {
    case GET_CURRICULUMS:
      const curriculumResults = curriculums.filter((c:Curriculum) => {
        return c.name.toLowerCase().includes(action.payload.searchQuery.toLowerCase());
      });
      return {
        ...state,
        results: curriculumResults
      }
    // case SELECT_CURRICULUM:
    //   return {
    //     ...state,
    //     selected: action.payload
    //   }
    default:
      return state;
  }
}

export default curriculumReducer;