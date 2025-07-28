export enum AppState {
  HOME,
  LEVEL_SELECT,
  GAME,
  STORE,
  GAME_OVER,
}

export enum GameType {
  QUIZ = 'Java Quiz',
  CODE_SCRAMBLE = 'Code Scramble',
  BUG_HUNT = 'Bug Hunt',
}

export interface Level {
  id: number;
  title: string;
  description: string;
  gameType: GameType;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface CodeScrambleChallenge {
  scrambledLines: string[];
  correctOrder: string[];
  explanation: string;
}

export interface BugHuntChallenge {
  code: string[];
  buggyLine: number; // 1-based index
  explanation: string;
}


export type IconId = 'coffee' | 'gift' | 'code' | 'trophy';

export interface Gift {
  id: number;
  name: string;
  iconId: IconId;
  cost: number;
}
