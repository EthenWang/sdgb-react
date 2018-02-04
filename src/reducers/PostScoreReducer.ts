import { SdgbStore } from '../store';
import * as PostScoreActions from '../actions/PostScoreActions';
import { POST_SCORE_SELECT_TEAM } from '../actions/PostScoreActions';

const initState = {
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

function PostScore(state: SdgbStore = initState, action: PostScoreActions.PostScoreAction) {
  switch (action.type) {
    case POST_SCORE_SELECT_TEAM:
      return {...state};
    default:
      return {...state};
  }
}

export {PostScore};