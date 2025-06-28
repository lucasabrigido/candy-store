'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Candy from './candy';
import Cup from './cup';
import './index.css';
import { getRandomItemByChance } from '@utils/functions';
import Message from './message';

const App = () => {
    const [props, setProps] = useState({ height: 400, width: 400 });
    const [candies, setCandies] = useState([]);
    const [cupX, setCupX] = useState(200);
    const cupXRef = useRef(200);
    const [score, setScore] = useState({ score: 0, last: null });
    const gameRef = useRef(null);

    // Movimento com mouse e toque
    const updateCupPosition = useCallback((clientX) => {
        const game = gameRef.current;
        if (!game) return;
        const rect = game.getBoundingClientRect();
        let newX = clientX - rect.left - 30;
        cupXRef.current = newX;
    }, [gameRef.current]);

    useEffect(() => {
        const handleMouseMove = (e) => updateCupPosition(e.clientX);
        const handleTouchMove = (e) => {
            if (e.touches.length > 0) updateCupPosition(e.touches[0].clientX);
        };

        const game = gameRef.current;
        if (game) {
            game.addEventListener('mousemove', handleMouseMove);
            game.addEventListener('touchmove', handleTouchMove);
        }

        return () => {
            if (game) {
                game.removeEventListener('mousemove', handleMouseMove);
                game.removeEventListener('touchmove', handleTouchMove);
            }
        };
    }, []);

    // Loop para atualizar cupX com animação fluida
    useEffect(() => {
        let animationFrame;
        const loop = () => {
            setCupX(cupXRef.current);
            animationFrame = requestAnimationFrame(loop);
        };
        animationFrame = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    // Gera doces
    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();
            setCandies((prev) => [...prev, { id, x: Math.random() * props.width, y: 0, ...getRandomItemByChance() }]);
        }, 1000);
        return () => clearInterval(interval);
    }, [props.width]);

    useEffect(() => {
        if (gameRef.current) {
            const { height, width } = gameRef.current.getBoundingClientRect();
            setProps({ height, width });
        }
    }, []);
    // Move doces e verifica colisão
    useEffect(() => {
        const interval = setInterval(() => {
            setCandies((prev) =>
                prev
                    .map((candy) => {
                        const newY = candy.y + candy.speed;
                        if (
                            newY > (props.height - 60) &&
                            candy.x >= cupXRef.current - 20 &&
                            candy.x <= cupXRef.current + 60
                        ) {
                            setScore((s) => ({ score: s.score + candy.points, last: candy.points }));
                            return null;
                        }
                        if (newY >= (props.height)) return null;
                        return { ...candy, y: newY };
                    })
                    .filter(Boolean)
            );
        }, 50);
        return () => clearInterval(interval);
    }, [props.height]);

    return (
        <div className="game" ref={gameRef}>
            <h1>Pontuação: {score.score} <span className={score.last && score.last > 0 ? 'green' : 'red'} >{score.last ? `(${score.last})` : ''}</span></h1>
            <Message/>
            <Cup x={cupX} />
            {candies.map((candy) => (
                <Candy key={candy.id} x={candy.x} type={candy.type} y={candy.y} />
            ))}
        </div>
    );
};

export default App;
