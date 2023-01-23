import { useContext } from 'react';
import { darkInToLight } from '../../utils/themeSwitcher';
import ThemeContext from '../../context/ThemeSwitchContext/ThemeContext';

import styles from './PomodoroTimerButton.module.css';

export default function PomodoroTimerButton({
  isTimerRunning,
  handleChangeTimer,
  children,
}) {
  const { theme } = useContext(ThemeContext);
  return isTimerRunning ? null : (
    <button
      onClick={(e) => handleChangeTimer(e)}
      className={`${darkInToLight(theme)} ${styles.pomodoroTimerButton}`}
      type="button"
    >
      {children}
    </button>
  );
}
