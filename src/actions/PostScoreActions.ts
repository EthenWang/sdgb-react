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
export type PostScoreAction = SelectTeamAction | 
                              SelectPlayerAction | 
                              SelectBreakAction | 
                              ChangeScoreAction | 
                              SubmitScoreAction;
                              
export const selectTeam = (index: number, teamId: number): SelectTeamAction => 
  createAction(POST_SCORE_SELECT_TEAM, { index, teamId });

export const selectPlayer = (index: number, playerId: number): SelectPlayerAction => 
  createAction(POST_SCORE_SELECT_PLAYER, { index, playerId });

export const selectBreak = (index: number, gameBreak: number): SelectBreakAction => 
  createAction(POST_SCORE_SELECT_BREAK, { index, gameBreak });

export const changeScore = (index: number, score: number): ChangeScoreAction => 
  createAction(POST_SCORE_CHANGE_SCORE, { index, score });

export const postScore = (scoreItems: ScoreItem[]): SubmitScoreAction => 
  createAction(POST_SCORE_SUBMIT, { scoreItems }); 