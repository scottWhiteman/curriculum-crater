import { combineReducers } from "redux";
import curriculumReducer from './curriculumReducer';
import userReducer from './userReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  user: userReducer,
  search: searchReducer,
  curriculums: curriculumReducer
});