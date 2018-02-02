import { Action } from 'src/actions';

const SCORE_POST_SCORE = 'SCORE_POST_SCORE';

type PostScoreAction = Action<void>;

export function postScore(): PostScoreAction {
  return {
    type: SCORE_POST_SCORE
  };
}