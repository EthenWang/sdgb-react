import { SdgbStore, initState, PlayerState, TeamState } from '../store';
import * as _ from 'lodash';
import * as PostScoreActions from '../actions/PostScoreActions';

export default function postScore(state: SdgbStore = initState, action: PostScoreActions.PostScoreAction) {
  switch (action.type) {
    case PostScoreActions.POST_SCORE_SELECT_TEAM:
      {
        const selectAction = action as PostScoreActions.SelectTeamAction;
        const payload = selectAction.payload;
        if (payload) {
          let scoreItems = {...state.scoreItems};
          scoreItems[payload.index].team = _.find(state.teams, t => t.id === payload.teamId) || {} as TeamState;
          scoreItems[payload.index].playerList = _.filter(state.players, p => p.teamId === payload.teamId);
          return {
            ...state,
            scoreItems 
          };
        }    
        return {...state};
      }     
    case PostScoreActions.POST_SCORE_SELECT_PLAYER:
      {
        const selectAction = action as PostScoreActions.SelectPlayerAction;
        const payload = selectAction.payload;
        if (payload) {
          let scoreItems = {...state.scoreItems};
          scoreItems[payload.index].player = _.find(state.players, p => p.id === payload.playerId) || {} as PlayerState;
          return {
            ...state,
            scoreItems 
          };
        }    
        return {...state};
      }    
    case PostScoreActions.POST_SCORE_CHANGE_SCORE:
      {
        const selectAction = action as PostScoreActions.ChangeScoreAction;
        const payload = selectAction.payload;
        if (payload) {
          let scoreItems = {...state.scoreItems};
          scoreItems[payload.index].score = payload.score;
          return {
            ...state,
            scoreItems 
          };
        }    
        return {...state};
      }    
    case PostScoreActions.POST_SCORE_SELECT_BREAK:
      {
        const selectAction = action as PostScoreActions.SelectBreakAction;
        const payload = selectAction.payload;
        if (payload) {
          let scoreItems = {...state.scoreItems};
          scoreItems[payload.index].gameBreak = payload.gameBreak;
          return {
            ...state,
            scoreItems 
          };
        }    
        return {...state};
      }    
    default:
      return {...state};
  }
}