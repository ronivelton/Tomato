import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../context/ThemeSwitchContext/ThemeContext';
import styles from './Timer.module.css';

import { darkToLight } from '../../utils/themeSwitcher';

export default function Timer() {
  const { theme } = useContext(ThemeContext);
  const [time, setTime] = useState(10);
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
    if (time > 1 && e.target.innerText === '-') setTime(time - 1);
    if (time < 60 && e.target.innerText === '+') setTime(time + 1);
  };

  const formatTimeSeconds = (timeSeconds) => {
    const minutes = Math.floor(timeSeconds / 60);
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = (timeSeconds % 60).toString().padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const startTimer = () => {
    setTimerIsRunning(!timerIsRunning);
  };

  const stopTimer = () => {
    setTimerIsRunning(false);
  };

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
      <button onClick={() => startTimer()} className={styles.btnStart} type="button">
        {timerIsRunning ? 'Pause' : 'Start'}
      </button>
    </>
  );
}
