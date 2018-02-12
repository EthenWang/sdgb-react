import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { Form, FormGroup, InputGroup, InputGroupAddon, Input, Label } from 'reactstrap';
import * as label from '../assets/label';
import { RuleState, SdgbStore } from '../store';
import { RuleAction, RuleSetBooleanActionHandler, RuleSetNumberActionHandler, 
  setBoolean, setNumber } from '../actions/RuleActions';

interface RuleProps extends RuleState {
  setBoolean: RuleSetBooleanActionHandler;
  setNumber: RuleSetNumberActionHandler;
}

class Rule extends React.PureComponent<RuleProps> {
  inputChange = (e: React.ChangeEvent<HTMLInputElement>, fldName: string) => {
    let obj = e.target as HTMLInputElement;
    switch (fldName) {
      case 'globalRanking':
      case 'useBreakPunish':
        this.props.setBoolean(fldName, obj.checked);
        break;
      default:
        this.props.setNumber(fldName, obj.valueAsNumber);
        break;
    }
  }

  render() {
    const { globalRanking, minPlayerGames, maxPlayerGames, minTeamPlayers,
      maxTeamPlayers, minTeamGames, useBreakPunish, punishPoint } = this.props;
    const points = [this.props.point1, this.props.point2, this.props.point3, this.props.point4];
    return (
      <Form>
        <h1>{label.ruleSetting}</h1>
        <FormGroup check={true}>
          <Label>
            <Input 
              type="checkbox" 
              checked={globalRanking}
              onChange={e => this.inputChange(e, 'globalRanking')} 
            />{' '}
            {label.globalRanking}             
          </Label>
        </FormGroup>
        {points.map((point, index) => 
          <FormGroup key={index}>
            <Label>
              {(label.enterScore as string).replace('{1}', (index + 1).toString())}
            </Label>
            <Input
              type="number"
              value={point}
              placeholder={(label.enterScore as string).replace('{1}', (index + 1).toString())}
              onChange={e => this.inputChange(e, `point${index + 1}`)}
              disabled={globalRanking} 
            />
          </FormGroup>
        )}
        <FormGroup>
          <Label>
            {label.minPlayerGames}
          </Label>
          <Input
            type="number"
            value={minPlayerGames}
            placeholder={label.minPlayerGames}
            onChange={e => this.inputChange(e, 'minPlayerGames')}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            {label.maxPlayerGames}
          </Label>
          <Input
            type="number"
            value={maxPlayerGames}
            placeholder={label.maxPlayerGames}
            onChange={e => this.inputChange(e, 'maxPlayerGames')}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            {label.minTeamPlayers}
          </Label>
          <Input
            type="number"
            value={minTeamPlayers}
            placeholder={label.minTeamPlayers}
            onChange={e => this.inputChange(e, 'minTeamPlayers')}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            {label.maxTeamPlayers}
          </Label>
          <Input
            type="number"
            value={maxTeamPlayers}
            placeholder={label.maxTeamPlayers}
            onChange={e => this.inputChange(e, 'maxTeamPlayers')}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            {label.minTeamGames}
          </Label>
          <Input
            type="number"
            value={minTeamGames}
            placeholder={label.minTeamGames}
            onChange={e => this.inputChange(e, 'minTeamGames')}
          />
        </FormGroup>
        <InputGroup>
          <InputGroupAddon className="input-group-prepend">
            <div className="input-group-text">
              <Input 
                type="checkbox" 
                checked={useBreakPunish}
                onChange={e => this.inputChange(e, 'useBreakPunish')}
              />{` ${label.breakPunish}`}
            </div>
          </InputGroupAddon>
          <Input 
            type="number"
            value={punishPoint}
            disabled={useBreakPunish} 
            onChange={e => this.inputChange(e, 'punishPoint')}
          />
        </InputGroup>
      </Form>
    );
  }
}

export function mapStateToProps(state: { ruleReducer: SdgbStore }) {
  const thisState = state.ruleReducer;
  return {
    ...thisState.rule
  };
}

export function mapDispatchToProps(dispatch: Dispatch<RuleAction>) {
  return bindActionCreators(
    { 
      setNumber, 
      setBoolean
    }, 
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Rule);