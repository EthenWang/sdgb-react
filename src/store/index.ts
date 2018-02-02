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
}

export interface SdgbStore {
  players: Player[];
  teams: Team[];
  postScore: ScoreItem[];
}