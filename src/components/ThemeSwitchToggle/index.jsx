import { useContext } from 'react';
import ThemeContext from '../../context/ThemeSwitchContext/ThemeContext';

import sunIcon from '../../assets/sun-icon.svg';
import moonIcon from '../../assets/moon-icon.svg';

import styles from './ThemeSwitchToggle.module.css';

export default function ThemeSwitchToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label htmlFor="checkbox" className={styles.switch}>
      <input
        checked={theme !== 'light'}
        onClick={toggleTheme}
        id="checkbox"
        type="checkbox"
      />
      <span className={styles.slider}>
        <img className={styles.sunIcon} src={sunIcon} alt="Sun icon" />
        <img className={styles.moonIcon} src={moonIcon} alt="Moon icon" />
      </span>
    </label>
  );
}
