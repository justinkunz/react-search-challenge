import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ProfileContext } from '../context/ProfilesContextProvider';
import { setProfiles } from '../actions';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Flexbox, IconButton } from './shared';
import * as API from '../api';
import images from '../assets';

const CountdownLabel = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #1927f0;
  font-weight: 600;
`;
const CountdownContainer = styled.div`
  position: absolute;
  left: 8px;
  font-size: 12px;
`;
const TimerContainer = styled.div`
  margin: 0 8px;
`;

export default function Countdown({ label = null, duration = 10 }) {
  const { dispatch } = useContext(ProfileContext);

  const [isTimerActive, setIsTimerActive] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const handlePauseClick = () => setIsTimerActive(false);
  const handlePlayClick = () => setIsTimerActive(true);

  const handleTimerComplete = () => {
    const fetchProfiles = async () => {
      setIsFetching(true);
      const profiles = await API.getUserProfiles();
      setIsFetching(false);
      dispatch(setProfiles(profiles.response.results));
    };

    fetchProfiles();
    // Restart Timer
    return [true];
  };
  return (
    <CountdownContainer>
      <Flexbox justify="flex-start" align="center">
        {label && <CountdownLabel>{label}</CountdownLabel>}
        <TimerContainer>
          <CountdownCircleTimer
            isPlaying={isTimerActive && !isFetching}
            duration={duration}
            colors={[['#1927f0', 1]]}
            size={27}
            strokeWidth={3}
            onComplete={handleTimerComplete}
          >
            {({ remainingTime }) => (isTimerActive ? remainingTime : '...')}
          </CountdownCircleTimer>
        </TimerContainer>

        <IconButton
          onClick={handlePlayClick}
          src={images.play}
          alt="play"
          m={0}
          disabled={isTimerActive || isFetching}
        />
        <IconButton
          onClick={handlePauseClick}
          src={images.pause}
          alt="pause"
          m={0}
          disabled={!isTimerActive || isFetching}
        />
        {/* </div> */}
      </Flexbox>
    </CountdownContainer>
  );
}
