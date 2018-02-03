import { Action, createAction } from 'src/actions';
import { ScoreItem } from '../store';

export const POST_SCORE_SELECT_TEAM = 'POST_SCORE_SELECT_TEAM';
export const POST_SCORE_SELECT_PLAYER = 'POST_SCORE_SELECT_PLAYER';
export const POST_SCORE_SELECT_BREAK = 'POST_SCORE_SELECT_BREAK';
export const POST_SCORE_CHANGE_SCORE = 'POST_SCORE_CHANGE_STORE';
export const POST_SCORE_SUBMIT = 'POST_SCORE_SUBMIT';

export type SelectTeamAction = Action<{index: number, teamId: number}>;
export type SelectPlayerAction = Action<{index: number, playerId: number}>;
export type SelectBreakAction = Action<{index: number, gameBreak: number}>;
export type ChangeScoreAction = Action<{index: number, score: number}>;
export type SubmitScoreAction = Action<{scoreItems: ScoreItem[]}>;

export function selectTeam(index: number, teamId: number): SelectTeamAction {
  return createAction(POST_SCORE_SELECT_TEAM, { index, teamId });
}

export function selectPlayer(index: number, playerId: number): SelectPlayerAction {
  return createAction(POST_SCORE_SELECT_PLAYER, { index, playerId });
}

export function selectBreak(index: number, gameBreak: number): SelectBreakAction {
  return createAction(POST_SCORE_SELECT_BREAK, { index, gameBreak });
}

export function changeScore(index: number, score: number): ChangeScoreAction {
  return createAction(POST_SCORE_CHANGE_SCORE, { index, score });
}

export function postScore(scoreItems: ScoreItem[]): SubmitScoreAction {
  return createAction(POST_SCORE_SUBMIT, { scoreItems }); 
}

export type PostScoreAction = SelectTeamAction | 
                              SelectPlayerAction | 
                              SelectBreakAction | 
                              ChangeScoreAction | 
                              SubmitScoreAction;