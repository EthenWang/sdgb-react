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
  scoreItems?: ScoreItem[];
  rule: Rule;
}