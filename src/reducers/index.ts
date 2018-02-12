import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { SdgbStore } from '../store';
import postScoreReducer from '../reducers/PostScoreReducer';
import ruleReducer from '../reducers/RuleReducer';

export default combineReducers<SdgbStore>({ 
  postScoreReducer, 
  ruleReducer,
  routerReducer 
});