export interface Team {
  id: number;
  name: string;
}

export interface Player {
  id: number;
  webId: string;
  name: string;
  teamId?: number;
}

export interface ScoreItem {
  player: Player;
  score: number;
  break: number;
  team?: Team;
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
      break: 0,
      team: {
        id: 0,
        name: ''
      },
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
      break: 0,
      team: {
        id: 0,
        name: ''
      },
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
      break: 0,
      team: {
        id: 0,
        name: ''
      },
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
      break: 0,
      team: {
        id: 0,
        name: ''
      },
      playerValidateMessage: '',
      scoreValidateMessage: ''
    }
  ],
  rule: {
    displayBreak: true
  }
};