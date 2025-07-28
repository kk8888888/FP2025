import { Gift, Level, GameType } from './types';

export const INITIAL_LIVES = 3;
export const POINTS_PER_CORRECT_ANSWER = 10;
export const TOTAL_QUESTIONS_PER_QUIZ = 5;

export const GIFT_ITEMS: Gift[] = [
  { id: 1, name: 'Virtual Coffee', iconId: 'coffee', cost: 50 },
  { id: 2, name: 'Cool Sticker Pack', iconId: 'gift', cost: 100 },
  { id: 3, name: 'Syntax Highlighter', iconId: 'code', cost: 150 },
  { id: 4, name: 'Bronze Trophy', iconId: 'trophy', cost: 250 },
];

export const LEVELS: Level[] = [
    { id: 1, gameType: GameType.QUIZ, title: "Java Basics", description: "Test your knowledge of core syntax and data types." },
    { id: 2, gameType: GameType.CODE_SCRAMBLE, title: "Method Scramble", description: "Assemble a simple Java method from shuffled lines." },
    { id: 3, gameType: GameType.BUG_HUNT, title: "Loop Detective", description: "Find the off-by-one error in a common loop." },
    { id: 4, gameType: GameType.QUIZ, title: "OOP Concepts", description: "Answer questions about classes, objects, and inheritance." },
    { id: 5, gameType: GameType.BUG_HUNT, title: "Variable Mix-up", description: "Identify the incorrect variable usage in a code block." },
    { id: 6, gameType: GameType.CODE_SCRAMBLE, title: "Class Constructor", description: "Correctly order the lines to build a Java class." },
    { id: 7, gameType: GameType.QUIZ, title: "Exception Handling", description: "Questions on try, catch, and finally." },
    { id: 8, gameType: GameType.BUG_HUNT, title: "String Sleuth", description: "Find the common mistake in string comparison." },
    { id: 9, gameType: GameType.CODE_SCRAMBLE, title: "Array Initialization", description: "Put the array declaration and loop in order." },
    { id: 10, gameType: GameType.QUIZ, title: "Advanced Topics", description: "Challenge yourself with questions on collections and threads." },
];
