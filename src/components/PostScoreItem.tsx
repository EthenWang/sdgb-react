import * as React from 'react';
import { Row, Col, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { ScoreItem, Player, Team } from '../store';
import * as label from '../assets/label';
import { ChangeEvent } from 'react';

interface PostScoreItemProps extends ScoreItem {
  index: number;
  playerList: Player[];
  teamList?: Team[];
  displayBreak: boolean;
  onSelectTeam: (index: number, teamId: number) => void;
  onSelectPlayer: (index: number, playerId: number) => void;
  onSelectBreak: (index: number, gamebreak: number) => void;
  onChangeScore: (index: number, score: number) => void;
}

class PostScoreItem extends React.PureComponent<PostScoreItemProps> {
  constructor(props: PostScoreItemProps) {
    super(props);
    this.onSelectTeam = this.onSelectTeam.bind(this);
    this.onSelectPlayer = this.onSelectPlayer.bind(this);
    this.onSelectBreak = this.onSelectBreak.bind(this);
    this.onChangeScore = this.onChangeScore.bind(this);
  }

  onSelectTeam(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    this.props.onSelectTeam(this.props.index, parseInt(e.target.value, undefined));
  }

  onSelectPlayer(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    this.props.onSelectPlayer(this.props.index, parseInt(e.target.value, undefined));
  }

  onSelectBreak(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    this.props.onSelectBreak(this.props.index, parseInt(e.target.value, undefined));
  }

  onChangeScore(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    this.props.onSelectBreak(this.props.index, parseInt(e.target.value, undefined));
  }

  render() {
    const displayTeam = this.props.teamList != null;
    const teamId = 'team' + this.props.index;
    const playerId = 'player' + this.props.index;
    const scoreId = 'score' + this.props.index;
    const breakId = 'break' + this.props.index;
    const breakOptions = [0, 1, 2, 3, 4, 5];

    return (
      <Row>
        {displayTeam &&
          <Col md={{size: 3, offset: 1}}>
            <FormGroup>
              <Label for={teamId}>
                {label.selectTeam.replace('{1}', (this.props.index + 1).toString())}
              </Label> 
              <Input
                id={teamId}
                type="select"
                value={this.props.team ? this.props.team.name : ''}
                placeholder="Enter text"
                onChange={this.onSelectTeam}
              >
                {this.props.teamList && this.props.teamList.map(
                  (team, index) => <option key={index} value={team.id}>{team.name}</option>
                )}  
              </Input>
            </FormGroup>
          </Col>
        }
        <Col md={3}>
          <FormGroup>
            <Label for={playerId}>
              {label.selectPlayer.replace('{1}', (this.props.index + 1).toString())}
            </Label>
            <Input
              id={playerId}
              type="select"
              value={this.props.player.name}
              placeholder="Enter text"
              onChange={this.onSelectPlayer}
            >
              {this.props.playerList && this.props.playerList.map(
                player => <option key={player.id} value={player.id}>{player.name}</option>
              )}  
            </Input>
            <FormFeedback>{this.props.playerValidateMessage}</FormFeedback>
          </FormGroup>
        </Col>
        <Col md={this.props.displayBreak ? 1 : 2}>
          <FormGroup>
            <Label for={scoreId}>
              {label.enterScore.replace('{1}', (this.props.index + 1).toString())}
            </Label>
            <Input
              id={scoreId}
              type="number"
              value={this.props.score}
              onChange={this.onChangeScore}
            />
            <FormFeedback>{this.props.scoreValidateMessage}</FormFeedback>
          </FormGroup>
        </Col>
        {this.props.displayBreak &&
          <Col md={1}>
            <FormGroup>
              <Label>
                {label.selectBreak.replace('{1}', (this.props.index + 1).toString())}
              </Label>   
              <Input
                id={breakId}
                type="select"
                value={this.props.break}
                onChange={this.onSelectBreak}
              >
                {breakOptions.map(time => <option key={time} value={time}>{time}</option>)}
              </Input>
            </FormGroup>
          </Col>
        }
      </Row>
    );
  }
}

export { PostScoreItem };