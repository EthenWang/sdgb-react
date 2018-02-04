import { combineReducers } from 'redux';
import { SdgbStore } from '../store';
import { PostScore } from '../reducers/PostScoreReducer';

export default combineReducers<SdgbStore>({ PostScore });