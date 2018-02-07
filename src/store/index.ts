export interface Team {
  id: number;
  name: string;
  state?: string;
}

export interface Player {
  id: number;
  webId: string;
  name: string;
  teamId?: number;
  state?: string;
}

export interface ScoreItem {
  player: Player;
  score: number;
  gameBreak: number;
  team?: Team;
  playerList: Player[];
  playerValidateMessage: string;
  scoreValidateMessage: string;
}

export interface Rule {
  displayBreak: boolean;
}

export interface SdgbStore {
  players: Player[];
  teams?: Team[];
  scoreItems: ScoreItem[];
  rule: Rule;
}

export const initState = {
  players: [
    {
      id: 1,
      webId: 'webId_1',
      name: 'name_1',
      teamId: 1
    }, {
      id: 2,
      webId: 'webId_2',
      name: 'name_2',
      teamId: 1
    }, {
      id: 3,
      webId: 'webId_3',
      name: 'name_3',
      teamId: 2
    }, {
      id: 4,
      webId: 'webId_4',
      name: 'name_4',
      teamId: 2
    }
  ],
  teams: [
    {
      id: 1,
      name: 'team_1'
    }, {
      id: 2,
      name: 'team_2'
    }
  ],
  scoreItems: [
    {
      player: {
        id: 0,
        webId: '',
        name: '',
        teamId: 0
      },
      score: 0,
      gameBreak: 0,
      team: {
        id: 0,
        name: ''
      },
      playerList: [],
      playerValidateMessage: '',
      scoreValidateMessage: ''
    }, {
      player: {
        id: 0,
        webId: '',
        name: '',
        teamId: 0
      },
      score: 0,
      gameBreak: 0,
      team: {
        id: 0,
        name: ''
      },
      playerList: [],
      playerValidateMessage: '',
      scoreValidateMessage: ''
    }, {
      player: {
        id: 0,
        webId: '',
        name: '',
        teamId: 0
      },
      score: 0,
      gameBreak: 0,
      team: {
        id: 0,
        name: ''
      },
      playerList: [],
      playerValidateMessage: '',
      scoreValidateMessage: ''
    }, {
      player: {
        id: 0,
        webId: '',
        name: '',
        teamId: 0
      },
      score: 0,
      gameBreak: 0,
      team: {
        id: 0,
        name: ''
      },
      playerList: [],
      playerValidateMessage: '',
      scoreValidateMessage: ''
    }
  ],
  rule: {
    displayBreak: true
  }
};