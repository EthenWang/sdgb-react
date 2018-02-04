import { SdgbStore, initState } from '../store';
import * as PostScoreActions from '../actions/PostScoreActions';

function PostScore(state: SdgbStore = initState, action: PostScoreActions.PostScoreAction) {
  switch (action.type) {
    case PostScoreActions.POST_SCORE_SELECT_TEAM:
      return {...state};
    case PostScoreActions.POST_SCORE_SELECT_PLAYER:
      return {...state};
    case PostScoreActions.POST_SCORE_CHANGE_SCORE:
      return {...state};
    case PostScoreActions.POST_SCORE_CHANGE_SCORE:
      return {...state};
    default:
      return {...state};
  }
}

export { PostScore };