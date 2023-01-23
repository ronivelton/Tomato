import { useContext } from 'react';
import { darkToLight } from '../../utils/themeSwitcher';
import ThemeContext from '../../context/ThemeSwitchContext/ThemeContext';

import styles from './PomodoroTimerButton.module.css';

export default function PomodoroTimerButton({
  timerIsRunning,
  handleChangeTimer,
  children,
}) {
  const { theme } = useContext(ThemeContext);
  return timerIsRunning ? null : (
    <button
      onClick={(e) => handleChangeTimer(e)}
      className={`${darkToLight(theme)} ${styles.pomodoroTimerButton}`}
      type="button"
    >
      {children}
    </button>
  );
}
