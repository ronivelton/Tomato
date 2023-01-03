import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../context/ThemeSwitchContext/ThemeContext';
import styles from './Timer.module.css';

import { darkToLight } from '../../utils/themeSwitcher';

export default function Timer() {
  const defaultTime = 1200;
  const { theme } = useContext(ThemeContext);
  const [time, setTime] = useState(defaultTime);
  const [timerIsRunning, setTimerIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (timerIsRunning && time > 0) {
      interval = setInterval(() => {
        if (time === 0) {
          setTimerIsRunning(false);
        }
        setTime(time - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerIsRunning, time]);

  const handleChangeTimer = (e) => {
    e.preventDefault();
    if (time > 1 && e.target.innerText === '-') setTime(time - 60);
    if (time < 3600 && e.target.innerText === '+') setTime(time + 60);
  };

  const formatTimeSeconds = (timeSeconds) => {
    const minutes = Math.floor(timeSeconds / 60);
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = (timeSeconds % 60).toString().padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const startAndPauseTimer = () => {
    setTimerIsRunning(!timerIsRunning);
  };

  const stopTimer = () => {
    setTimerIsRunning(false);
    setTime(defaultTime);
  };

  // const doneTimer = () => {

  // };

  return (
    <>
      <div className={styles.pomodoroTimer}>
        {timerIsRunning ? null : (
          <button
            onClick={(e) => handleChangeTimer(e)}
            className={darkToLight(theme)}
            type="button"
          >
            -
          </button>
        )}
        <span className="timer">{formatTimeSeconds(time)}</span>
        {timerIsRunning ? null : (
          <button
            onClick={(e) => handleChangeTimer(e)}
            className={darkToLight(theme)}
            type="button"
          >
            +
          </button>
        )}
      </div>

      <div className={styles.btnsContainer}>
        <button
          onClick={() => startAndPauseTimer()}
          className={`${styles.btnStartAndPause} ${styles.btn}`}
          type="button"
        >
          {timerIsRunning ? 'Pause' : 'Start'}
        </button>
        {!timerIsRunning ? null : (
          <button
            onClick={() => stopTimer()}
            className={`${darkToLight(theme)} ${styles.btnStop} ${styles.btn}`}
            type="button"
          >
            Stop
          </button>
        )}
        {!timerIsRunning ? null : (
          <button
            onClick={() => console.log('Done Pomodoro')}
            className={`${styles.btnDone} ${styles.btn}`}
            type="button"
          >
            Done
          </button>
        )}
      </div>
    </>
  );
}
