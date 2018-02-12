import { Action, createAction } from 'src/actions';

export const RULE_SET_NUMBER = 'RULE_SET_NUMBER';
export const RULE_SET_BOOLEAN = 'RULE_SET_BOOLEAN';

export type RuleSetBooleanAction = Action<{property: string, value: Boolean}>;
export type RuleSetNumberAction = Action<{property: string, value: number}>;

export type RuleSetBooleanActionHandler = (property: string, value: boolean) => RuleSetBooleanAction;
export type RuleSetNumberActionHandler = (property: string, value: number) => RuleSetNumberAction;

export const setBoolean = (property: string, value: boolean): RuleSetBooleanAction => 
  createAction(RULE_SET_BOOLEAN, { property, value });
export const setNumber = (property: string, value: number): RuleSetNumberAction => 
  createAction(RULE_SET_NUMBER, { property, value });

export type RuleAction = RuleSetBooleanAction | RuleSetNumberAction;