import * as _ from 'lodash';

export interface TeamState {
  id: number;
  name: string;
  state?: string;
}

export interface PlayerState {
  id: number;
  webId: string;
  name: string;
  teamId?: number;
  state?: string;
}

export interface ScoreItem {
  player: PlayerState;
  score: number;
  gameBreak: number;
  team?: TeamState;
  playerList: PlayerState[];
  playerValidateMessage: string;
  scoreValidateMessage: string;
}

export interface RuleState {
  globalRanking: boolean;
  point1: number;
  point2: number;
  point3: number;
  point4: number;
  useBreakPunish: boolean;
  punishPoint: number;
  minPlayerGames: number;
  maxPlayerGames: number;
  minTeamGames: number;
  minTeamPlayers: number;
  maxTeamPlayers: number;
}

export interface SdgbStore {
  players: PlayerState[];
  teams?: TeamState[];
  scoreItems: ScoreItem[];
  rule: RuleState;
}

const generateTestData = () => {
  let teams = new Array<TeamState>();
  let players = new Array<PlayerState>();

  _.range(1, 11).map(i => {
    teams.push({
      id: i,
      name: `team_${i}`
    });
    _.range(1, 7).map(j => {
      players.push({
        id: (i - 1) * 6 + j,
        webId: `webId_${i}_${j}`,
        name: `name_${i}_${j}`,
        teamId: i
      });
    });
  });
  return { teams, players };
};

export const initState = {
  ...generateTestData(),
  scoreItems: _.range(0, 4).map(index => ({
    player: {} as PlayerState,
    score: 0,
    gameBreak: 0,
    team: {} as TeamState,
    playerList: [],
    playerValidateMessage: '',
    scoreValidateMessage: ''
  })),
  rule: {
    useBreakPunish: true,
    globalRanking: false,
    point1: 0,
    point2: 0,
    point3: 0,
    point4: 0,
    punishPoint: 0,
    minPlayerGames: 0,
    maxPlayerGames: 0,
    minTeamGames: 0,
    minTeamPlayers: 0,
    maxTeamPlayers: 0,
  }
};