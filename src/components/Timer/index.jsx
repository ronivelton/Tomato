import { useContext } from 'react';
import ThemeContext from '../../context/ThemeSwitchContext/ThemeContext';
import styles from './Timer.module.css';

import { darkToLight } from '../../utils/themeSwitcher';

export default function Timer() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={styles.pomodoroTimer}>
        <button className={darkToLight(theme)} type="button">
          -
        </button>
        <span>05:00</span>
        <button className={darkToLight(theme)} type="button">
          +
        </button>
      </div>
      <button className={styles.btnStart} type="button">
        Start
      </button>
    </>
  );
}
