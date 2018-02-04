import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { Form } from 'reactstrap';
import { SdgbStore, ScoreItem, Player, Team } from '../store';
import { PostScoreItem } from './PostScoreItem';
import * as PostScoreActions from '../actions/PostScoreActions';

interface PostScoreProps {
  displayBreak: boolean;
  scoreItems: ScoreItem[];
  playerList: Player[];
  teamList: Team[];
  selectTeam: (index: number, teamId: number) => PostScoreActions.SelectTeamAction;
  selectPlayer: (index: number, playerId: number) => PostScoreActions.SelectPlayerAction;
  selectBreak: (index: number, gameBreak: number) => PostScoreActions.SelectBreakAction;
  changeScore: (index: number, score: number) => PostScoreActions.ChangeScoreAction;
  postScore: (scoreItems: ScoreItem[]) => PostScoreActions.SubmitScoreAction;
}

export class PostScore extends React.PureComponent<PostScoreProps> {
  constructor(props: PostScoreProps) {
    super(props);
    this.onSelectTeam = this.onSelectTeam.bind(this);
    this.onSelectPlayer = this.onSelectPlayer.bind(this);
    this.onSelectBreak = this.onSelectBreak.bind(this);
    this.onChangeScore = this.onChangeScore.bind(this);
  }

  onSelectTeam(index: number, teamId: number) {
    this.props.selectTeam(index, teamId);
  }

  onSelectPlayer(index: number, playerId: number) {
    this.props.selectPlayer(index, playerId);
  }

  onSelectBreak(index: number, gameBreak: number) {
    this.props.selectBreak(index, gameBreak);
  }

  onChangeScore(index: number, score: number) {
    this.props.changeScore(index, score);
  }

  render() {
    const { teamList, playerList, displayBreak, scoreItems } = this.props;
    return (
      <Form>
        {[0, 1, 2, 3].map(index => {
          return (
            <PostScoreItem 
              key={index} 
              index={index}
              teamList={teamList}
              playerList={playerList}
              displayBreak={displayBreak}
              onSelectTeam={this.onSelectTeam}
              onSelectPlayer={this.onSelectPlayer}
              onSelectBreak={this.onSelectBreak}
              onChangeScore={this.onChangeScore}
              {...scoreItems[index]}
            />
          );
        })}
      </Form>
    );
  }
}

export function mapStateToProps(state: {PostScore: SdgbStore}) {
  const thisState = state.PostScore;
  return {
    displayBreak: thisState.rule.displayBreak,
    scoreItems: thisState.scoreItems,
    playerList: thisState.players,
    teamList: thisState.teams
  };
}

export function mapDispatchToProps(dispatch: Dispatch<PostScoreActions.PostScoreAction>) {
  return bindActionCreators(
    { 
      selectTeam: PostScoreActions.selectTeam, 
      selectPlayer: PostScoreActions.selectPlayer, 
      selectBreak: PostScoreActions.selectBreak, 
      changeScore: PostScoreActions.changeScore, 
      postScore: PostScoreActions.postScore 
    }, 
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostScore);