import * as React from 'react';
import { Row, Col, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { ScoreItem, Player, Team } from '../store';
import * as label from '../assets/label';

interface PostScoreItemProps extends ScoreItem {
  index: number;
  playerList: Player[];
  teamList?: Team[];
  playerValidateMessage: string;
  scoreValidateMessage: string;
  displayBreak: boolean;
}

class PostScoreItem extends React.PureComponent<PostScoreItemProps> {
  private get displayTeam(): boolean {
    return this.props.teamList != null;
  } 

  render() {
    const teamId = 'team' + this.props.index;
    const playerId = 'player' + this.props.index;
    const scoreId = 'score' + this.props.index;
    const breakId = 'break' + this.props.index;
    const breakOptions = [0, 1, 2, 3, 4, 5];

    return (
      <Row>
        {this.displayTeam &&
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
                onChange={this.props.teamChange}
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
              onChange={this.props.playerChange}
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
              onChange={this.props.scoreChange}
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
                onChange={this.props.breakChange}
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
