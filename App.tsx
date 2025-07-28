
import React, { useState, useCallback, useEffect } from 'react';
import { AppState, Gift, Level } from './types';
import { INITIAL_LIVES, LEVELS } from './appConstants.ts';
import HomeScreen from './components/HomeScreen';
import QuizScreen from './components/QuizScreen';
import StoreScreen from './components/StoreScreen';
import GameOverScreen from './components/GameOverScreen';
import Navbar from './components/Navbar';
import LevelSelectScreen from './components/LevelSelectScreen';
import GameScreen from './components/GameScreen';

export default function App() {
  const [appState, setAppState] = useState<AppState>(AppState.HOME);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(INITIAL_LIVES);
  const [redeemedGifts, setRedeemedGifts] = useState<number[]>([]);
  const [finalScore, setFinalScore] = useState(0);
  const [unlockedLevels, setUnlockedLevels] = useState<Set<number>>(new Set([1]));
  const [currentLevelId, setCurrentLevelId] = useState<number | null>(null);

  const handleShowLevels = useCallback(() => {
    setAppState(AppState.LEVEL_SELECT);
  }, []);
  
  const handleSelectLevel = useCallback((levelId: number) => {
    setCurrentLevelId(levelId);
    setAppState(AppState.GAME);
  }, []);

  const handleGameEnd = useCallback((newScore: number, success: boolean) => {
    setScore(newScore);
    if (success && currentLevelId) {
      const nextLevelId = currentLevelId + 1;
      if (nextLevelId <= LEVELS.length) {
        setUnlockedLevels(prev => new Set(prev).add(nextLevelId));
      }
    }
    setCurrentLevelId(null);
    setAppState(AppState.LEVEL_SELECT);
  }, [currentLevelId]);

  const handleRestartGame = useCallback(() => {
    setScore(0);
    setLives(INITIAL_LIVES);
    setUnlockedLevels(new Set([1]));
    setAppState(AppState.LEVEL_SELECT);
  }, []);

  const handleNavigateToStore = useCallback(() => {
    setAppState(AppState.STORE);
  }, []);
  
  const handleBackToHome = useCallback(() => {
    setAppState(AppState.HOME);
  }, []);

  useEffect(() => {
    if (appState === AppState.GAME && lives <= 0) {
      setFinalScore(score);
      setAppState(AppState.GAME_OVER);
    }
  }, [lives, score, appState]);

  const handleRedeemGift = useCallback((gift: Gift) => {
    if (score >= gift.cost && !redeemedGifts.includes(gift.id)) {
      setScore(prev => prev - gift.cost);
      setRedeemedGifts(prev => [...prev, gift.id]);
    }
  }, [score, redeemedGifts]);
  
  const currentLevel = currentLevelId ? LEVELS.find(l => l.id === currentLevelId) : null;

  const renderContent = () => {
    switch (appState) {
      case AppState.HOME:
        return <HomeScreen onShowLevels={handleShowLevels} />;
      case AppState.LEVEL_SELECT:
        return <LevelSelectScreen levels={LEVELS} unlockedLevels={unlockedLevels} onSelectLevel={handleSelectLevel} />;
      case AppState.GAME:
        if (!currentLevel) return <LevelSelectScreen levels={LEVELS} unlockedLevels={unlockedLevels} onSelectLevel={handleSelectLevel} />;
        return <GameScreen level={currentLevel} score={score} setScore={setScore} lives={lives} setLives={setLives} onGameEnd={handleGameEnd} />;
      case AppState.STORE:
        return <StoreScreen score={score} redeemedGifts={redeemedGifts} onRedeem={handleRedeemGift} onBack={handleShowLevels} />;
      case AppState.GAME_OVER:
        return <GameOverScreen score={finalScore} onRestartGame={handleRestartGame} />;
      default:
        return <HomeScreen onShowLevels={handleShowLevels} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 font-sans p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <Navbar score={score} lives={lives} onStoreClick={handleNavigateToStore} onHomeClick={handleBackToHome} isGameActive={appState === AppState.GAME || appState === AppState.GAME_OVER} />
      <main className="w-full max-w-4xl flex-grow flex items-center justify-center mt-16">
        {renderContent()}
      </main>
    </div>
  );
}
