import { combineReducers } from "redux";
import curriculumReducer from './curriculumReducer';
import sourceReducer from './sourceReducer';
import userReducer from './userReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  user: userReducer,
  search: searchReducer,
  curriculums: curriculumReducer,
  sources: sourceReducer
});