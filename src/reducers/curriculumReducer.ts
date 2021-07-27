import * as types from '../actions/types';
import { curriculums } from '../dummyData';

const initialState = {
  results: curriculums
}

const curriculumReducer = (state: CurriculumState = initialState, action: Action): CurriculumState => {
  console.log('curriciulum Reducer call');
  switch(action.type) {
    default:
      return state;
  }
}

export default curriculumReducer;