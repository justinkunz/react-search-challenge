import React, { useState } from 'react';
import styled from 'styled-components';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Flexbox } from './shared';

const CountdownLabel = styled.div`
  color: lightgray;
  font-size: 14px;
  color: #1927f0;
`;
const CountdownContainer = styled.div`
  height: 24px;
  position: absolute;
  left: 8px;
  font-size: 12px;
`;
const TimerContainer = styled.div`
  margin: 0 8px;
`;

export default function Countdown({ label = null }) {
  const [isTimerActive, setIsTimerActive] = useState(true);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const handleTimerComplete2 = async () => {
    setIsTimerActive(false);
    await sleep(3000);
    console.log('done');

    setIsTimerActive(true);
  };
  const handleTimerComplete = () => {
    handleTimerComplete2();
    // Restart Timer
    return [true];
  };
  return (
    <CountdownContainer>
      <Flexbox justify="flex-start" align="center">
        {label && <CountdownLabel>{label}</CountdownLabel>}
        <TimerContainer>
          <CountdownCircleTimer
            isPlaying={isTimerActive}
            duration={10}
            colors={[['#1927f0', 1]]}
            size={27}
            strokeWidth={3}
            onComplete={handleTimerComplete}
          >
            {({ remainingTime }) => (isTimerActive ? remainingTime : '...')}
          </CountdownCircleTimer>
        </TimerContainer>
      </Flexbox>
    </CountdownContainer>
  );
}
