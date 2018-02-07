import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { SdgbStore } from '../store';
import { postScore } from '../reducers/PostScoreReducer';

export default combineReducers<SdgbStore>({ postScore, routerReducer });