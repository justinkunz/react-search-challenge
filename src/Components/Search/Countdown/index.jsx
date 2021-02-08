import React, { useState, useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Flexbox, IconButton } from '../../Shared';
import { ProfileContext } from '../../../context/ProfilesContextProvider';
import { useFetchProfiles } from '../../../hooks';
import images from '../../../assets';
import CountdownContainer from './CountdownContainer';
import CountdownLabel from './CountdownLabel';
import TimerContainer from './TimerContainer';

export default function Countdown({ label = null, duration = 10 }) {
  const { isFetching } = useContext(ProfileContext);
  const fetchProfiles = useFetchProfiles();
  const [isTimerActive, setIsTimerActive] = useState(true);

  /**
   * Pause Timer when pause button clicked
   */
  const handlePauseClick = () => setIsTimerActive(false);

  /**
   * Play Timer when play button clicked
   */
  const handlePlayClick = () => setIsTimerActive(true);

  /**
   * When timer completes,
   * refetch profiles
   *
   * @returns {Array} Array with truthy first item required to be returned from cb to keep circle timer active
   */
  const handleTimerComplete = () => {
    fetchProfiles();
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
            {({ remainingTime }) => (isTimerActive && !isFetching ? remainingTime : '...')}
          </CountdownCircleTimer>
        </TimerContainer>

        <IconButton
          onClick={handlePlayClick}
          src={images.play}
          alt="play"
          margin={0}
          disabled={isTimerActive || isFetching}
        />
        <IconButton
          onClick={handlePauseClick}
          src={images.pause}
          alt="pause"
          margin={0}
          disabled={!isTimerActive || isFetching}
        />
      </Flexbox>
    </CountdownContainer>
  );
}
