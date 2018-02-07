import * as React from 'react';
import { Form, FormGroup, InputGroup, InputGroupAddon, Input, Label } from 'reactstrap';
import * as label from '../assets/label';

interface GamePointState {
  point: number;
  disabled: boolean;
}

interface GamePointProps extends GamePointState {
  index: number;
  onPointChange: (index: number, point: number) => void;
  onInitComplete: (gp: GamePoint) => void;
}

class GamePoint extends React.Component<GamePointProps, GamePointState> {
  constructor(props: GamePointProps) {
    super(props);
    this.state = props;
  }

  onPointChange = (e: React.FormEvent<HTMLInputElement>) => {
    let obj = e.target as HTMLInputElement;
    let point = parseInt(obj.value, undefined);
    this.setState({
      point: point
    });
    let callBack = this.props.onPointChange;
    if (callBack != null) {
      callBack(this.props.index, point);
    }
  }

  componentDidMount() {
    let callBack = this.props.onInitComplete;
    if (callBack != null) {
      callBack(this);
    }
  }

  render() {
    return (
      <FormGroup>
        <Label>
          {(label.enterScore as string).replace('{1}', (this.props.index + 1).toString())}
        </Label>
        <Input
          type="number"
          value={this.state.point}
          placeholder={(label.enterScore as string).replace('{1}', (this.props.index + 1).toString())}
          onChange={this.onPointChange}
          disabled={this.state.disabled}
        />
      </FormGroup>
    );
  }
}

interface RuleState {
  breakPunish?: boolean;
  punishPoint?: number;
  globalRanking?: boolean;
  minPlayerGames?: number;
  maxPlayerGames?: number;
  minTeamGames?: number;
  minTeamPlayers?: number;
  maxTeamPlayers?: number;
}

interface RuleProps extends RuleState {
}

class Rule extends React.Component<RuleProps, RuleState> {
  private readonly defaultPunish = 50;

  private defaultPoints = [4, 2, 1, 0];

  private points = [4, 2, 1, 0];

  private pointsControl = new Array<GamePoint>(4);

  constructor(props: RuleProps) {
    super(props);
    this.state = props;
  }

  inputChange = (e: React.FormEvent<HTMLInputElement>, fldName: string) => {
    let obj = e.target as HTMLInputElement;

    switch (fldName) {
      case 'globalRanking':
        this.setState({
          globalRanking: obj.checked          
        });
        if (obj.checked) {
          this.pointsControl.forEach((p) => {
            p.setState({
              point: 0,
              disabled: true
            });
          });
        } else {
          this.pointsControl.forEach((p) => {
            p.setState({
              point: this.defaultPoints[p.props.index],
              disabled: false
            });
          });
        }
        break;
      case 'minPlayerGames':
        this.setState({
          minPlayerGames: parseInt(obj.value, undefined)
        });
        break;
      case 'minPlayerGames':
        this.setState({
          maxPlayerGames: parseInt(obj.value, undefined)
        });
        break;
      case 'minTeamGames':
        this.setState({
          minTeamGames: parseInt(obj.value, undefined)
        });
        break;
      case 'minTeamPlayers':
        this.setState({
          minTeamPlayers: parseInt(obj.value, undefined)
        });
        break; 
      case 'maxTeamPlayers':
        this.setState({
          maxTeamPlayers: parseInt(obj.value, undefined)
        });
        break;
      default:
        break;
    }
  }

  checkboxChange = (checked: boolean, fldName: string) => {
    switch (fldName) {
      case 'breakPunish':        
        this.setState({
          breakPunish: checked,
          punishPoint: checked ? this.defaultPunish : 0
        });
        break;
      default:
        break;
    }
  }

  onPointChange = (index: number, point: number) => {
    this.points[index] = point;
  } 

  pointInitComplete = (gp: GamePoint) => {
    this.pointsControl[gp.props.index] = gp;
  }

  render() {
    return (
      <Form>
        <h1>{label.ruleSetting}</h1>
        <FormGroup check={true}>
          <Label>
            <Input 
              type="checkbox" 
              checked={this.state.globalRanking || false}
              onChange={e => this.inputChange(e, 'globalRanking')} 
            />{' '}
            {label.globalRanking}             
          </Label>
        </FormGroup>
        {this.defaultPoints.map((point, index) => 
          <GamePoint 
            key={index} 
            index={index} 
            point={point} 
            disabled={this.state.globalRanking || false} 
            onPointChange={this.onPointChange}
            onInitComplete={this.pointInitComplete}
          />
        )}
        <FormGroup>
          <Label>
            {label.minPlayerGames}
          </Label>
          <Input
            type="number"
            value={this.state.minPlayerGames || 24}
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
            value={this.state.maxPlayerGames || 48}
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
            value={this.state.minTeamPlayers || 4}
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
            value={this.state.maxTeamPlayers || 6}
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
            value={this.state.minTeamGames || 120}
            placeholder={label.minTeamGames}
            onChange={e => this.inputChange(e, 'minTeamGames')}
          />
        </FormGroup>
        <InputGroup>
          <InputGroupAddon className="input-group-prepend">
            <div className="input-group-text">
              <Input type="checkbox" aria-label="Checkbox for following text input" />
            </div>
          </InputGroupAddon>
          <Input placeholder="Check it out" />
        </InputGroup>
      </Form>
    );
  }
}

export { Rule, RuleProps };