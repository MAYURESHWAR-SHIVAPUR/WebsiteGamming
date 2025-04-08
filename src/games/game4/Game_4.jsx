import React, { useState, useEffect } from "react";
import "./Game_4.css"; // Include CSS for styling
import {useLocation  , useNavigate } from 'react-router-dom';
const game_4 = () => {
  const navigate = useNavigate()
  const [dinoPosition, setDinoPosition] = useState(0); // Dino's vertical position
  const [obstaclePosition, setObstaclePosition] = useState(100); // Obstacle's right position
  const [isJumping, setIsJumping] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0); // Game score
  let num = 10
  // Handle Dino jumping
  const handleJump = () => {
    if (isJumping || isGameOver) return;
    setIsJumping(true);
    let height = 0;

    const jumpInterval = setInterval(() => {
      if (height >= 100) {
        clearInterval(jumpInterval);
        const fallInterval = setInterval(() => {
          if (height <= 0) {
            clearInterval(fallInterval);
            setIsJumping(false);
          } else {
            height -= 5;
            setDinoPosition(height);
          }
        }, 20);
      } else {
        height += 5;
        setDinoPosition(height);
      }
    }, 20);
  };

  // Move the obstacle
  useEffect(() => {
    if (isGameOver) return;

    const obstacleInterval = setInterval(() => {
      setObstaclePosition((prev) => {
        if (prev <= 0) return 100; // Reset obstacle position
        return prev - 0.7;
      });
    }, num);

    return () => clearInterval(obstacleInterval);
  }, [isGameOver]);

  // Score increment logic
  useEffect(() => {
    if (isGameOver) return;
    if(score == 700){
      num = num - 2
    }
    else if(score == 1000){
      num = num - 3
    }
    const scoreInterval = setInterval(() => {
      setScore((prev) => prev + 1); // Increment score
    }, 100);

    return () => clearInterval(scoreInterval); // Cleanup interval on unmount or game over
  }, [isGameOver]);

  // Check for collision
  useEffect(() => {
    if (
      obstaclePosition <= 20 && // Close to Dino horizontally
      obstaclePosition >= 0 && // Ensure it hasn't reset
      dinoPosition < 10 // Dino is not high enough
    ) {
      setIsGameOver(true);
      setTimeout(()=>
      navigate('/result',{state:{gamenumber : 4 , message : score ,leveled : 1 }}),100)
    }
  }, [obstaclePosition, dinoPosition]);
  return (
    <div className="game2back">
      <div className="game-container" onClick={handleJump}>
        <h1 className="score">Score: {score}</h1>
        <div
          className="dino"
          style={{ bottom: `${dinoPosition}px` }}
        ></div>
        <div
          className="obstacle"
          style={{ right: `${obstaclePosition}%` }}
        ></div>
      </div>
    </div>
  );
};

export default game_4;
