
import React, { useState, useEffect, useCallback } from 'react';
import { GameStage, CardData as CardDataType } from './types';
import { CARDS_DATA } from './constants';
import Button from './components/Button';
import Card from './components/Card';

const App: React.FC = () => {
  const [gameStage, setGameStage] = useState<GameStage>(GameStage.Introduction);
  const [selectedCardIds, setSelectedCardIds] = useState<Set<number>>(new Set());
  const [guessedNumber, setGuessedNumber] = useState<number | null>(null);
  const [thinkingMessage, setThinkingMessage] = useState<string>("Pensando... Analizando tus cartas... 🔮");

  const handleStartGame = useCallback(() => {
    setGameStage(GameStage.CardSelection);
  }, []);

  const handleCardToggle = useCallback((cardId: number) => {
    setSelectedCardIds((prevIds) => {
      const newIds = new Set(prevIds);
      if (newIds.has(cardId)) {
        newIds.delete(cardId);
      } else {
        newIds.add(cardId);
      }
      return newIds;
    });
  }, []);

  const handleDiscoverNumber = useCallback(() => {
    setGameStage(GameStage.Thinking);
    let sum = 0;
    selectedCardIds.forEach((id) => {
      const card = CARDS_DATA.find(c => c.id === id);
      if (card) {
        sum += card.value;
      }
    });
    setGuessedNumber(sum);

    // Simulate thinking process
    const messages = [
        "Consultando los astros... ✨",
        "Descifrando los secretos de las cartas... 📜",
        "Sintiendo la energía de tus pensamientos... 🧠",
        "Casi lo tengo... 🔮"
    ];
    let messageIndex = 0;
    const intervalId = setInterval(() => {
        setThinkingMessage(messages[messageIndex % messages.length]);
        messageIndex++;
    }, 800);


    setTimeout(() => {
      clearInterval(intervalId);
      setGameStage(GameStage.Result);
    }, 3500); // 3.5 seconds for thinking
  }, [selectedCardIds]);

  const handleResetGame = useCallback(() => {
    setSelectedCardIds(new Set());
    setGuessedNumber(null);
    setGameStage(GameStage.Introduction);
    setThinkingMessage("Pensando... Analizando tus cartas... 🔮");
  }, []);

  const renderIntroduction = () => (
    <div className="text-center space-y-6 md:space-y-8 animate-fadeIn">
      <div className="text-7xl md:text-8xl mb-2 md:mb-4" role="img" aria-label="Crystal Ball">
        🔮
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 drop-shadow-lg">
        Tarot numérico
      </h1>
      <p className="text-2xl md:text-3xl text-purple-300">
        Piensa en un número del 1 al 63...
      </p>
      <p className="text-xl md:text-2xl text-indigo-300 animate-pulse">
        ¿Ya lo tienes en mente?
      </p>
      <Button onClick={handleStartGame} className="mt-6 md:mt-8 px-10 py-4 text-lg">
        ¡Sí, ya lo pensé! <span role="img" aria-label="sparkles">✨</span>
      </Button>
    </div>
  );

  const renderCardSelection = () => (
    <div className="text-center space-y-8 w-full max-w-5xl animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-semibold text-purple-300">
        Selecciona las tarjetas donde aparece tu número:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-4">
        {CARDS_DATA.map((card) => (
          <Card
            key={card.id}
            cardData={card}
            isSelected={selectedCardIds.has(card.id)}
            onToggle={handleCardToggle}
          />
        ))}
      </div>
      <Button 
        onClick={handleDiscoverNumber} 
        disabled={selectedCardIds.size === 0}
        className="mt-6 px-10 py-4 text-lg"
      >
        Descubrir mi número <span role="img" aria-label="crystal ball">🔮</span>
      </Button>
    </div>
  );

  const renderThinking = () => (
    <div className="text-center space-y-6 animate-fadeIn">
      <div className="text-6xl md:text-8xl animate-bounce">🔮</div>
      <p className="text-3xl md:text-4xl text-purple-300">{thinkingMessage}</p>
    </div>
  );

  const renderResult = () => (
    <div className="text-center space-y-8 animate-fadeIn">
      <p className="text-3xl md:text-4xl text-indigo-300">
        ¡El número que pensaste es:
      </p>
      <p className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 my-4 drop-shadow-xl">
        {guessedNumber}
      </p>
      <p className="text-3xl md:text-4xl text-purple-300">
        ¡Increíble! <span role="img" aria-label="party popper">🎉</span>
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
        <Button onClick={handleResetGame} variant="secondary" className="px-10 py-4 text-lg">
          <span role="img" aria-label="recycle">🔄</span> Reiniciar
        </Button>
        <Button onClick={handleResetGame} className="px-10 py-4 text-lg">
          <span role="img" aria-label="magic wand">🪄</span> Jugar otra vez
        </Button>
      </div>
    </div>
  );
  
  const animationStyle = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn { animation: fadeIn 0.7s ease-out forwards; }
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-slate-100 flex flex-col">
      <style>{animationStyle}</style>
      <main className="flex-grow w-full flex flex-col items-center justify-center overflow-y-auto scrollbar-thin p-4 sm:p-6">
        <div className="w-full h-full flex items-center justify-center">
            {gameStage === GameStage.Introduction && renderIntroduction()}
            {gameStage === GameStage.CardSelection && renderCardSelection()}
            {gameStage === GameStage.Thinking && renderThinking()}
            {gameStage === GameStage.Result && renderResult()}
        </div>
      </main>
       <footer className="text-center text-xs text-slate-400 w-full py-3 px-4">
        <p>
          Tarot numérico &copy; {new Date().getFullYear()} - Creado por{' '}
          <a
            href="https://github.com/gustav0-ri0s/Tarot-Numerico"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 underline transition-colors"
            aria-label="Gustavo Rios GitHub profile"
          >
            Gustavo Rios
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-3.5 h-3.5 ml-1"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
