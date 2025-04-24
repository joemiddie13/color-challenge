import React, { useState, useEffect } from 'react';
import './ColorChallenge.css';

function ColorChallenge() {
  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
  };
  
  const generateColors = () => {
    return [
      generateRandomColor(),
      generateRandomColor(),
      generateRandomColor()
    ];
  };
  
  const [colors, setColors] = useState(generateColors());
  const [targetColor, setTargetColor] = useState('');
  const [result, setResult] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [correctIndex, setCorrectIndex] = useState(null);
  
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setTargetColor(colors[randomIndex]);
    setCorrectIndex(randomIndex);
  }, [colors]);

  const handleColorClick = (clickedColor, index) => {
    if (isGameOver) return;
    
    if (clickedColor === targetColor) {
      setResult('Correct!');
    } else {
      setResult('Incorrect!');
    }
    setIsGameOver(true);
  };
  
  const resetGame = () => {
    const newColors = generateColors();
    setColors(newColors);
    setResult('');
    setIsGameOver(false);
  };
  
  useEffect(() => {
    resetGame();
  }, []);
  
  return (
    <div className="color-challenge">
      <h1>Color Challenge</h1>
      
      <div className="color-swatches">
        {colors.map((color, index) => (
          <div 
            key={index}
            className={`color-swatch ${isGameOver && index === correctIndex ? 'correct-swatch' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color, index)}
          >
            {isGameOver && <span className="color-value">{color}</span>}
          </div>
        ))}
      </div>
      
      <div className="target-color">
        <p>Find this color: <span className="hex-value">{targetColor}</span></p>
      </div>
      
      {result && (
        <div className={`result ${result === 'Correct!' ? 'correct' : 'incorrect'}`}>
          <p>{result}</p>
        </div>
      )}
      
      <button onClick={resetGame}>
        {isGameOver ? 'Play Again' : 'Reset Game'}
      </button>
    </div>
  );
}

export default ColorChallenge; 