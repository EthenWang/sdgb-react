import * as React from 'react';
import { Row, Col, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { ScoreItem, Player, Team } from '../store';
import * as label from '../assets/label';

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

  onSelectTeam(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { onSelectTeam, index } = this.props;
    onSelectTeam(index, parseInt(e.target.value, undefined));
  }

  onSelectPlayer(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { onSelectPlayer, index } = this.props;
    onSelectPlayer(index, parseInt(e.target.value, undefined));
  }

  onSelectBreak(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { onSelectBreak, index } = this.props;
    onSelectBreak(index, parseInt(e.target.value, undefined));
  }

  onChangeScore(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { onChangeScore, index } = this.props;
    onChangeScore(index, parseInt(e.target.value, undefined));
  }

  render() {
    const { index, displayBreak, team, player, score, gameBreak, teamList, 
      playerList, playerValidateMessage, scoreValidateMessage } = this.props;
    const displayTeam = teamList != null;
    const teamId = `team${index}`;
    const playerId = `player${index}`;
    const scoreId = `score${index}`;
    const breakId = `break${index}`;
    const breakOptions = [0, 1, 2, 3, 4, 5];

    return (
      <Row>
        <Col md={{size: 1, offset: 1}}>
          <h6 className="score-label">
            {label.ranki.replace('{1}', (index + 1).toString())}
          </h6>
        </Col>
        {displayTeam &&
          <Col md={2}>
            <FormGroup>
              <Label for={teamId}>
                {label.selectTeam}
              </Label> 
              <Input
                id={teamId}
                type="select"
                value={team ? team.id : ''}
                placeholder="Enter text"
                onChange={this.onSelectTeam}
              >
                {teamList && teamList.map(
                  (t, i) => <option key={i} value={t.id}>{t.name}</option>
                )}  
              </Input>
            </FormGroup>
          </Col>
        }
        <Col md={3}>
          <FormGroup>
            <Label for={playerId}>
              {label.selectPlayer}
            </Label>
            <Input
              id={playerId}
              type="select"
              value={player.id}
              placeholder="Enter text"
              onChange={this.onSelectPlayer}
            >
              {playerList && playerList.map(
                p => <option key={p.id} value={p.id}>{p.name}</option>
              )}  
            </Input>
            <FormFeedback>{playerValidateMessage}</FormFeedback>
          </FormGroup>
        </Col>
        <Col md={displayBreak ? 1 : 2}>
          <FormGroup>
            <Label for={scoreId}>
              {label.enterScore}
            </Label>
            <Input
              id={scoreId}
              type="number"
              value={score}
              onChange={this.onChangeScore}
            />
            <FormFeedback>{scoreValidateMessage}</FormFeedback>
          </FormGroup>
        </Col>
        {this.props.displayBreak &&
          <Col md={1}>
            <FormGroup>
              <Label>
                {label.selectBreak}
              </Label>   
              <Input
                id={breakId}
                type="select"
                value={gameBreak}
                onChange={this.onSelectBreak}
              >
                {breakOptions.map(t => <option key={t} value={t}>{t}</option>)}
              </Input>
            </FormGroup>
          </Col>
        }
      </Row>
    );
  }
}

export { PostScoreItem };