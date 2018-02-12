import { SdgbStore, initState } from '../store';
import * as RuleActions from '../actions/RuleActions';

export default function rule(state: SdgbStore = initState, action: RuleActions.RuleAction) {
  const payload = action.payload;
  if (payload) {
    return {
      ...state,
      rule: {
        ...state.rule,
        [payload.property]: payload.value
      }
    };
  }  
  return {...state};
}