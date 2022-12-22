import { useContext } from 'react';
import ThemeContext from '../../context/ThemeSwitchContext/ThemeContext';
import styles from './Timer.module.css';

import themes from '../../styles/themes.module.css';

export default function Timer() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={styles.pomodoroTimer}>
        <button
          className={theme === 'light' ? themes.dark : themes.light}
          type="button"
        >
          -
        </button>
        <span>05:00</span>
        <button
          className={theme === 'light' ? themes.dark : themes.light}
          type="button"
        >
          +
        </button>
      </div>
      <button className="btnStart" type="button">
        Start
      </button>
    </>
  );
}
