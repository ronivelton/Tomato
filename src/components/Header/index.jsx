import logo from '../../assets/tomato-logo.svg';
import ThemeSwitchToggle from '../ThemeSwitchToggle';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo Tomato" />
        <span>Tomato</span>
      </div>

      <ThemeSwitchToggle />
    </header>
  );
}
