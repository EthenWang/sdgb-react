import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { SdgbStore, ScoreItem, Player, Team } from '../store';
import { PostScoreItem } from './PostScoreItem';
import * as PostScoreActions from '../actions/PostScoreActions';

interface PostScoreProps {
  displayBreak: boolean;
  scoreItem: ScoreItem[];
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

  componentWillReceiveProps(nextProps: PostScoreProps) {
    // this.props = nextProps;
  }

  render() {
    return [1, 2, 3, 4].map(index => {
      return (
        <PostScoreItem 
          key={index} 
          index={index}
          teamList={this.props.teamList}
          playerList={this.props.playerList}
          displayBreak={this.props.displayBreak}
          onSelectTeam={this.onSelectTeam}
          onSelectPlayer={this.onSelectPlayer}
          onSelectBreak={this.onSelectBreak}
          onChangeScore={this.onChangeScore}
          {...this.props.scoreItem[index - 1]}
        />
      );
    });
  }
}

export function mapStateToProps(state: {PostScore: SdgbStore}) {
  const thisState = state.PostScore;
  return {
    displayBreak: thisState.rule.displayBreak,
    scoreItem: thisState.postScore,
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